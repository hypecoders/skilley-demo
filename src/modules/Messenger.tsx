import {
	Avatar,
	Box,
	Button,
	Flex,
	Heading,
	IconButton,
	Input,
	Text
} from '@chakra-ui/react';
import { limit, orderBy, Timestamp } from '@firebase/firestore';
import { addDoc, onSnapshot, query, where } from 'firebase/firestore';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Message, UserData } from '../common/db';
import Loader from '../components/Loader';
import useWindowDimensions from '../hooks/windowDimensions';
import { getUserData, messagesCollection } from '../utils/firebase';

type Props = {
	userData: UserData;
	recipient?: UserData;
	setIsActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
	setRecipient: React.Dispatch<React.SetStateAction<UserData | undefined>>;
};

const Messenger = ({
	userData,
	recipient,
	setIsActiveSearch,
	setRecipient
}: Props) => {
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<Message[]>([]);
	const [usersData, setUsersData] = useState<UserData[]>([]);

	const { height } = useWindowDimensions();

	const users: (string | undefined)[] = useMemo(
		() =>
			messages.map(message =>
				message.participants.find(participant => participant !== userData.uid)
			),
		[messages]
	);

	// This removes duplications from usersData
	useEffect(() => {
		const update = async () => {
			const data: UserData[] = [];
			const seen: string[] = [];

			for (let i = 0; i < users.length; i++) {
				/* eslint-disable  @typescript-eslint/no-non-null-assertion */
				const fetchedData = await getUserData(users[i]!);
				if (fetchedData.exists()) {
					if (!seen.includes(fetchedData.data().uid)) {
						data.push(fetchedData.data());
						seen.push(fetchedData.data().uid);
					}
				}
			}

			if (data.length > 0 && recipient === undefined) {
				setRecipient(data[0]);
			}
			setUsersData(data);
		};
		update();
	}, [users]);

	useEffect(() => {
		// This gets all messages sent to me or sent by me
		const q = query(
			messagesCollection,
			where('participants', 'array-contains', userData?.uid),
			orderBy('createdAt'),
			limit(25)
		);
		const unsubscribe = onSnapshot(q, querySnapshot => {
			const messagesData: Message[] = [];
			querySnapshot.forEach(doc => {
				messagesData.push(doc.data());
			});
			setMessages(messagesData);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const searchTrigger = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const sendMsg = async () => {
		if (message.length > 0) {
			await addDoc(messagesCollection, {
				createdAt: Timestamp.now(),
				text: message,
				sender: userData.uid,
				participants: [userData.uid, recipient?.uid]
			});
			setMessage('');
		}
	};

	if (!recipient && messages.length === 0) {
		return (
			<Flex
				h={height - 80 - 48 - 48}
				bg="white"
				border="2px"
				borderColor="gray.100"
				boxShadow="sm"
				justify="center"
				align="center"
				flexDirection="column"
			>
				<Text>You have empty message box </Text>
				<Button
					my={2}
					variant="primary"
					onClick={() => setIsActiveSearch(true)}
				>
					To search
				</Button>
			</Flex>
		);
	}

	if (!recipient) {
		return <Loader />;
	}

	return (
		<Flex>
			<Flex border="2px" borderColor="gray.100" bg="white" direction="column">
				<IconButton
					bg="brand.500"
					color="white"
					mx="auto"
					my={2}
					height={9}
					width={9}
					icon={<AiOutlineSearch />}
					aria-label="<-"
					onClick={() => setIsActiveSearch(true)}
				/>

				<Flex
					w={20}
					bg="white"
					h={height - 80 - 48 - 48 - 56}
					flexDirection="column"
					overflowY="auto"
					overflowX="hidden"
					border="2px"
					borderColor="gray.100"
				>
					{usersData.map(user => (
						<Flex
							bg={user.uid === recipient.uid ? 'gray.100' : 'white'}
							key={user.uid}
						>
							<Avatar
								mx="auto"
								my={2}
								as={Button}
								height={10}
								width={10}
								color="white"
								bg="brand.300"
								name={user?.firstName}
								src={user?.icon}
								onClick={() => setRecipient(user)}
								_hover={{ bg: 'brand.200' }}
								_focus={{ ring: 0 }}
							/>
						</Flex>
					))}
				</Flex>
			</Flex>

			<Flex
				w="100%"
				bg="white"
				h={height - 80 - 48 - 48}
				flexDirection="column"
				justifyContent="space-between"
			>
				<Flex
					height={16}
					border="2px"
					borderColor="gray.100"
					boxShadow="sm"
					justify="center"
					align="center"
				>
					<Heading size="md">{`${recipient.firstName} ${recipient.lastName}`}</Heading>
				</Flex>

				<Box overflowY="auto" height="100%">
					{messages
						.filter(message => message.participants.includes(recipient.uid))
						.map((message, idx) => (
							<Box
								align={message.sender === userData.uid ? 'right' : 'left'}
								key={idx}
							>
								<Text
									display="inline-block"
									px={5}
									py={1}
									mx={3}
									border="2px"
									borderColor={
										message.sender === recipient.uid ? 'brand.500' : 'gray.300'
									}
									my={2}
									borderRadius="25px"
								>
									{message.text}
								</Text>
							</Box>
						))}
				</Box>

				<Flex>
					<Input
						border="2px"
						borderColor="brand.500"
						bg="white"
						placeholder="Your message"
						value={message}
						onChange={e => searchTrigger(e)}
					/>
					<Button onClick={sendMsg} variant="primary">
						send
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Messenger;
