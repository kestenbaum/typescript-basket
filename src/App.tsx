import React from 'react';
import './style/index.css'
import Header from "./components/Header";
import ItemList from "./components/ItemList";

const App = () => {

    return (
        <div className='app'>
            <Header logo={'logo'}/>
            <ItemList/>
        </div>
    );
};

export default App;