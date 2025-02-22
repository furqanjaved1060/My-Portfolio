import HeroImg from "../assets/images/image-profile-desktop.webp"
import "./HeroSection.css";
const HeroSection = () => {
    return (
      <>
      <section className="hero-section">
        <div className="hero-content">
            <h1>Nice to meet you! I'm <a href="">Adam Keyes</a>.</h1>
            <p>Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
            <a href="">Contact me</a>
        </div>
        <picture className="hero-picture">
            <img src={HeroImg} alt="" />
        </picture>
      </section>
      </>
    )
}
export default HeroSection;