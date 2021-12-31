import { createContext, FC, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";

import { getRole, onAuthChanged } from "../utils/firebase";
import { RoleData } from "../common/db";

const UserContext = createContext<(User & RoleData) | undefined>(undefined);

export const UserProvider: FC = ({ children }) => {
  // Hold user info in state
  const [user, setUser] = useState<User & RoleData>();

  const update = async (u: User) => {
    try {
      const data = await getRole(u.uid);
      console.log(u.uid);
      if (data.exists()) {
        const role = data.data();
        setUser({ ...u, ...role });
        // console.log({ ...u, ...role });
      } else {
        console.log("Could not find role in db");
      }
      // console.log('user;', user);
    } catch {
      console.log("Call to get role failed");
    }
  };
  // Setup onAuthChanged once when component is mounted
  useEffect(() => {
    onAuthChanged((u) => {
      console.log(user);
      if (u) {
        localStorage.setItem("user", "t");
        update(u);
      } else {
        localStorage.removeItem("user");
        setUser(undefined);
      }
    });
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Hook providing logged in user information
const useLoggedInUser = () => useContext(UserContext);

export default useLoggedInUser;
