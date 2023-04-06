import React from 'react';

function Button({text, classes, gradient, type}) {
    return (
        <>
            <button
                type={type === "submit" ? "submit" : "button" }
                className={gradient ? `py-3 bg-gradient-to-r to-blue-600 rounded-xl from-violet-500 text-sm text-white font-semibold ${classes}` : `py-3 text-sm rounded-xl text-white font-semibold ${classes}`}>{text}</button>
        </>
    );
}

export default Button;
