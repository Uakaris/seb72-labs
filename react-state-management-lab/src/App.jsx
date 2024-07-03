import { useState } from 'react';
import './App.css';

const ZombieFighter = (props) => {
  const { id, name, price, strength, agility, img, handleAddFighter } = props;

  return (
    <div>
      <ul>
        <li>
          <h3>{ name }</h3>
          <h4>Price: { price }</h4>
          <h4>Strength: { strength }</h4>
          <h4>Agility: { agility }</h4>
          <img src={ img }></img>
          <button onClick={() => handleAddFighter({ id, name, price, strength, agility })}>Add</button>
        </li>
      </ul>
    </div>
  )
}

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]    
  )

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);

      const handleStrength = team.reduce((accumulator, currFighter) => accumulator + currFighter.strength, 0) + fighter.strength;
      setTotalStrength(handleStrength);

      const handleAgility = team.reduce((accumulator, currFighter) => accumulator + currFighter.agility, 0) + fighter.agility;
      setTotalAgility(handleAgility);

    } else {
      console.log("Not enough money");
    }
  }

  const handleRemoveFighter = (fighterName) => {
    const updatedTeam = team.filter((fighter) => fighter.name !== fighterName);
    const removedFighter = team.find((fighter) => fighter.name === fighterName);

    setTeam(updatedTeam);
    setMoney(money + removedFighter.price);
    setTotalStrength(updatedTeam.reduce((accumulator, currFighter) => accumulator + currFighter.strength, 0));
    setTotalAgility(updatedTeam.reduce((accumulator, currFighter) => accumulator + currFighter.agility, 0));
  }

  return (
    <>
    <h1>Zombie Fighters</h1>
    
       <h2>Money: { money }</h2>
       <h2>Team Strength: { totalStrength }</h2>
       <h2>Team Agility: { totalAgility }</h2>

       <h2>Team</h2>
      { team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <section>
          <ul>
            {team.map((fighter, index) => (
              <li key={fighter.id}>
                <h3>{fighter.name}</h3>
                <img src={fighter.img} alt={fighter.name}></img>
                <h4>Price: {fighter.price}</h4>
                <h4>Strength: {fighter.strength}</h4>
                <h4>Agility: {fighter.agility}</h4>
                <button onClick={() => handleRemoveFighter(fighter.name)}>Remove</button>
              </li>
            ))}
          </ul>
        </section>
      )}
      
      <section>
      {zombieFighters.map((zombieFighter, index) => (
        <ZombieFighter
        key={zombieFighter.id}
        id={zombieFighter.id}
        {...zombieFighter}
        handleAddFighter={ handleAddFighter }
        />
      ))}
      </section>
    </>
  );
}

export default App
