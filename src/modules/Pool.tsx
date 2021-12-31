import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  SlideFade,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { getDocs } from "firebase/firestore";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  HiOutlineChevronLeft as ILeft,
  HiOutlineChevronRight as IRight,
} from "react-icons/hi";

import { Locations, UserData } from "../common/db";
import skillList from "../common/skillList";
import Loading from "../components/Loading";
import PoolProfileCard from "../components/cards/PoolProfileCard";
import { usersDataCollection } from "../utils/firebase";

const Pool = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [idx, setIdx] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(true);
  const [toLeft, setToLeft] = useState<boolean>(true);

  const filtredUsers = useMemo(
    () =>
      users
        .filter((user) => skills.every((val) => user.skills?.includes(val)))
        .filter((user) =>
          locations.every((val) => user.locations?.includes(val))
        ),
    [locations, skills, users]
  );

  const incrementIdx = () => {
    setToLeft(true);
    setAnimate(false);

    setTimeout(() => {
      setToLeft(false);
      setAnimate(true);
      if (idx === filtredUsers.length - 1) {
        setIdx(0);
      } else {
        setIdx(idx + 1);
      }
    }, 200);
  };

  const decrementIdx = () => {
    setToLeft(false);
    setAnimate(false);

    setTimeout(() => {
      setToLeft(true);
      setAnimate(true);
      if (idx === 0) {
        setIdx(filtredUsers.length - 1);
      } else {
        setIdx(idx - 1);
      }
    }, 200);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const querySnapshot = await getDocs(usersDataCollection);
      querySnapshot.forEach((doc) => {
        setUsers((prevUsers) => [...prevUsers, doc.data()]);
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useCallback(() => setIdx(0), []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box m={{ base: 4, md: 20 }}>
      <Heading my={{ base: 10, md: 20 }} fontWeight="bold" textAlign="center">
        Search for
        <Text as="span" color="blue.400" fontWeight="black">
          {" "}
          talented{" "}
        </Text>
        people
      </Heading>

      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton justifyContent="center" _focus={{ ring: 0 }}>
            <Text fontWeight="black" fontSize="xl" color="pink.400" mx={1}>
              Skills
            </Text>
            <AccordionIcon h={8} w={8} color="pink.400" mx={1} />
          </AccordionButton>
          <AccordionPanel>
            <Wrap justify="center" spacing={{ base: 1, md: 4 }}>
              {skillList.map((skill, i) => (
                <WrapItem key={i}>
                  <Button
                    variant="checkbox"
                    fontWeight={skills.includes(skill) ? "black" : "medium"}
                    color={skills.includes(skill) ? "green.500" : "gray.700"}
                    onClick={() =>
                      setSkills(
                        skills.includes(skill)
                          ? skills.filter((item) => item !== skill)
                          : (prevSkills) => [...prevSkills, skill]
                      )
                    }
                  >
                    {skill}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton justifyContent="center" _focus={{ ring: 0 }}>
            <Text fontWeight="black" fontSize="xl" color="teal.400" mx={1}>
              Locations
            </Text>
            <AccordionIcon h={8} w={8} color="teal.400" mx={1} />
          </AccordionButton>
          <AccordionPanel>
            <Wrap justify="center" spacing={{ base: 1, md: 4 }}>
              {Locations.map((location, i) => (
                <WrapItem key={i}>
                  <Button
                    variant="checkbox"
                    fontWeight={
                      locations.includes(location.value) ? "black" : "medium"
                    }
                    color={
                      locations.includes(location.value)
                        ? "green.500"
                        : "gray.700"
                    }
                    onClick={() =>
                      setLocations(
                        locations.includes(location.value)
                          ? locations.filter((item) => item !== location.value)
                          : (prevLocations) => [
                              ...prevLocations,
                              location.value,
                            ]
                      )
                    }
                  >
                    {location.label}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex justify="center" align="center" my={20} h="55vh">
        <Button
          variant="blank"
          onClick={decrementIdx}
          leftIcon={<ILeft size={24} />}
          display={filtredUsers.length < 2 ? "none" : ""}
          _hover={{ color: "brand.500" }}
        />
        <Box w={{ base: "full", md: 300 }}>
          {filtredUsers[idx] && (
            <SlideFade
              in={animate}
              offsetX={toLeft ? "-10px" : "10px"}
              unmountOnExit
            >
              <PoolProfileCard user={filtredUsers[idx]} />
            </SlideFade>
          )}
        </Box>
        <Button
          variant="blank"
          onClick={incrementIdx}
          rightIcon={<IRight size={24} />}
          display={filtredUsers.length < 2 ? "none" : ""}
          _hover={{ color: "brand.500" }}
        />
      </Flex>
    </Box>
  );
};

export default Pool;
