import { Outlet, useNavigate } from "react-router-dom";
import { useUserState } from "../UserContext/UserContext";
import { MouseEvent } from "react";
import { Container, HeaderText, LogoutBtn } from "./SharedLayout.styled";

export const SharedLayout: React.FC = () => {
  const { user, setUser } = useUserState();
  const navigate = useNavigate();
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    setUser({ login: "", email: "", loggedIn: false });
    navigate("/");
  };
  return (
    <>
      <header>
        {user?.loggedIn && (
          <Container>
            <HeaderText>Ласкаво просимо, {user.login}!</HeaderText>
            <LogoutBtn type="button" onClick={logout}>
              Вихід
            </LogoutBtn>
          </Container>
        )}
      </header>
      <Outlet />
    </>
  );
};
