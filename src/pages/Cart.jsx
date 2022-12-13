import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
`;

const TopButton = styled.button`
  padding: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  gap: 1rem;
`;

const Image = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ProductAmount = styled.div`
  font-size: 1.5rem;
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  height: 40vh;
`;

const SummaryTitle = styled.h1`
  /* font-weight: 200; */
`;

const SummaryItem = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;

  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: black;
  color: white;
  font-weight: 60;
  font-size: 1.5rem;
`;

const Cart = () => {
  return (
    <Container>
      <Banner />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/736x/31/b1/c2/31b1c2775652516389dce74a012c9dd8--mens-boots-fashion-mens-fall-fashion.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Jacket
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>EBGV93Y94GUB
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>SIZE: </b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/736x/31/b1/c2/31b1c2775652516389dce74a012c9dd8--mens-boots-fashion-mens-fall-fashion.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Jeans
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>EBGV93Y94GUB
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>SIZE: </b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>$ 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount:</SummaryItemText>
              <SummaryItemPrice>$ -10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>$ 95.99</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
