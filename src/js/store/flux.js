const getState = ({ getStore, getActions, setStore }) => {
	// Si aglo está en el flux (datos, array, ...) solo debe estar en el flux.
	// Por ejemplo, datos que van a ser usados en varias vistas.
	// Y solo methods que manejan esos datos. Ojo, doFetch si porque es llamado desde
	// varios sitios.
	return {
		store: {
			clickedCards: [],
			cards: [
				{ id: 0,  suit: 'profile'     },
				{ id: 1,  suit: 'profile'     },
				{ id: 2,  suit: 'experience'  },
				{ id: 3,  suit: 'experience'  },
				{ id: 4,  suit: 'education'   },
				{ id: 5,  suit: 'education'   },
				{ id: 6,  suit: 'skills'      },
				{ id: 7,  suit: 'skills'      },
				{ id: 8,  suit: 'languajes'   },
				{ id: 9,  suit: 'languajes'   },
				{ id: 10, suit: 'soft-skills' },
				{ id: 11, suit: 'soft-skills' }
			],
			resetUnpairedFlippedCards: false
        },
		actions: {
			getClickedCardsCounter(){
				const store = getStore();
				return store.clickedCards.length;
			},
            getClickedCards(){
                const store = getStore();
                return store.clickedCards;
			},
			cleanClickedCards(){
				setStore({ clickedCards: [] });
			},
			addClickedCard(card){
				const store = getStore();
				store.clickedCards.push(card);
			},
			getCards(){
                const store = getStore();
                return store.cards;
			},
			setResetUnpairedFlippedCards(resetUnpairedFlippedCards){
				setStore({ resetUnpairedFlippedCards: resetUnpairedFlippedCards });
			},
			getResetUnpairedFlippedCards(){
                const store = getStore();
                return store.resetUnpairedFlippedCards;
			}
		}
	};
};

export default getState;