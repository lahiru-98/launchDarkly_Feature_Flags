import React from 'react'
import './Card.css';
function Card() {
    return (
        <div className="Box">
            <h3>Feature 1</h3>
            <p>HTML</p>
            <div class="container">
                <div class="skills html">90%</div>
            </div>

            <p>CSS</p>
            <div class="container">
                <div class="skills css">80%</div>
            </div>

            <p>JavaScript</p>
            <div class="container">
                <div class="skills js">65%</div>
            </div>
        </div>
    )
}

export default Card


