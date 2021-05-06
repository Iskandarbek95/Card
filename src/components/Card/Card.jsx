import React, { useState } from 'react';
import { css } from '@emotion/css';

const Card = () => {

    const [background, setBackgroud] = useState('#ffffff');
    const [font, setFont] = useState('#1a1400');

    const setStyle = (background, font) => {
        setBackgroud(background);
        setFont(font);
    };

    const container = css`
        box-shadow: 0px 0px 40px 10px #d1d1e0;
        margin: 150px auto;
        max-width: 700px;
    `;

    const card = css`
        background-color: ${background};
        padding: 40px;
        color: ${font};
    `;

    const cardButtons = css`
        display: flex;
        flex-direction: row;
        button {
            margin: 25px 15px 0 0;
            padding: 8px 25px;
            border-radius: 25px;
            border: none;
            cursor: pointer;
        }
    `;

    const blackButton = css`
        color: #f2f2f2;
        background-color: #404040;
    `;

    const blueButton = css`
        color: #f2f2f2;
        background-color: #0066cc;
    `;

    const yellowButton = css`
        color: #1a1a00;
        background-color: #e6b800;
    `;


    return (
        <div className={container}>
            <div className={card}>
                <h1>Your Life is Your Message</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aperiam. Debitis sint amet numquam sunt velit eum iste incidunt porro hic eaque at totam voluptatibus odio, aliquid, necessitatibus eligendi sequi.</p>
                <div className={cardButtons}>
                    <button
                        onMouseEnter={() => setStyle('#404040', '#f2f2f2')}
                        onMouseOut={() => setStyle('#f2f2f2', '#404040')}
                        className={blackButton}>
                        Black
                    </button>
                    <button
                        onMouseEnter={() => setStyle('#0066cc', '#f2f2f2')}
                        onMouseOut={() => setStyle('#f2f2f2', '#404040')}
                        className={blueButton}>
                        Blue
                    </button>
                    <button
                        onMouseEnter={() => setStyle('#e6b800', '#404040')}
                        onMouseOut={() => setStyle('#f2f2f2', '#404040')}
                        className={yellowButton}>
                        Yellow
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
