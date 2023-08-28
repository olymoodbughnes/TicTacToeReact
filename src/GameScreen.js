import React from 'react'
import './GameScreen.css';
export default function GameScreen() {
    return (
        <div className='ttt-table'>
            {/*TOP ROW*/}
            <article className='row-one'>
                <section className='sq top-left'>allo m7</section>
                <section className='sq top-mid'>allo m7</section>
                <section className='sq top-right'>allo m7</section>
            </article>
            {/*MID ROW*/}
            <article className='row-two'>
                <section className='sq mid-left'>allo m7</section>
                <section className='sq mid-mid'>allo m7</section>
                <section className='sq mid-right'>allo m7</section>
            </article>
            {/*BOTTOM ROW*/}
            <article className='row-three'>
                <section className='sq bot-left'>allo m7</section>
                <section className='sq bot-mid'>allo m7</section>
                <section className='sq bot-right'>allo m7</section>
            </article>
        </div>
    )
}
