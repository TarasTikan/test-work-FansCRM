import React, { createContext, useContext, useState } from "react";

type User = {
  login: string;
  email: string;
  loggedIn: boolean;
};

type UserContextProps = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserState() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
