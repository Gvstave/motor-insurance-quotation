import React from "react"

type ButtonProps = {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ className = '', type = 'button', onClick, text = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800/90 ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
