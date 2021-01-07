const getState = ({ getStore, getActions, setStore }) => {
	// Si aglo está en el flux (datos, array, ...) solo debe estar en el flux.
	// Por ejemplo, datos que van a ser usados en varias vistas.
	// Y solo methods que manejan esos datos. Ojo, doFetch si porque es llamado desde
	// varios sitios.
	return {
		store: {
			loggedUser: {
				id: null,
				name: null,
				email: null,
				id_role: null,
				is_active: null,
				alerts_activated: null,
				access_token: null
			},
			questions: [],
            searchText: "",
			clickedCardsCounter: 0,
			clickedCards: [],
			cards: [
				{ id: 0,  suit: 'profile',     flipped: 0 },
				{ id: 1,  suit: 'profile',     flipped: 0 },
				{ id: 2,  suit: 'experience',  flipped: 0 },
				{ id: 3,  suit: 'experience',  flipped: 0 },
				{ id: 4,  suit: 'education',   flipped: 0 },
				{ id: 5,  suit: 'education',   flipped: 0 },
				{ id: 6,  suit: 'skills',      flipped: 0 },
				{ id: 7,  suit: 'skills',      flipped: 0 },
				{ id: 8,  suit: 'languajes',   flipped: 0 },
				{ id: 9,  suit: 'languajes',   flipped: 0 },
				{ id: 10, suit: 'soft-skills', flipped: 0 },
				{ id: 11, suit: 'soft-skills', flipped: 0 }
			],
			limpiar: 0
        },
		actions: {
			setLimpiar(limpiar){
				setStore({ limpiar: limpiar });
			},
			getClickedCardsCounter(){
				const store = getStore();
				return store.clickedCardsCounter;
			},
            setClickedCardsCounter(clickedCardsCounter){
                setStore({ clickedCardsCounter: clickedCardsCounter });
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

			setQuestions(questions) {
				setStore({ questions: questions });
			},
			getQuestions() {
				const store = getStore();
				if (store.questions) {
					return store.questions;
				} else {
					return null;
				}
			},
			setSearchText(searchText) {
				setStore({ searchText: searchText });
			},
			getSearchText() {
				const store = getStore();
				if (store.searchText) {
					return store.searchText;
				} else {
					return null;
				}
			},
			getLoggedUserID() {
				let user = this.getLoggedUserData();
				if (user !== null && user.id) {
					return user.id;
				} else {
					return null;
				}
			},
			getLoggedUserRoleID() {
				let user = this.getLoggedUserData();
				if (user !== null && user.id_role) {
					return user.id_role;
				} else {
					return null;
				}
			},
			setLoggedUserData: (loggedUser, accessToken) => {
				let loggedUserParsed = {};
				loggedUserParsed = loggedUser;
				loggedUserParsed.access_token = accessToken;
				setStore({ loggedUser: loggedUserParsed });
				localStorage.setItem("loggedUser", JSON.stringify(loggedUserParsed));
			},
			getLoggedUserData: () => {
				const store = getStore();
				if (store.loggedUser.id !== null) {
					return store.loggedUser;
				}

				let userInLocalStorage = localStorage.getItem("loggedUser");
				let userInLocalStorageParsed = JSON.parse(userInLocalStorage);
				if (userInLocalStorageParsed !== null) {
					getActions().setLoggedUserData(userInLocalStorageParsed);
				}

				return userInLocalStorageParsed;
			},
			setLogoutUser: () => {
				let logoutUserParsed = {};
				logoutUserParsed.id = null;
				logoutUserParsed.name = null;
				logoutUserParsed.email = null;
				logoutUserParsed.id_role = null;
				logoutUserParsed.is_active = null;
				logoutUserParsed.alerts_activated = null;
				logoutUserParsed.access_token = null;
				setStore({ loggedUser: logoutUserParsed });
				localStorage.removeItem("loggedUser");
			}
		}
	};
};

export default getState;