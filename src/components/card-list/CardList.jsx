import Card from "../card/Card";
import "./CardList.style.css";


const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
