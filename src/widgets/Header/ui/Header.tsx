import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

import cls from './Header.module.scss'
import {Ticker} from "@/features/ticker/ui/Ticker.tsx";

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({className = ""}) => {
    return (
        <header className={classNames(cls.Header, {}, [className])} data-testid="header">
            <Ticker/>
        </header>
    );
};
