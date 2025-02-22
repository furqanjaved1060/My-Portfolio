
import "./Footer.css"
import Header from "./Header"
const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-container">
        <div className="left-div">
          <h2>Contact</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <form className="footer-form">
          <input type="text" placeholder="NAME"  required/>
          <input type="email" placeholder="EMAIL"  required/>
          <textarea name="" id="" placeholder="MESSAGE" required rows={3}></textarea>
          <button><a href="">send message</a></button>
        </form>
      </div>
      <div className="header-component-container">
        <Header
        header={"not-abs-header"}
        socialbox={"social-box-no-margin-right"}/>
      </div>
    </footer>
    </>
  )
}
export default Footer;