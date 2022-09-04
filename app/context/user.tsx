import {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "$types";

export const UserContext = createContext<UserState>({
  setUser: () => {},
  user: {},
});

interface UserState {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}
export const UserDataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

//export const userService = useContext(UserContext);
