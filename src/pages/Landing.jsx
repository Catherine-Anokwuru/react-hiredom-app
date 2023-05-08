import main from "../assets/images/main.png";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/Landing";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              domestic <span>hire</span> app
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur quasi ipsum nesciunt obcaecati, est ad odit sunt natus voluptatibus fuga itaque culpa suscipit expedita.</p>
            <Link to="/register" className="btn btn-hero">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
