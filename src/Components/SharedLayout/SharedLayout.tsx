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
            <HeaderText>Welcome, {user.login}!</HeaderText>
            <LogoutBtn type="button" onClick={logout}>
              Logout
            </LogoutBtn>
          </Container>
        )}
      </header>
      <Outlet />
    </>
  );
};
