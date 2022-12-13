import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
  gap: 5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 3rem;
`;

const Desc = styled.p``;

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FilterTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 0.25rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 1rem;
`;

const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f8f4f4;
    transition: all 0.5s ease-in-out;
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Banner />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/736x/31/b1/c2/31b1c2775652516389dce74a012c9dd8--mens-boots-fashion-mens-fall-fashion.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            sit totam sapiente enim asperiores esse odio natus maiores eos
            explicabo pariatur nobis unde magnam perferendis laboriosam, fuga
            quas adipisci minus!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colors</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
