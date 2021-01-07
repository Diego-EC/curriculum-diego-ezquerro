import { useState, useRef, useContext, useEffect } from 'react';
import Card from '../components/card';
import soundSuccess from '../../sounds/success.wav';
import soundError from '../../sounds/error.wav';
import Resume from '../components/resume';
import { Context } from '../store/app-context';

const Home = () => {

    const [cards, setCards] = useState([]);

    const [firstClickedSuit, setFirstClickedSuit] = useState("");
    // TODO: el contador tendrá que ir al flux para que también lo usen las cards, 
    // no hay click si ya hay dos cartas giradas.
    const resumeRef = useRef();
    const cardRef = useRef();

    const { store, actions } = useContext(Context);

    const success = new Audio(soundSuccess);
    const error = new Audio(soundError);

    //let cardsMap;

    useEffect(() => {
        //setCards(actions.getCards())
        console.log("ERROR");
        //cardsMap = getCardsMap();
        setCards(actions.getCards());
        
    }, []);

    function getCardsMap() {
        //const cards = actions.getCards();
        //console.log(cards);
        const cardsMap = cards.map(function(card, index){
            console.log(index);
            return(
                <Card key={index}
                    id={index}
                    suit={card.suit}
                    flipped={0}
                    onClickBack={onClickBack}
                    ref={cardRef} 
                />
            )
        })
        console.log(cardsMap);
        return cardsMap;
    }
    

    const cardsMap = cards.map(function(card, index){
        return(
            <Card key={index}
                id={index}
                suit={card.suit}
                flipped={0}
                onClickBack={onClickBack}
                ref={cardRef} 
            />
        )
    })

    function onClickBack(clickedSuit) {
        console.log("Home " + actions.getClickedCardsCounter());
        if (actions.getClickedCardsCounter() === 2) {
            // comparar tipos
            if (firstClickedSuit == clickedSuit) {
                success.play();
                resumeRef.current.unlock(clickedSuit);
            } else {
                error.play();
                // volver a dar la vuelta
                cardRef.current.flipToBackSide();
            }
        } else {
            setFirstClickedSuit([clickedSuit]);
        }
    }

    return ( 
        <div className="home">
            <div className="row">
                <div className="col-6">
                    <Resume ref={resumeRef} />
                </div>
                <div className="col-6">
                    <div className="row d-flex justify-content-center">{ cardsMap }</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
/*eslint eqeqeq: "off"*/