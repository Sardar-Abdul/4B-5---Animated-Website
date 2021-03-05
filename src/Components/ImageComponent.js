import React from 'react'
import useWebAnimations from '@wellyshen/use-web-animations'
import image from './image.svg'

const ImageComponent = () => {
    const {ref} = useWebAnimations({
        keyframes: [
            {transform : 'translateY(-270px)'},
            {transform : 'translateY(-230px)'}
        ],
        timing: {duration: 3000, easing: 'ease-in-out', direction :'alternate', iterations: Infinity}
    })
    return (
        <div ref = {ref}>
            <img className = 'img' src = {image} alt = 'loading...' />
        </div>
    )
}

export default ImageComponent
