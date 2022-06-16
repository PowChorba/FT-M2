import React from 'react';
import Card from './Card'
import estilo from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={estilo.contenedor}>
  {
    props.cities.map(c => 
      <Card 
      key={c.id}
      name={c.name} 
      min = {c.main.temp_min} 
      max = {c.main.temp_max}  
      img= {c.weather[0].icon} 
      onClose={() => alert(c.name)}/>)
  }



</div>
};