import { Box, VStack, Text, Divider, Radio, useToast } from "@chakra-ui/react";
import {
  InputControl,
  RadioGroupControl,
  TextareaControl,
} from "formik-chakra-ui";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Question } from "../../../common/db";
import { toastProps } from "../../../common/defaults";
import { getFormValues } from "../../../utils";
import {
  addQuestionToTest,
  removeQuestionFromTest,
} from "../../../utils/firebase";
import FormLabel from "../../FormLabel";

type Props = {
  payload: Question;
};

const QuestionCard = ({ payload }: Props) => {
  const [searchParams] = useSearchParams();
  const index = payload.number - 1;
  const toast = useToast();

  const [question, setQuestion] = useState<Question>(payload);

  useEffect(() => {
    const addToDB = async () => {
      if (payload !== question) {
        await addQuestionToTest(searchParams.get("id") as never, question);
      }
    };
    addToDB();
  }, [payload, question, searchParams]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBlur = async (e: any) => {
    const formValues = getFormValues(e.target);
    const key = Object.keys(formValues)[0];
    const value = Object.values(formValues)[0];
    console.log(key, value);
    try {
      await removeQuestionFromTest(searchParams.get("id") as never, question);
      setQuestion({
        number: question.number,
        title: key.split("].")[1] === "title" ? value : question.title,
        description:
          key.split("].")[1] === "description" ? value : question.description,
        type:
          value === "singleLine" ||
          value === "multiLine" ||
          value === "radioOpt" ||
          value === "checkboxOpt"
            ? value
            : question.type,
      });
    } catch (err) {
      toast({
        title: "Fail.",
        description: "Unknown error occured.",
        status: "error",
        ...toastProps,
      });
    }
  };

  return (
    <Box
      rounded="xl"
      bg="white"
      p={5}
      border="2px"
      borderColor="gray.100"
      boxShadow="sm"
    >
      <VStack spacing={6} align="left">
        <Box>
          <Text fontSize="lg" fontWeight="bold" color="brand.500">
            Question {question.number}
          </Text>
          <Divider mt={2} />
        </Box>
        <Box>
          <FormLabel required>Title</FormLabel>
          <InputControl
            name={`questions[${index}].title`}
            onBlur={handleBlur}
            inputProps={{ placeholder: "Your question" }}
          />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <TextareaControl
            name={`questions[${index}].description`}
            onBlur={handleBlur}
            textareaProps={{
              focusBorderColor: "brand.500",
              variant: "filled",
              placeholder: "Your question description",
            }}
          />
        </Box>
        <Box>
          <FormLabel>Answer type</FormLabel>
          <RadioGroupControl
            name={`questions[${index}].type`}
            onChange={handleBlur}
            stackProps={{ spacing: 6 }}
          >
            <Radio defaultChecked value="singleLine">
              Single line
            </Radio>
            <Radio value="multiLine">Multi line</Radio>
            <Radio value="radioOpt">Radio options</Radio>
            <Radio value="checkboxOpt">Checkbox options</Radio>
          </RadioGroupControl>
        </Box>
      </VStack>
    </Box>
  );
};

export default QuestionCard;
