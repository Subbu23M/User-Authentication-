import React from 'react';

import HeaderTags from '../../HTML-Elements/HeaderTags';

import MyNotesContainer from '../Notes/MyNotesContainer';

// ES6-Arrow function
const MyNotes = () => {
    return (
        <>

            <HeaderTags
                Tag='h5'
                className='text-capitalize text-center'
                text='my notes'
            />

            {/* Child Component Instance */}
            <MyNotesContainer/>
            
        </>
    )
}

export default MyNotes;
