import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";
import Logo from "../Logo";

import DesktopNav from "./navbar/DesktopNav";
import MenuToggle from "./navbar/MenuToggle";
import MobileNav from "./navbar/MobileNav";

type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Talent Pool",
    href: "/explore",
  },
];

const AppBar = () => {
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  const isUser = localStorage.getItem("user");

  return (
    <Box>
      <Flex
        bg="white"
        py={2}
        px={{ base: 4, md: 10 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
        justify="space-between"
      >
        <MenuToggle isOpen={isOpen} onToggle={onToggle} />
        <Flex justify={{ base: "center", md: "left" }} align="center">
          <Logo />
        </Flex>

        <Box display={{ base: "none", md: "block" }} ml={20}>
          <DesktopNav />
        </Box>
        {isUser ? (
          <Button
            onClick={() => navigate("/app/dashboard")}
            variant="primary"
            size={buttonSize}
          >
            Dashboard
          </Button>
        ) : (
          <HStack spacing={{ md: 4 }}>
            <LoginModal />
            <Box display={{ base: "none", md: "block" }}>
              <RegisterModal />
            </Box>
          </HStack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default AppBar;
