import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {FC} from "react";
import LightIcon from 'shared/assets/icons/theme_light.svg';
import DarkIcon from 'shared/assets/icons/theme_dark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher : FC<ThemeSwitcherProps> = (props) => {
    const {className, children, ...otherProps} = props;

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
          theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
          {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};