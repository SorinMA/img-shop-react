import React from "react"
import {imgCSS, containerCSS, topLeft, topRight} from "./CSS/photoCSS"

function Photo(props) {
    const {url} = props.data
    
    return (
        <div style={containerCSS}>
            <img src={url} alt={url} style={imgCSS}/>
            <div style={topLeft}>
                Like
            </div>
            <div style={topRight}>
                Shop
            </div>
        </div>
    )
}

export default Photo