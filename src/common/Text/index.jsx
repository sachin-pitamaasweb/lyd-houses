import React from "react";

import "./style.css";

const Text = ({ text, className, isText, Title }) => {
    return (
        <div className={isText ? className : "home-text"}>
            <div className={Title ? 'we-build-text': "home-text-1"}>
                {Title && <h5 className="home-text-title">{Title}</h5>}
                 <p className={Title ? "home-text-para" : ""}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Text;