/* Required Imports */
import React from 'react'; 

/* CSS Files */
import '../../CSS/figma.css';
import '../../index.css';

function Figma() {
    return(
        <div className={"figma-web-page"}>
            <div className={"figma-title"}>
                <h1 className={"figma-title-text"}>
                    Title
                </h1>
            </div>
            <div className={"figma-description"}>
                <div className={"figma-description-text"}>
                    <div className={"figma-description-text-color"}>
                        <div className={"figma-description-text-shadow"}>
                            <p>This is some text for description</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"figma-text-area"}>
                <div className={"figma-text"}>
                    <div className={"figma-text-color"}>
                        <div className={"figma-text-color"}>
                        <p className={"figma-text"}> This is some text here </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Figma;

