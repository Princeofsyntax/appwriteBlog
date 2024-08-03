import React from "react";

// Children in parameter is a text which is supposed to be written on button as name
// Button is coded here as a modular unit so that whenever button is needed, this code can be used
// We will use forward reference hook whenever we want to use this button in any file/page --> ex - Input.jsx

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}