import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

import cls from './Converter.module.scss'
import { CurrencyConverter } from "@/features/currencyConverter";


interface ConverterProps {
    className?: string;
}

export const Converter: FC<ConverterProps> = ({className = ""}) => {
    return (
        <div className={classNames(cls.Converter, {}, [className])} data-tesid="converter">
            <CurrencyConverter />
        </div>
    );
};
