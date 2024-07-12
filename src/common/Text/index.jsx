import React from "react";

import "./style.css";

const Text = ({
    text,
    className,
    isText,
    Title,
    startText,
    midText,
    endText
}) => {
    return (
        <div className={isText ? className : "home-text"}>
            <div className={Title ? 'we-build-text' : "home-text-1"}>
                {Title && <h5 className="home-text-title">{Title}</h5>}
                <p className={Title ? "home-text-para" : ""}>
                    {text}
                </p>
                {startText && midText && endText &&(
                    <p>
                        {startText} <sapn className="mid-text">{midText}</sapn> {endText}
                        </p>
                )}
            </div>
        </div>
    );
};

export default Text;