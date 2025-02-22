import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Header.css";


const Header = (props) => {
    return (
      <>
      <header className={props.header}>
        <a href="">adamkeyes</a>
        <div className={props.socialbox}>
            <a href="">
                <FaGithub className="icons"/>
            </a>
            <a href="">
                <SiFrontendmentor className="icons"/>
            </a>
            <a href="">
                <FaLinkedin className="icons"/>
            </a>
            <a href="">
                <FaTwitter className="icons"/>
            </a>
        </div>
      </header>
      </>
    )
}
  
export default Header;