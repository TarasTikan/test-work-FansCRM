import styled from "styled-components";
export const InputForm = styled.input`
  display: block;
  width: 200px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Container = styled.div`
  width: 1357px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

export const FormBtn = styled.button`
  border-radius: 10px;
  color: white;
  transition: 0.2s linear;
  background: #0b63f6;
  height: 50px;
  width: 150px;
  border: transparent;
  &:hover {
    box-shadow: #003cc5 0 0px 0px 40px inset;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

export const SectionForm = styled.section`
  padding-top: 120px;
`;

export const TitleForm = styled.h1`
  font-family: open sans;
  font-style: normal;
  margin-bottom: 40px;
`;