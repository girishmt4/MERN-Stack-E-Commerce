import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 4rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Left = styled.div`
  flex: 1;
  /* display: flex;
  align-items: center; */
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const Input = styled.input`
  border: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Logo>MeShop</Logo>
          </Left>
          <Center>
            <SearchContainer>
              <Input />
              <SearchIcon style={{ color: "gray", fontSize: "1rem" }} />
            </SearchContainer>
          </Center>
          <Right>
            <Language>EN</Language>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
