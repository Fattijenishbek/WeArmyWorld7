import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to={`/`} style={{ textDecoration: "none", color: "#6666ff" }}>
          <Logo>WeArmyWorld7.</Logo>
        </Link>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
          reiciendis exercitationem a. Recusandae tenetur non odit consequatur
          dolores, odio quo culpa sapiente ipsam optio error ad voluptate quae
          perspiciatis!
        </Desc>
        <SocialContainer>
          <SocialIcon color="ff007f">
            <a href="https://www.instagram.com/wearmyworld7/" target="_blank">
              <Instagram />
            </a>
          </SocialIcon>
          <SocialIcon color="3399ff">
            <a href="https://mobile.twitter.com/bts_army_fk/" target="_blank">
              <Twitter />
            </a>
          </SocialIcon>
          <SocialIcon color="0066cc">
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Clothes</ListItem>
          <ListItem>Albums</ListItem>
          <ListItem>Merch</ListItem>
          <ListItem>Photobooks</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Bishkek, Kyrgyzstan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +996(777)88-66-74
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> wearmyworld7@gmail.com
        </ContactItem>
        <Payment src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
