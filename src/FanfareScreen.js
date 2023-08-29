import React from 'react'
import './NameScreen';
export default function FanfareScreen({ onFinish, winner, isDraw }) {
    return (
        <>
            <div className='buffer'></div>
            <div className='winner-show' onClick={onFinish}>


                {!isDraw ? "THE WINNER IS: " + winner : "IT'S A DRAW!!"}
            </div>
            <div className='buffer'>Click Name To Advance</div>
        </>
    )
}
