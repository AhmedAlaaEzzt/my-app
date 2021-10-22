const Card = ({name,company,avatar_url}) => {
  return (
    <div style={{ margin: "1em", display: "flex" }}>
      <img alt="user" src={avatar_url} width="75" height="75" />
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
