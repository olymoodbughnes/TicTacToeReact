import React from 'react'
import './NameScreen';
export default function FanfareScreen({ onFinish, winner }) {
    return (
        <>
            <div className='buffer'></div>
            <div className='winner-show' onClick={onFinish}>
                {winner}
            </div>
            <div className='buffer'>Click Name To Advance</div>
        </>
    )
}
