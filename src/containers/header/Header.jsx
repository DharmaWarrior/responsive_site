import React from 'react';
import TextSlider from "./TextSlider";
import './header.css'; 
import student from '../../assets/student.png';

const Header = () => {

  
  
  const slides = [
    { text: "I learned the real Importance of communication skill, and how to use that skill in a better way. I have learned that this life is just not meant to live for one self only but whenever we get a chance to beautify someone else's world we should move towards that.", head: "SALMAN ASHRAF" },
    { text: "It was lovely to hear from you during  this course Ankur, you really have the power to impress through story telling. would love to hear more from you about the art of story telling. My takeaway to  follow will be to learn story telling, using  every opportunity to communicate better.", head: "PARTHA DATTA" },
    { text: "I would definitely suggest taking the course. I have already told my friends about it and asked them to take it. It is a very well structured course and will teach you everything you need to learn to master the art of communication. And the best part is it's very low priced.", head: "KOMAL BHADANA" },
    { text: "It was a wonderful training session with Ankur Warikoo on effective communication. I have learnt more than what I was supposed to. It's really amazing to hear your life lessons and the decisions you made in your life.", head: "NILESH BHALCHIM"  },
    { text: "It wasn't only about the language, vocabulary, fluency or storytelling as people speak of it. Even though we've heard of how important it is to be a good story teller, the part in this course on story telling and communication was more about how to tell our story in alignment with knowing audience. Because it is going to decide which story, tone and the feel of it.", head: "ANKITA S"  },
    { text: "One should definitely enroll this course! It's worth it, trust me! I will highly recommend it for people who really want to learn and gain confidence on how to communicate effectively. Effective communication is a perfect and an awesome course you can enroll at a very cheap and affordable price!.", head: "MIHIR JHA"  }
  ];


  const containerStyles = {
    width: "574px",
    height: "493px",
    margin: "0rem 5rem",
    background: "rgb(255, 255, 255)"
  };

  return (
    <div className='header section__padding' id='Home'>
      <div className="header-content">
        <h1>
        From Our Students...
        </h1>  
        <img src={student} alt='/'></img>
      </div>
      <div style={containerStyles}>
        <TextSlider slides={slides} />
      </div>
    </div>
  )
}

export default Header
