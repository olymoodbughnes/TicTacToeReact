import React from 'react'

export default function InstructionsScreen({ returnToGame }) {
    return (
        <div className='overlay-help' onClick={returnToGame}>

            <article className='base'>
                <section className='first-paragraph'>When you fire up the game, you'll see the very first screen. It's like the welcome mat to the Tic Tac Toe world. No need to wait – just tap anywhere on the screen to get the game rolling.Now, if you cast your eyes to the left side of the screen, you'll spot some buttons that say "Help." These little helpers are here to guide you if you're feeling a bit unsure. Tap on them if you want to learn how to dive into the game.</section>

                <section className='spacer'>X</section>
                <section className='spacer'>O</section>
                <section className='second-paragraph'>Tap on the input box that says "Player 1." Type in your chosen name – it could be your nickname, your initials, or something totally unique. Once you're satisfied, don't forget to give that "Confirm" button a tap.Got your name locked and loaded? Awesome! Tap on "Confirm," and guess what? You're onto the next phase – getting Player 2 in the mix. It's like a tag team effort, and you're setting the stage for Player 2 to join the fun.</section>

                <section className='second-paragraph'>Alright, time to flex those tic-tac-toe muscles. Look at that game grid – it's like a playground for your X's and O's. Your mission? Take turns with Player 2 to put your mark in an empty square. Tap on the square where you want to put your mark, and watch the game unfold.After the excitement of the game, you'll get a glimpse of the champions. The top 5 players with the highest scores are showcased. Are you one of them? Time to show off your skills!

                    And that's the whole play-by-play of Tic Tac Toe! It's like a dance of X's and O's, a battle of minds, and a challenge of strategy. So go ahead, tap, type, and make your moves. The ultimate tic-tac-toe showdown awaits!</section>

                <section className='spacer'>X</section>


            </article>



        </div>
    )
}
