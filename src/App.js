import React from 'react';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CreatePost from "./Pages/CreatePost";

library.add(fab, faSearch)


const App = () => {
    return (
        <div className='App'>
            {/*<Home/>*/}
            <CreatePost/>
        </div>
    );
};

export default App;

