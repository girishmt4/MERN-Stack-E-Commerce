import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  text-align: center;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 1rem 0rem;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcon = styled.div`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const ContactItem = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MeShop</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim
          suscipit odit earum autem facere recusandae repudiandae excepturi unde
          eius cumque maiores illum, consectetur distinctio commodi natus
          ratione quam fuga vitae officia a.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Wishlist</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 2022 Mongo Lane, South Node, React
        </ContactItem>
        <ContactItem>
          <Phone /> +1 234 567 8900
        </ContactItem>
        <ContactItem>
          <MailOutline /> contactus@meshop.com
        </ContactItem>
        <Payment src="https://paymentsplugin.com/assets/blog-images/stripe-badge-transparent.png" />
      </Right>
    </Container>
  );
};

export default Footer;
