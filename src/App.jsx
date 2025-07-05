import "./assets/css/bootstrap.css"
import "./assets/css/styles.css";
import './App.css'
import Header from "./components/Header/Header";
import Alert from "./components/Alert/Alert";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import YoutubeAPI from "./component/YoutubeVideos";
import YoutubeVideos from "./component/YoutubeVideos.module.css"
 import Footer from "./components/Footer/Footer.jsx";
  // import "./assets/css/bootstrap.js";



function App() {


  return (
    <>
      <Header />
      <Alert />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <YoutubeAPI />
      <Footer />
      
    </>
  );
}

export default App
