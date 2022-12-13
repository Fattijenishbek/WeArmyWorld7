import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://www.teahub.io/photos/full/171-1715343_young-forever-desktop-wallpaper-1920x1080-bts-background-laptop.png")
    center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #ffcce5;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Inpupt = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 10px 0px 0px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #9999ff;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 10px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 10px;
  background-color: #9999ff;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Inpupt placeholder="first name" />
          <Inpupt placeholder="last name" />
          <Inpupt placeholder="username" />
          <Inpupt placeholder="email" />
          <Inpupt placeholder="password" />
          <Inpupt placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>
            <Link
              to={`/login`}
              style={{ textDecoration: "none", color: "white" }}
            >
              CREATE
            </Link>
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
