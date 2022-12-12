import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const Banner = () => {
  return (
    <Container>Free Shipping on Orders above $49 in USA & Canada</Container>
  );
};

export default Banner;
