import React from 'react';

import { useDispatch } from 'react-redux';

import {startCreateNewNote} from '../actions/../../actions/myNotesAction';

import MyNotesForm from './Notes/../MyNotesForm';

// ES6-Arrow function
const AddNotes = (props) => {

    const dispatch = useDispatch();

    // callback function
    const formSubmit = (task) => {
        // Dispatch action
        dispatch(startCreateNewNote(task))
    }

    return (
        <>

            {/* Child component Instance */}
            <MyNotesForm
                formSubmitFunc = {formSubmit}
            />
            
        </>
    )
}

export default AddNotes;
