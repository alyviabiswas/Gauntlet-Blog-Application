import React from 'react';

function Button({
    children,
    type = "button",
    bgColor = "bg-purple",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`${bgColor} ${textColor} px-6 py-2 rounded-lg hover:bg-pink transition duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;