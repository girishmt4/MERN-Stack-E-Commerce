import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://static-blog.omniconvert.com/blog/wp-content/uploads/2020/09/21135804/How-to-do-Growth-of-eCommerce-Website-scaled.jpg")
      center;
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
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 0.5rem;
`;

const Button = styled.button`
  width: 40%;
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

const Link = styled.a`
  font-size: 0.85rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log Into Your ShopMe Account</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Log In</Button>
          <Link>Forgot Password?</Link>
          <Link>Create A New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
