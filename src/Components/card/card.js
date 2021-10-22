const Card = (props) => {
  return (
    <div style={{ margin: "1em", display: "flex" }}>
      <img alt="user" src="http://placehold.it/75" />
      <div style={{marginLeft: 10 }}>
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          Name here...
        </div>
        <div>Company Name here ...</div>
      </div>
    </div>
  );
};

export default Card;
