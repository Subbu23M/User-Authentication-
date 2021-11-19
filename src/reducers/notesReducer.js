// creating reducer

const notesInitialState = {
    isLoading : true,
    data : []
}

const notesReducer = (state = notesInitialState,action) => {
    switch(action.type){
        case 'SET_NOTES':{
            return {...state,data:[...action.payload]}
        }

        case 'ADD_NOTE' :{
            return {...state, data : [...state.data, action.payload]}
        }

        case 'REMOVE_ITEM' : {
            const result = state.data.filter((note) => {
                if(note._id !== action.payload){
                    return true;
                }
            })
            return{
                ...state,data:[...result]
            }
        }

        default:{
            return {...state}
        }
    }
}

export default notesReducer;
