import { useEffect, useState } from "react";
import { AccordionComponent } from "./Components/AccordionComponent";
import { Header } from "./Components/Header";
import { HeroContainer } from "./Components/HeroContainer";
import { GlobalStyle } from "./styles/global";

interface Brands {
  name:string,
  id: string,
}


const BaseUrl = "https://parallelum.com.br/fipe/api/v1"

async function searchItem(type:string) {
  const response = await fetch(`${BaseUrl}/${type}/marcas`)
  const marcas = await response.json()

  
  return marcas.map((marca:any) => {
  
    return {
      name: marca?.nome,
      id: marca?.codigo
    }
  })

}



export const App = () => {
  const [car, setCar] = useState<Array<Brands>>() 
  useEffect(function(){
    async function getCarBrand() {
      const item = await searchItem("carro")
      setCar (item)
      
    }
    getCarBrand()

  },[])

  const [motos, setMotos] = useState<Array<Brands>>() 
  useEffect(function(){
    async function getMotosBrand() {
      const item = await searchItem("motos")
      setMotos (item)
      
    }
    getMotosBrand()

  },[])

  const [trucks, setTrucks] = useState<Array<Brands>>() 
  useEffect(function(){
    async function getTtrucksBrand() {
      const item = await searchItem("caminhao")
      setTrucks (item)
      
    }
    getTtrucksBrand()

  },[])
  

  return (
    <div className="App">
      <Header/>
      <HeroContainer/>
      <AccordionComponent title="Carros" items={car} />
      <AccordionComponent title="Motos" items={motos}/>
      <AccordionComponent title="Caminhões" items={trucks}/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
