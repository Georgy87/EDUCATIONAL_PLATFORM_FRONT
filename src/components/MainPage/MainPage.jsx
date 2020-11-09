import React from 'react'
import { useSelector } from 'react-redux';

const MainPage = () => {
    const state = useSelector(state => state.user.user)
    console.log(state);
    return (
        <div>
            <div>{state.user ? state.user.email : ''}</div>
            <div>{state.user ? state.user.name : ''}</div>
        </div>
    )
}

export default MainPage
