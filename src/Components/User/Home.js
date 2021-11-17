import React from 'react';

import HeaderTags from '../../HTML-Elements/HeaderTags';

function Home(props) {
    return (
        <>

            <HeaderTags
                Tag='h3'
                className = 'text-success text-center text-capitalize'
                text='home page'
            />
            
        </>
    )
}

export default Home;