import React, { useEffect, useState }  from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


import { Container, Content } from "./styles";
import { ConnectingAirportsOutlined } from '@mui/icons-material';

interface Models {
 model: string,
  
}


const BaseUrl = "https://parallelum.com.br/fipe/api/v1"

async function getmodelsApi() {
  const response = await fetch(`${BaseUrl}/carros/marcas/59/modelos`)
  const modelos = await response.json()

  console.log(modelos)
  console.log(modelos?.modelos[0].nome)
  console.log(modelos?.anos[0])
  return modelos.map((models:any) => {
    
    
  })

}
getmodelsApi()
export function AccordionModels(props:any) {


  return (
    <Container>
      <Content>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{props.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            
          
              {props.items && props.items.map((item:any) => (
                
                <ul key={item.id}>
                  
                  <li>{item.name}</li>
                  
                </ul> 
                
              ))}
            
              
            
          </AccordionDetails>
        </Accordion>
        
      </Content>  
    </Container>
  )
}