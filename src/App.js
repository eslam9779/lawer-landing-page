import './App.css';
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
     {/* <Testimonial/> */}
     <Logos/>
    </>
  );
}

export default App;
