import { useState } from "react";


const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  marginLeft: "40%",
  position: "absolute",
  bottom: "0px"
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "30px",
  color: "rgb(214, 13, 97)",
  // position: "absolute",
  // bottom: "0"
  
};

const textstyle = {
  

  fontSize: "1.75rem",
  
};

const boxstyle = {
  
  paddingTop : "40px",
  paddingLeft: "40px",
  paddingRight: "40px",
  paddingBottom: "20px",
  
};

const namestyle = {
  

  fontSize: "1.2rem",
  

};
const namebox = {
  
  paddingLeft: "40px",
  paddingRight: "40px",
  paddingBottom: "120px",

};

const TextSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  

  return (
    
    <div style={sliderStyles}>
      <div style={boxstyle}>
      <p style = {textstyle}>{slides[currentIndex].text}
      </p>
      </div>
      <div style={namebox}>
      <p style={namestyle}><b>{slides[currentIndex].head}</b></p>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div>
          
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;