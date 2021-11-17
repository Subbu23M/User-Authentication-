// creating action

import axios from 'axios';

// Action for new register
export const startRegisterAction = function(registerData,redirect, resetForm){
    return(
        function(){
            const baseUrl = 'http://dct-user-auth.herokuapp.com/users/register';

            // consuming code
            axios
                .post(baseUrl,registerData)

                .then(function(response){
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

                .catch(function(error){
                    alert(error.message);
                })
        }
    )
}

// Action for login
export const userLogin = function(loginData,redirect, resetForm){
    return(
        function(dispatch){
            const baseUrlTwo = 'http://dct-user-auth.herokuapp.com/users/login';

            // consuming code
            axios
                .post(baseUrlTwo,loginData)

                .then(function(response){
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

                .catch(function(error){
                    alert(error.message);
                })
        }
    )
}

// Action to get user personal details
export const getuserDetails = function(){
    return(
        function(dispatch){
            const baseUrl = 'http://dct-user-auth.herokuapp.com/users/account';

            // consuming code
            axios
                .get(baseUrl,{
                    headers:{
                        'x-auth':localStorage.getItem('JWT_Token')
                    }
                })

                .then(function(response){
                    const result = response.data;

                    // dispatch action to state
                    dispatch(setUserInfo(result));
                    dispatch(stopLoading());
                })

                .catch(function(error){
                    alert(error.message)
                })
        }
    )
}

// action creator / generator
export const setUserInfo = function(user){
    return{
        type:'SET_USER_INFO',
        payload:user
    }
}

// action generator to stop loading
export const stopLoading = function(){
    return({
        type:'STOP_LOADING'
    })
}