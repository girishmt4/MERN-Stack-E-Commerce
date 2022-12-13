import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperaccess.com/full/2593044.jpg") center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 1rem;
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 0.5rem;
`;

const Button = styled.button`
  width: 25%;
  border: none;
  padding: 1rem;
  background-color: teal;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #014f4f;
    transition: all 0.5s ease;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign up With ShopMe.</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
