import React from 'react';

import spinner from './assets/Spinner.gif';

function Loader(props) {

    return (
        <>

            <img 
                src={spinner} 
                alt="spinner" 
            />

        </>
    )
}

export default Loader;