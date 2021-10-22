import Card from '../card/card';

const CardList = ({cards})=>{
    return(
        <div>
            {cards.map(card=> <Card {...card}/>)}
        </div>
    )
}

export default CardList;