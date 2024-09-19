import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({className = ""}) => {
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
          Oops! Unexpected error occurred.
        </div>
    );
};
