import React from 'react';

import {useSelector} from 'react-redux';

import Loader from '../../Loader';

import HeaderTags from '../../HTML-Elements/HeaderTags';

const Account = () => {

    // To read state within the component
    const store = useSelector((state) => {
        return state.user.data;
    }) 
    // console.log(store);

    return (
        <>

            <HeaderTags
                Tag='h2'
                text='user account'
                className='text-capitalize ml-2'
            />

            <article>

                {/* Conditional Rendering Ternary Operator */}
                {
                    (store.isLoading) 
                    
                        ? 
                            
                            <Loader/> 
                            
                        :   <>
                        
                                <p className='text-dark ml-2 lead'>
                                    Username : {store.username} <br /> Email :  {store.email}
                                </p>
                            </>
                }

            </article>
            
        </>
    )
}

export default Account;
