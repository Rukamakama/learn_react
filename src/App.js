import React from 'react';
import Home from './Pages/Home';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch)



const App = () => {
    return (
        <div className='App'>
            <Home/>
        </div>
    );
};

export default App;

