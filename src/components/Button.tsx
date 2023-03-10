import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    color?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;

    let _style: React.CSSProperties = style || {};
    /** Override Defaults */
    backgroundColor && (_style.backgroundColor = backgroundColor);
    color && (_style.color = color);

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};
