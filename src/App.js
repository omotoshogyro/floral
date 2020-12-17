import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import VideoSection from "./components/VideoSection";
import SectionThree from "./components/SectionThree";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />

      {/* Section one */}

      <SectionOne />
      <SectionTwo />
      <VideoSection />

      <SectionThree />
      {/*  Five */}

      {/* End of Sections */}

      <Testimonial />
      <Blog />
      <Subscribe />

      <Footer />
    </div>
  );
}

export default App;
