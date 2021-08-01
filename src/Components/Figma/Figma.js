/* Required Imports */
import React from 'react'; 

/* CSS Files */
import '../../CSS/figma.css';

function Figma() {
    return(
        <div className={"figma-web-page"}>
            <div className={"figma-title"}>
                <h1 className={"figma-title-text"}>
                    Title
                </h1>
            </div>
            <div className={"figma-description"}>
                <p className={"figma-description-text"}>
                This is some text for description
                </p>
            </div>
            <div className={"figma-text-area"}>
                <p className={"figma-text"}>
                This is some text here 
                </p>
            </div>
        </div>
    )
}

export default Figma;

