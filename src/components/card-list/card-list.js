import Card from "../card/card";

const CardList = ({ robots }) => {
  if(true) throw new Error("Nooooooooooooo!");
  return (
    <div>
        {robots.map(robot => <Card key={robot.id} {...robot} />)}
      
    </div>
  );
};

export default CardList;
