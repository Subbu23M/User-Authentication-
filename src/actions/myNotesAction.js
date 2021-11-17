// creating action

import axios from 'axios';

// To create new record in DB
export const startCreateNewNote = function(task){
    return function(dispatch){
        const baseUrl = 'http://dct-user-auth.herokuapp.com/api/notes';

        // consuming code to interact with server
        axios
            .post(baseUrl,task,{
                headers:{
                    'x-auth':localStorage.getItem('JWT_Token')
                }
            })

            .then(function(response){
                const result = response.data;
                // console.log(result);
                
                // dispatch action
                dispatch(addNotes(result));
            })

            .catch(function(error){
                alert(error.message);
            })
    }
}

// Action creator / generator
export const addNotes = function(note){
    return {
        type:'ADD_NOTE',
        payload:note
    }
} 

// To List all notes
export const startListAllNotes = function(token){
    return function(dispatch){
        const baseUrl = 'http://dct-user-auth.herokuapp.com/api/notes';

        // Consuming Code
        axios
            .get(baseUrl,{
                headers:{
                    'x-auth':token
                }})

            .then(function(response){
                const result = response.data;
                // console.log(result);

                // dispatch action to store
                dispatch(setNotes(result));
            })

            .catch(function(error){
                alert(error.message);
            })
    }
} 

// Action Creator / Generator
export const setNotes = function(notes){
    return{
        type:'SET_NOTES',
        payload:notes
    }
} 

// To delete particular record
export const deleteASingleNote = function(_id){
    return function(dispatch){
        const baseUrlTwo = `http://dct-user-auth.herokuapp.com/api/notes/${_id}`;

        const confirm = window.confirm('are you sure to remove');

        if(confirm){

            // consuming code
            axios
                .delete(baseUrlTwo,{
                    headers:{
                        "x-auth":localStorage.getItem('JWT_Token')
                    }
                })

                .then(function(response){
                    const result = response.data;
                    // console.log(result);

                    // dispatch action
                    dispatch(removeItem(result._id));
                })

                .catch(function(error){
                    alert(error.message);
                })
        }

    }
}

// Action Generator / Creator
export const removeItem = function(_id){
    return {
        type:'REMOVE_ITEM',
        payload:_id
    }
}

// To Show Single note
export const showASingleNote = function(_id){
    return function(){
        const baseUrlOne = `http://dct-user-auth.herokuapp.com/api/notes/${_id}`;

        // consuming code
        axios
            .get(baseUrlOne,{
                headers:{
                    'x-auth':localStorage.getItem('JWT_Token')
                }
            })

            .then(function(response){
                const result = response.data;
                // console.log(result);

                if(Object.keys(result).includes('erros')){
                    alert(result.errors);
                }else{
                    alert(result.title,result.body);
                }
            })

            .catch(function(error){
                alert(error.message);
            })
    }
}