import { useState, useRef, useContext, useEffect } from 'react';
import Card from '../components/card';
import soundSuccess from '../../sounds/success.wav';
import soundError from '../../sounds/error.wav';
import Resume from '../components/resume';
import { Context } from '../store/app-context';

const Home = () => {
    const [cards, setCards] = useState([]);
    const resumeRef = useRef();
    const { store, actions } = useContext(Context);
    const success = new Audio(soundSuccess);
    const error = new Audio(soundError);

    useEffect(() => {
        setCards(actions.getCards());
    }, []);

    const cardsMap = cards.map(function(card, index){
        return(
            <Card key={index}
                id={index}
                suit={card.suit}
                flipped={0}
                onClickBack={onClickBack}
            />
        )
    })

    function onClickBack(successfulPairing, suit) {
        if (successfulPairing == true) {
            success.play();
            resumeRef.current.unlock(suit);
        } else {
            error.play();
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
/*eslint no-unused-vars: "off"*/
/*eslint react-hooks/exhaustive-deps: "off"*/