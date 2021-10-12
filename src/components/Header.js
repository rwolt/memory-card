import React from 'react';
import '../styles/Header.css';

function Header(props) {
    return(
        <div className="header">
             <div className="directions">Try to click every character, without clicking a character more than once. </div>
             <div className="high-scores">
                <div className="score-container"><span className="score-label">Score: </span><span className="score">{props.score}</span></div>
                <div className="best-container"><span className="best-label">Best: </span><span className="best">{props.best}</span></div>
             </div>
        </div>
    )

}

export default Header;