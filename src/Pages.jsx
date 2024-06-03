// Home.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const All = () => {
  return (
    <div >
  <img className="prabu" src='https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Mastering-Internal-CSS-in-HTML.webp'/> 
 <img className="prabu" src='https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Best-Business-Analytical-Tools-for-Digital-Marketing.webp'/>
 <img className="prabu" src='https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Voice-Search-and-its-Impact-on-SEO.webp'/>
  </div>
  )
};



const Fullstackdevelopment = () => {
  return <img src='https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Mastering-Internal-CSS-in-HTML.webp'/>
};


const DataScience = () => {
  return <img src='https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Best-Business-Analytical-Tools-for-Digital-Marketing.webp'/>
};

const Cybersecurity=()=>{
  return <img src='https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Voice-Search-and-its-Impact-on-SEO.webp'/>
};



export  {All, Fullstackdevelopment,DataScience, Cybersecurity};
