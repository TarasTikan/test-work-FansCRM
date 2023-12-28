import { useEffect } from "react";
import { useUserState } from "../UserContext/UserContext";
import { Container, SectionUser, UserInfo, UserTitle } from "./User.styled";

export const User: React.FC = () => {
  const { user, setUser } = useUserState();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);
  return (
    <main>
      <SectionUser>
        <Container>
          <UserTitle>Користувач</UserTitle>
          <UserInfo>
            <li>
              <p>Ім'я: {user?.login}</p>
            </li>
            <li>
              <p>email: {user?.email}</p>
            </li>
          </UserInfo>
        </Container>
      </SectionUser>
    </main>
  );
};
