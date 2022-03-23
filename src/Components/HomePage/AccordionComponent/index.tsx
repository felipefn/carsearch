import React, { useEffect, useState }  from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom';

import { Container, Content } from "./styles";

interface PropsInterface {
  title: string
}

export function AccordionComponent(props:any) {


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
                  
                  <Link to="/models"> {item.name} </Link>
                  
                </ul> 
              ))}
            
              
            
          </AccordionDetails>
        </Accordion>
        
      </Content>  
    </Container>
  )
}