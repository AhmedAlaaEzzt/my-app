const Card = ({name,company,img}) => {
  return (
    <div style={{ margin: "1em", display: "flex" }}>
      <img alt="user" src={img} width="75" height="75" />
      <div style={{marginLeft: 10 }}>
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          {name}
        </div>
        <div>{company}</div>
      </div>
    </div>
  );
};

export default Card;
