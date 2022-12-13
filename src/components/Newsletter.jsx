import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 1rem;
`;

const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
