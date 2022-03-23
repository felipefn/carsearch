import React from 'react';
import { AccordionModels } from '../Components/ModelsPage/AccordionModels';
import { Header } from '../Components/shared/Header';
import { HeroContainer } from '../Components/shared/HeroContainer';

import { GlobalStyle } from "../styles/global";


const Models = () =>{
  return (
    <div>
      <GlobalStyle/>   
      <Header/> 
      <HeroContainer/>
      <AccordionModels/>
      
    </div>
  );
}

export default Models;