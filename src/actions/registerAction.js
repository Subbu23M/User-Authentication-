// creating action

import axios from 'axios';

// Action for new register
export const startRegisterAction = (registerData,redirect, resetForm) => {
    return(
        () => {
            const baseUrl = 'http://dct-user-auth.herokuapp.com/users/register';

            // consuming code
            axios
                .post(baseUrl,registerData)

                .then((response) => {
                    const result = response.data;
                    // console.log(result);

                    if(result.hasOwnProperty('errors')){
                        alert(result.errors);
                    }else{
                        alert('user is registered successfully');

                        // redirect to login page,after successfully registered by invoking functions
                        redirect();
                        resetForm();
                    }    
                })

                .catch((error) => {
                    alert(error.message);
                })
        }
    )
}

// Action for login
export const userLogin = (loginData,redirect, resetForm) => {
    return(
        (dispatch) => {
            const baseUrlTwo = 'http://dct-user-auth.herokuapp.com/users/login';

            // consuming code
            axios
                .post(baseUrlTwo,loginData)

                .then((response) => {
                    const result = response.data;
                    // console.log(result);

                    if(result.hasOwnProperty('errors')){
                        alert(result.errors);
                    }else{
                        alert('user is logged in successfully');

                        // Store JWT in memory
                        localStorage.setItem('JWT_Token',result.token);
                        
                        // Dispatch action to collect user token
                        dispatch(getuserDetails(result.token));

                        // invoke functions
                        redirect();
                        resetForm();
                    }
                })

                .catch((error) => {
                    alert(error.message);
                })
        }
    )
}

// Action to get user personal details
export const getuserDetails = () => {
    return(
        (dispatch) => {
            const baseUrl = 'http://dct-user-auth.herokuapp.com/users/account';

            // consuming code
            axios
                .get(baseUrl,{
                    headers:{
                        'x-auth':localStorage.getItem('JWT_Token')
                    }
                })

                .then((response) => {
                    const result = response.data;

                    // dispatch action to state
                    dispatch(setUserInfo(result));
                    dispatch(stopLoading());
                })

                .catch((error) => {
                    alert(error.message)
                })
        }
    )
}

// action creator / generator
export const setUserInfo = (user) => {
    return{
        type:'SET_USER_INFO',
        payload:user
    }
}

// action generator to stop loading
export const stopLoading = () => {
    return({
        type:'STOP_LOADING'
    })
}
