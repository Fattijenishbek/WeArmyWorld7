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
  width: 25%;
  padding: 20px;
  background-color: #ffcce5;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Inpupt = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid #9999ff;
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

const Linkk = styled.a`
  margin: 5px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Inpupt placeholder="username" />
          <Inpupt placeholder="password" />
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button>LOGIN</Button>
          </Link>
          <Linkk>Do not you remember you password?</Linkk>
          <Linkk>Create a new Account</Linkk>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
