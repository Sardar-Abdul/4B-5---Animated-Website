import React from 'react'
import useWebAnimations from '@wellyshen/use-web-animations'
import ImageComponent from './ImageComponent'

const Home = () => {
    const {ref} = useWebAnimations({
        keyframes: [
            {transform: 'translateY(90px)', opacity: 0.7},
            {transform: 'translateY(95px)', opacity: 1}
        ],
        timing : {duration: 1200, iterations:Infinity, easing: "ease-in-out", direction:"alternate"}
    })
    return (
        <div >
            <div className = 'home-text' ref = {ref}>
                <h2>GROW YOUR <span style={{color: '#00BFFF'}}>BUSINESS</span></h2>
                <div className = 'with-us'>
                    <h2>WITH <span style={{color: '#00BFFF'}}>US!</span></h2>
                </div>
            </div>
            <button className = 'btn'>GET STARTED</button>
            <ImageComponent />
        </div>
    )
}

export default Home
