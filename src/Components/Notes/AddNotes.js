import React from 'react';

import { useDispatch } from 'react-redux';

import {startCreateNewNote} from '../actions/../../actions/myNotesAction';

import MyNotesForm from './Notes/../MyNotesForm';

function AddNotes(props) {

    const dispatch = useDispatch();

    // callback function
    const formSubmit = function(task){
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