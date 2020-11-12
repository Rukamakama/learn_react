import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Routes from "./Routes";

library.add(fab, faSearch)


const App = () => {
    return (
        <div>
            <Routes />
        </div>
    );
};

export default App;

