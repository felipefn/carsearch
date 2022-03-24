import React from 'react';
import { useParams } from 'react-router-dom';
import { AccordionModels } from '../Components/ModelsPage/AccordionModels';
import { Header } from '../Components/shared/Header';
import { HeroContainer } from '../Components/shared/HeroContainer';

import { GlobalStyle } from "../styles/global";


const Models = () =>{

  const { id , title } = useParams()

  
  return (
    <div>
      <GlobalStyle/>   
      <Header/> 
      <HeroContainer/>
      <AccordionModels id={id} title={title}/>
      
    </div>
  );
}

export default Models;