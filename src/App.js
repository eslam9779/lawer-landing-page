import './App.css';
import ContactUs from './components/contact_us/ContactUs';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Logos from './components/logos_bar/Logos';
import MiddleSection from './components/middle_section/MiddleSection';
import Slider from './components/slider/Slider';
import Testimonial from './components/testimonial/Testimonial';


function App() {
  return (
    < >
     <Home/>
     <Slider/>
     <MiddleSection/>
     <Testimonial/>
     <Logos/>
     <ContactUs/>
     <Footer/>
    </>
  );
}

export default App;
