import "./ProjectsSection.css"
import Portfolio from "../assets/images/thumbnail-project-1-large.webp"
import Elearning from "../assets/images/thumbnail-project-2-large.webp"
import ToDo from "../assets/images/thumbnail-project-3-large.webp"
import Entertainment from "../assets/images/thumbnail-project-4-large.webp"
import Memory from "../assets/images/thumbnail-project-5-large.webp"
import Gallery from "../assets/images/thumbnail-project-6-large.webp"
const ProjectsSection = () => {

  const linksElem1 = document.createElement("a");
  linksElem1.textContent = "View Project";
  linksElem1.style.textAlign = "center";
  linksElem1.style.width = "fit-content";

  const linksElem2 = document.createElement("a");
  linksElem2.textContent = "View Code";
  linksElem2.style.textAlign = "center";
  linksElem2.style.width = "fit-content";

  const links = document.createElement("div");
  links.style.position = "absolute";
  links.style.left = "40%";
  links.style.top = "40%";
  links.style.display = "flex";
  links.style.flexDirection = "column";
  links.style.alignItems = "center";
  links.style.gap = "2rem";
  links.appendChild(linksElem1);
  links.appendChild(linksElem2);

  const showLinks = (e) => {
    const figure = e.target.parentElement;
    figure.style.position = "relative";
    figure.children[0].style.opacity = ".4";
    figure.appendChild(links);
  }

  const hidelinks = (e) => {
    const figure = e.target.parentElement;
    figure.style.position = "static";
    figure.children[0].style.opacity = "1";
    links.remove();
  }

    return (
      <>
      <section className="projects-section">
        <div className="projects-heading">
          <h2>Projects</h2>
          <a href="">Contact me</a>
        </div>
        <div className="projects-container">
          <div className="item1-projects-container items-all-projects-container">
            <figure onMouseEnter={(e) => showLinks(e)} onMouseLeave={(e) => hidelinks(e)}>
              <img src={Portfolio} alt="" />
            </figure>
            <h3>Design Portfolio</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="item2-projects-container items-all-projects-container">
            <figure onMouseEnter={(e) =>showLinks(e)} onMouseLeave={(e) =>hidelinks(e)}>
              <img src={Elearning} alt="" />
            </figure>
            <h3>E-learning landing page</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="item3-projects-container items-all-projects-container">
            <figure onMouseEnter={(e) =>showLinks(e)} onMouseLeave={(e) =>hidelinks(e)}>
              <img src={ToDo} alt="" />
            </figure>
            <h3>ToDo web app</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="item4-projects-container items-all-projects-container">
            <figure onMouseEnter={(e) =>showLinks(e)} onMouseLeave={(e) =>hidelinks(e)}>
              <img src={Entertainment} alt="" />
            </figure>
            <h3>Entertainment web app</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="item5-projects-container items-all-projects-container">
            <figure onMouseEnter={(e) => showLinks(e)} onMouseLeave={(e) =>hidelinks(e)}>
              <img src={Memory} alt="" />
            </figure>
            <h3>Memory game</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="item6-projects-container items-all-projects-container">
            <figure onMouseEnter={(e) =>showLinks(e)} onMouseLeave={(e) =>hidelinks(e)}>
              <img src={Gallery} alt="" />
            </figure>
            <h3>Art gallery showcase</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </section>
      </>
    )
}
export default ProjectsSection;