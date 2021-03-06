import React from 'react';

import MyNotesItem from '../Notes/MyNotesItem';

import {useSelector} from 'react-redux';

// ES6-Arrow function
const MyNotesDisplay = () => {

    // To read state within the component
    const notesData = useSelector((state) => {
        return state.notes;
    })
    
    return (
        <>

            <h3 className='text-capitalize text-info'>
                my notes - <span className='text-dark'> {notesData.length} </span>
            </h3>

            {/* Conditional Rendering - Ternary Operator */}
            {
                (notesData.data.length === 0) ? 
                                            <p className='text-capitalize text-warning lead'> no notes found add your first note </p> 
                                        : 

                                        <>
                                            {
                                                notesData.data.map((ele) => {
                                                    return(
                                                        <MyNotesItem
                                                            key={ele._id}
                                                            {...ele}
                                                        />
                                                    )
                                                })
                                            }
                                        </>
            }
            
        </>
    )
}

export default MyNotesDisplay;
