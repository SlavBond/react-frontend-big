import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
    CLEAR = 'clear', // чистая кнопка без всего просто текст

}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button = ({ className, children, theme, ...otherProps }: ButtonProps) => {
    return (
        <button
            className={classNames(cls.button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
