import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: 'Directions',
    text: 'Chatgpt3 can even provide directions.'
  },
  {
    title: 'Assistance',
    text: 'Assists with anything  from resume writing, to reccomendation letters.'
  },
  {
    title: 'General Topics',
    text: 'Math, Science, Tech? We can help ask a question and we will answer it.'
  },
  {
    title: 'Tech Development',
    text: 'First look at advancement of artifical intelligence. Inform yourself.'
  },
]

const Features = () =>{
  return(
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Reqeust Early Access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
};
  
  export default Features;