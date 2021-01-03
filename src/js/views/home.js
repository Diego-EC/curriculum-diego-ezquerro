import { useState } from 'react';
import Card from '../components/card';

const Home = () => {

    const [cards, setCards] = useState([
        {pair: 'Diego Ezquerro Calvo'},
        {pair: 'formacion'},
        {pair: 'experiencia'},
        {pair: 'experiencia'}
    ]);
    const [name, setName] = useState('Pepe');
    
    const cardsMap = cards.map(function(card, index){
        return(
            <Card key={index}
                pair={card.pair}
            />
        )
    })

    return ( 
        <div className="home">
            <div>{ cardsMap }</div>
        </div>
    );
}
 
export default Home;