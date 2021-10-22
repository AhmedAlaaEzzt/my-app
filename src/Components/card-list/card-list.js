import Card from '../card/card';

const CardList = ({cards})=>{
    return(
        <div>
            {cards.map(card=> <Card name={card.name} company={card.compnay} img={card.avatar_url}/>)}
        </div>
    )
}

export default CardList;