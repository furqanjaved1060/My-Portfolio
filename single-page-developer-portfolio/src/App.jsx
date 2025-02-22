import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <div className="wrapper">
    <Header
    header={"header"}
    socialbox={"social-box"}/>
    <Main/>
    </div>
    <Footer/>
    </>
  )
}

export default App;