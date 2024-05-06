import { createContext, useState } from 'react';

function getFavouritesFromLocalStorage() {
    const favourites = localStorage.getItem('favourites');
    return favourites ? JSON.parse(favourites) : [];
}


const initialState = {
    favourites: getFavouritesFromLocalStorage(),
};

const AppContext = createContext(initialState);

function AppProvider({ children }) {
    const [favourites, setFavourites] = useState(initialState.favourites);

    const addFavourite = (movie) => {
        setFavourites([...favourites, movie]);
        localStorage.setItem('favourites', JSON.stringify([...favourites, movie]));
    };

    const removeFavourite = (movie) => {
        const itemToRemove = favourites.find((favourite) => favourite.id === movie.id);
        if (!itemToRemove) return;
        localStorage.setItem('favourites', JSON.stringify(favourites.filter((favourite) => favourite.id !== movie.id)));
        setFavourites(favourites.filter((favourite) => favourite.id !== movie.id));

    };

    return (
        <AppContext.Provider
            value={{ favourites, addFavourite, removeFavourite }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext };

export default AppProvider;
