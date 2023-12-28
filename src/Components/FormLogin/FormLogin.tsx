import { ChangeEvent, FormEvent, useState } from "react";
import { useUserState } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  FormBtn,
  InputForm,
  LabelInput,
  SectionForm,
  TitleForm,
} from "./FormLogin.styled";

export const FormLogin: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { setUser } = useUserState();
  const navigate = useNavigate();
  const handleChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    let formData = event.target;
    switch (formData.name) {
      case "login":
        setLogin(formData.value);
        break;
      case "email":
        setEmail(formData.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    setUser({ login, email, loggedIn: true });
    navigate("/user");
    localStorage.setItem(
      "user",
      JSON.stringify({ login, email, loggedIn: true })
    );
  };

  return (
    <main>
      <SectionForm>
        <Container>
          <TitleForm>Авторизація</TitleForm>
          <Form onSubmit={handleSubmit}>
            <LabelInput>
              Ім'я
              <InputForm
                type="text"
                name="login"
                onChange={handleChangeForm}
                value={login}
                required
              />
            </LabelInput>
            <LabelInput>
              Email
              <InputForm
                type="email"
                name="email"
                onChange={handleChangeForm}
                value={email}
                required
              />
            </LabelInput>
            <LabelInput>
              Пароль
              <InputForm
                type="password"
                name="password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
            </LabelInput>
            <FormBtn type="submit">Авторизуватися</FormBtn>
          </Form>
        </Container>
      </SectionForm>
    </main>
  );
};
