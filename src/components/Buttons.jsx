import satData from "./satData";

const Buttons = ({ filterByType, setSat, orbitTypes }) => {

  
  return (
    <div>
      {orbitTypes.map((type, idex) => {
        return (
          <button onClick={() => filterByType(type)} key={idex}>
            {type} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;