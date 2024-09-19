import React, {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

import cls from './CustomInput.module.scss'

interface InputProps {
    className?: string;
    idPrefix: string;
    amount: number;
    onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<InputProps> = (props) => {
    const {className = '',
        idPrefix,
        amount,
        onAmountChange
    } = props;

    return (
        <input
            className={classNames(cls.CustomInput, {}, [className])}
            type="number"
            id={`${idPrefix}Amount`}
            value={amount}
            onChange={onAmountChange}
            data-testid="customInput"
        />
    );
};
