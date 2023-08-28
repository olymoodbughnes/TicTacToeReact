import React from 'react'
import './SplashScreen.css';
export default function SplashScreen({ onClick }) {


    return (
        <div className='SplashScreen' onClick={onClick}>
            <div className='intro title-name'>
                TIC TAC TOE
            </div>
            <div className='intro'>Click here to start game</div>
        </div>
    )
}
