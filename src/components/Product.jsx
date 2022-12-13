import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
  min-width: 15rem;
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  cursor: pointer;

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const Circle = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
  /* display: flex; */
`;

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  /* cursor: pointer; */

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
