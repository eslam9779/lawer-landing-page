import Slider1 from '../../Assets/Slider 1.png'
import Slider2 from '../../Assets/Slider 2.png'
import Slider3 from '../../Assets/Slider 3.png'
import Slider4 from '../../Assets/Slide 4.png'
import './slider.css'

const Slider = () => {

  return (
    <div className="slider">
     
          <img src={Slider1} alt="Image 1" />
          <img src={Slider2} alt="Image 2" />
          <img src={Slider3} alt="Image 3" />
          {/* <img src={Slider4} alt="Image 4" /> */}
      </div>
  );
}

export default Slider
