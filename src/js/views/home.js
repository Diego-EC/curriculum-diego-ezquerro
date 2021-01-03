import { useState } from 'react';
import PlayingCard from '../components/playing-card';
import Card from '../components/card';

const Home = () => {

    const [cards, setCards] = useState([
        {pair: 'formacion'},
        {pair: 'formacion'},
        {pair: 'experiencia'},
        {pair: 'experiencia'},
        {pair: 'skills'},
        {pair: 'skills'},
        {pair: 'soft-skills'},
        {pair: 'soft-skills'},
        {pair: 'idiomas'},
        {pair: 'idiomas'},
        {pair: 'presentación'},
        {pair: 'presentación'}
    ]);
    
    const cardsMap = cards.map(function(card, index){
        return(
            <Card key={index}
                pair={card.pair}
            />
        )
    })

    return ( 
        <div className="home">
            <div className="row mx-1 d-flex justify-content-center">{ cardsMap }</div>
        </div>
    );
}
 
export default Home;