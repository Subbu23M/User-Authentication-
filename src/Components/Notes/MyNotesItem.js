import React from 'react';

import {useDispatch} from 'react-redux';

import {showASingleNote,deleteASingleNote} from '../actions/../../actions/myNotesAction';

// ES6-Arrow function
const MyNotesItem = (props) => {

    const dispatch = useDispatch();

    // Object Destructuring - ES6
    const { _id, title, body} = props;

    // Event Handler as callback function to display.
    const handleShow = () => {
        // Dispatch an action to send id
        dispatch(showASingleNote(_id))
    }

    // Event Handler as callback function to delete.
    const handleRemove = () => {
        // Dispatch action to delete a note
        dispatch(deleteASingleNote(_id))
    }

    return (
        <>

            <article className='mt-3 border border-info p-3'>

                <a href="#" onClick={handleShow}>

                    <h2>
                        {title} 
                    </h2>

                    <p>
                        {body}
                    </p>

                </a>

                <div className="remove d-flex justify-content-end align-items-center">

                    <a href="#">
                        <i className="far fa-edit mr-5 text-success"></i>
                    </a>

                    <a href="#" onClick={handleRemove}>
                        <i className="far fa-trash-alt text-danger"></i>
                    </a>

                </div>
                            
            </article>
            
        </>
    )
}

export default MyNotesItem;
