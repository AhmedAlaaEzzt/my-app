import Card from "../card/card";

const CardList = ({ robots }) => {
  return (
    <div>
        {robots.map(robot => <Card key={robot.id} {...robot} />)}
      
    </div>
  );
};

export default CardList;
