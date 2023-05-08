import logo from "../assets/images/logo.svg";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="hiredom logo" className="logo" />
    </Wrapper>
  );
};
export default Logo;

const Wrapper = styled.div`
  img {
    height: 7rem;
  }
`;
