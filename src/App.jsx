import { useState } from 'react';
import './App.css';

import { GiMeat, GiSodaCan, GiWaterBottle } from 'react-icons/gi';

function App() {
  const [adults, setAdults] = useState("");
  const [childrens, setChildrens] = useState("");
  const [hours, setHours] = useState("");

  
  //Meat per person, adults consume 0.400g in up to 6 hours, children consume half of that. After 6 hours the meat measurements rise to 0.650g.

  //Beer per person, adults consume 1200ml in up to 6 hours, children do not consume alcoholic beverages. After 6 hours the drink measures rise to 2000ml.
  //Beer can used in calculations equals 355ml

  //Drink per person, adults consume 1000ml in up to 6 hours, children consume half of that amount. After 6 hours the drink measures rise to 1500ml. Remembering that they are non-alcoholic drinks, water, juice, soda, etc.
  //This value is being divided by 2000 which is equivalent to a 2L bottle

  if (hours <= 5) {

    var meatPerPerson = (adults * 0.400) + ((childrens * 0.400) * 0.5);

    var beerPerPerson = (adults * 1200)/355;

    var drinkPerPerson = ((adults * 1000) + ((childrens * 1000)*0.5))/2000;
  } else {
    meatPerPerson = (adults * 0.650) + ((childrens * 0.650) * 0.5);

    beerPerPerson = (adults * 2000)/355;

    drinkPerPerson = ((adults * 1500) + ((childrens * 1500)*0.5))/2000;
  }
  
  function result() {
    if (adults === "" ||
        childrens === "" ||
        hours === "") {
        alert("Preencha todos os campos!");
        return
    } else {
      var result = document.getElementById("result");
      result.style.display = "block";
    }
  }

  return (
    <>
      <main>

        <div className='content-left'>
          <h1>Saiba quanta comida e bebida irá precisar!</h1>

          <img src="" alt="" />
        </div>

        <div className='content-right'>
          <h1>Churrascômetro</h1>

          <p>Quantidade de Adultos</p>
          <input
            type="number"
            id='adults'
            name='adults' placeholder='Adultos'
            value={adults}
            onChange={(event) => setAdults(event.target.value)} />

          <p>Quantidade de Crianças</p>
          <input
            type="number"
            id='childrens'
            name='childrens' placeholder='Crianças'
            value={childrens}
            onChange={(event) => setChildrens(event.target.value)} />

          <p>Duração do Churrasco (h)</p>
          <input
            type="number"
            id='hours'
            name='hours' placeholder='Duração (h)'
            value={hours}
            onChange={(event) => setHours(event.target.value)} />

          <button 
            id="calculate" 
            onClick={result}>Calcular</button>

          <div id='result'>

            <hr />
            <h2>Você vai precisar de: </h2>
            <p>
              <GiMeat className='icon' />
              <span id='meat'>
                {meatPerPerson.toFixed(2).toString().replace(".",",")}
              </span>
              KG de Carne
            </p>

            <p>
              <GiSodaCan className='icon' />
              <span id='beer'>
                {Math.ceil(beerPerPerson)}
              </span>
              Latas de Cerveja*
            </p>

            <p>
              <GiWaterBottle className='icon' />
              <span id='drink'>
                {Math.ceil(drinkPerPerson)}
              </span>
              Garrafas de bebidas**
            </p>

            <small>
              *Latinhas de 355ml
              **Bebidas não alcoólicas (2L)
            </small>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
