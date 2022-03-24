import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


import { Container, Content } from "./styles";
import { useParams } from 'react-router-dom';



interface Models {
  name: string,
  id: string

}



const BaseUrl = "https://parallelum.com.br/fipe/api/v1"



async function getModelsApi(props:any) {
  
  const response = await fetch(`${BaseUrl}/${props.title}/marcas/${props.id}/modelos`)
  const { modelos } = await response.json()

  

  return modelos.map((models: any) => {
    return {
      name: models.nome,
      id: models.codigo

    }

  })

}


// .then (x => console.log(x.reverse()))

export function AccordionModels(id: any) {

  const [models, setModels] = useState<Array<Models>>()
  useEffect(function () {
    async function getModels() {
      const item = await getModelsApi(id)
      setModels(item.reverse())

    }
    getModels()
    
  }, [])


  console.log(models?.reverse())
  
  return (
    <Container>
      <Content>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Modelos</Typography>
          </AccordionSummary>
          <AccordionDetails>

            
            {models && models.map((item: any) => (

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