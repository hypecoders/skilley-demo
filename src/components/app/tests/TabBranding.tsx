import {
  Box,
  Button,
  Divider,
  FormLabel,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { InputControl } from "formik-chakra-ui";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { toastProps } from "../../../common/defaults";
import { getFormValues } from "../../../utils";
import { updateTestData } from "../../../utils/firebase";

type Props = {
  defaultPrimary: string;
  defaultSecondary: string;
};

const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const TabBranding = ({ defaultPrimary, defaultSecondary }: Props) => {
  const [searchParams] = useSearchParams();
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const toast = useToast();

  const [primaryCol, setPrimaryCol] = useState(defaultPrimary);
  const [secondaryCol, setSecondaryCol] = useState(defaultSecondary);
  const [showButtonMsg, setShowButtonMsg] = useState(false);

  const messageMe = useCallback(() => setShowButtonMsg(true), []);

  const calculateColor = useCallback((hex: string) => {
    const rgb = hexToRgb(hex);
    // shutup typescript plz bro
    if (!rgb) {
      return "";
    }
    return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186
      ? "#000000"
      : "#ffffff";
  }, []);

  const handleBlur = useCallback(
    async (e) => {
      const formValues = getFormValues(e.target);
      const colorValue = Object.values(formValues)[0];
      const colorKey = Object.keys(formValues)[0];
      try {
        await updateTestData(searchParams.get("id") as never, {
          [colorKey]: {
            colorValue,
          },
        });
        colorKey === "branding.primary"
          ? setPrimaryCol(colorValue)
          : setSecondaryCol(colorValue);
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
    <Box mb={12}>
      <Text fontSize="xl" fontWeight="bold">
        Test branding
      </Text>
      <Text fontSize="sm" fontWeight="medium" color="gray.500">
        Customize the color scheme of your test - simply paste your brand color
      </Text>
      <Divider mt={2} mb={6} />
      <Box
        rounded="xl"
        bg="white"
        p={5}
        border="2px"
        borderColor="gray.100"
        boxShadow="sm"
        mb={12}
      >
        <SimpleGrid columns={2} columnGap={6} rowGap={3} w="full">
          <GridItem colSpan={colSpan}>
            <FormLabel>Primary color</FormLabel>
            <InputControl
              name="branding.primary"
              onBlur={handleBlur}
              inputProps={{ placeholder: primaryCol }}
            />
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormLabel>Secondary color</FormLabel>
            <InputControl
              name="branding.secondary"
              onBlur={handleBlur}
              inputProps={{ placeholder: secondaryCol }}
            />
          </GridItem>
        </SimpleGrid>
      </Box>
      <Text fontSize="xl" fontWeight="bold">
        Preview
      </Text>
      <Divider mt={2} mb={6} />
      <HStack spacing={4} align="center">
        <Button
          color={calculateColor(primaryCol)}
          bg={primaryCol}
          _hover={{ bg: primaryCol }}
          _focus={{ ring: 3, ringColor: secondaryCol }}
          _active={{ bg: primaryCol }}
          onClick={messageMe}
        >
          Click me!
        </Button>
        {showButtonMsg && <Text>Looking sharp 👌</Text>}
      </HStack>
    </Box>
  );
};

export default TabBranding;
