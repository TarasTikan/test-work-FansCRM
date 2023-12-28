import styled from "styled-components";

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

export const UserInfo = styled.ul`
  list-style: none;
  flex-direction: column;
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const SectionUser = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

export const UserTitle = styled.h1`
  color: #333;
  text-align: center;
`;
