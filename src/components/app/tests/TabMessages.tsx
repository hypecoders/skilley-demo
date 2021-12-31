import { Box, Divider, Text, useToast } from "@chakra-ui/react";
import { TextareaControl } from "formik-chakra-ui";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { toastProps } from "../../../common/defaults";
import { getFormValues } from "../../../utils";
import { updateTestData } from "../../../utils/firebase";
import FormLabel from "../../FormLabel";

const TAB_CONTENT = [
  {
    title: "Privacy information & Consent",
    description:
      "First thing they see, respondents are shown privacy information and consent.",
    name: "messages.privacy",
    margin: 12,
  },
  {
    title: "Welcome message",
    description:
      "Respondents will see this message when they first arrive to take part in the test.",
    name: "messages.welcome",
    margin: 12,
  },
  {
    title: "Thank you message",
    description: "Respondents see this message after completing the test.",
    name: "messages.thanks",
    margin: 12,
  },
  {
    title: "Closed test message",
    description: "Respondents see this message if the test is already closed.",
    name: "messages.closed",
    margin: 6,
  },
];

const TabMessages = () => {
  const [searchParams] = useSearchParams();
  const toast = useToast();

  const handleBlur = useCallback(
    async (e) => {
      const formValues = getFormValues(e.target);
      const key = Object.keys(formValues)[0];
      const value = Object.values(formValues)[0];
      try {
        await updateTestData(searchParams.get("id") as never, {
          [key]: value,
        });
      } catch (err) {
        toast({
          title: "Fail.",
          description: "Unknown error occured.",
          status: "error",
          ...toastProps,
        });
      }
    },
    [searchParams, toast]
  );
  return (
    <>
      {TAB_CONTENT.map((message) => (
        <Box key={message.title} mb={message.margin}>
          <Text fontSize="xl" fontWeight="bold">
            {message.title}
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="gray.500">
            {message.description}
          </Text>
          <Divider mt={2} mb={6} />
          <Box
            rounded="xl"
            bg="white"
            p={5}
            border="2px"
            borderColor="gray.100"
            boxShadow="sm"
          >
            <FormLabel>Message text</FormLabel>
            <TextareaControl
              name={message.name}
              onBlur={handleBlur}
              textareaProps={{
                focusBorderColor: "brand.500",
                variant: "filled",
              }}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default TabMessages;
