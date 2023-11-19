import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')
  }
    return (
      <Button
        className={classNames(cls.langSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggleLang}
      >
        {t('Language')}
      </Button>
    );
};
