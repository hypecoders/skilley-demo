import { Box, Button, Divider, Text, useToast } from "@chakra-ui/react";
import { InputControl, TextareaControl } from "formik-chakra-ui";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HiOutlinePlus as IAdd } from "react-icons/hi";

import { Question } from "../../../common/db";
import { addQuestionToTest, updateTestData } from "../../../utils/firebase";
import FormLabel from "../../FormLabel";
import { getFormValues } from "../../../utils";
import { toastProps } from "../../../common/defaults";

import QuestionCard from "./QuestionCard";

type Props = {
  defaultQuestionArray: Question[];
};

const TabQuestions = ({ defaultQuestionArray }: Props) => {
  const [searchParams] = useSearchParams();
  const toast = useToast();

  const [questions, setQuestions] = useState<Question[]>(defaultQuestionArray);
  const [questionNumber, setQuestionNumber] = useState(2);

  const addQuestion = useCallback(async () => {
    try {
      const newQuestion: Question = {
        number: questionNumber,
        title: "",
        description: "",
        type: "singleLine",
      };
      console.log(newQuestion);
      setQuestionNumber((prev) => prev + 1);
      await addQuestionToTest(searchParams.get("id") as never, newQuestion);
      setQuestions([...questions, newQuestion]);
    } catch (err) {
      console.error(err);
    }
  }, [questionNumber, questions, searchParams]);

  const handleBlur = useCallback(
    async (e) => {
      const formValues = getFormValues(e.target);
      const key = Object.keys(formValues)[0];
      const value = Object.values(formValues)[0];
      console.log(key, value);
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
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        Introduction
      </Text>
      <Divider mt={2} mb={6} />
      {/* Question Intro */}
      <Box
        rounded="xl"
        bg="white"
        p={5}
        border="2px"
        borderColor="gray.100"
        boxShadow="sm"
        mb={12}
      >
        <FormLabel>Title</FormLabel>
        <InputControl name="questionIntro.title" onBlur={handleBlur} mb={4} />
        <FormLabel>Message text</FormLabel>
        <TextareaControl
          name="questionIntro.message"
          onBlur={handleBlur}
          textareaProps={{ focusBorderColor: "brand.500", variant: "filled" }}
        />
      </Box>
      {/* Questions */}
      <Text fontSize="xl" fontWeight="bold">
        Questions
      </Text>
      <Text fontSize="sm" fontWeight="medium" color="gray.500">
        Build your questionnaire by simply adding questions
      </Text>
      <Divider mt={2} mb={6} />
      {questions.map((question, i) => (
        <Box mb={6} key={i}>
          <QuestionCard payload={question} />
        </Box>
      ))}
      <Button
        onClick={addQuestion}
        leftIcon={<IAdd size={20} />}
        iconSpacing={2}
        variant="primary"
        mb={6}
      >
        Add Question
      </Button>
    </Box>
  );
};

export default TabQuestions;
