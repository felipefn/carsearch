import React, { useEffect, useState } from 'react';
import { AccordionComponent } from '../Components/HomePage/AccordionComponent';
import { Header } from '../Components/shared/Header';
import { HeroContainer } from '../Components/shared/HeroContainer';


import { GlobalStyle } from "../styles/global";

interface Brands {
  name:string,
  id: string,
}


const BaseUrl = "https://parallelum.com.br/fipe/api/v1"

async function getBrandFromApi(type:string) {
  const response = await fetch(`${BaseUrl}/${type}/marcas`)
  const marcas = await response.json()

  
  return marcas.map((marca:any) => {
  
    return {
      name: marca?.nome,
      id: marca?.codigo
    }
  })

}


const Home = () =>{

  const [cars , setCars] = useState<Array<Brands>>() 
  useEffect(function(){
    async function getCarBrand() {
      const item = await getBrandFromApi("carros")
      setCars (item)
      
    }
    getCarBrand()

  },[])

  const [motorcycles, setMotorcycles] = useState<Array<Brands>>() 
  useEffect(function(){
    async function getMotorcycleBrand() {
      const item = await getBrandFromApi("motos")
      setMotorcycles (item)
      
    }
    getMotorcycleBrand()

  },[])

  const [trucks, setTrucks] = useState<Array<Brands>>() 
  useEffect(function(){
    async function getTrucksBrand() {
      const item = await getBrandFromApi("caminhoes")
      setTrucks (item)
      
    }
    getTrucksBrand()

  },[])

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <HeroContainer/>
      <AccordionComponent title="Carros" items={cars} />
      <AccordionComponent title="Motos" items={motorcycles}/>
      <AccordionComponent title="Caminhões" items={trucks}/>
      
    </div>
  );
}

export default Home;