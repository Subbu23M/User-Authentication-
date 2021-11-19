import React,{useEffect} from 'react';

import MyNotesDisplay from './MyNotesDisplay';

import AddNotes from './AddNotes';

import {useDispatch} from 'react-redux';

import {startListAllNotes} from '../actions/../../actions/myNotesAction';

// ES6-Arrow function
const MyNotesContainer = () => {

    const dispatch = useDispatch();

    // To collect JWT_TOKEN from localStorage
    const useFunc = () => {
        const getToken = localStorage.getItem('JWT_TOKEN');

        // Dispatch action to send token
        dispatch(startListAllNotes(getToken));
    }

    // Invoke useEffect Hook
    useEffect(useFunc,[]);
    
    return (

        <div className='container'>

            {/* row */}
            <div className="row">

                {/* col-1 */}
                <div className="col-lg-6">

                    {/* Child component Instance */}
                    <MyNotesDisplay/>
                    
                </div>
                {/* end of col-1 */}

                {/* col-2 */}
                <div className="col-lg-6">

                    {/* Child component Instance */}
                    <AddNotes/>

                </div>
                {/* end of col-2 */}

            </div>
            {/* end of row */}

        </div>
    )
}

export default MyNotesContainer;
