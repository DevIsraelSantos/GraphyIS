import React from 'react';
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    color?: string;
}
export declare const Button: React.FunctionComponent<IButtonProps>;
