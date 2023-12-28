import styled from "styled-components";

export const Container = styled.div`
  width: 1357px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const LogoutBtn = styled.button`
  border-radius: 10px;
  color: white;
  transition: 0.2s linear;
  background: #0b63f6;
  height: 40px;
  width: 100px;
  border: transparent;
  &:hover {
    box-shadow: #003cc5 0 0px 0px 40px inset;
  }
`;

export const HeaderText = styled.p`
  font-family: open sans;
  font-style: normal;
  font-weight: 700;
`;
