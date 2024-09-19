import React from 'react';
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './CurrencyInput.module.scss'
import {CustomSelect} from "@/shared/ui/CustomSelect/CustomSelect.tsx";
import {CustomInput} from "@/shared/ui/CustomInput/CustomInput.tsx";

interface CurrencyInputProps {
    className?: string;
    amount: number;
    currency: string;
    currenciesList: string[];
    onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    idPrefix: string;
    flagsData: Record<string, string>;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = (props) => {
    const {
        amount,
        currency,
        currenciesList,
        onAmountChange,
        onCurrencyChange,
        idPrefix,
        className = '',
        flagsData
    } = props;
    return (
        <div className={classNames(cls.CurrencyInput, {}, [className])}>
            <label htmlFor={`${idPrefix}Currency`}>{idPrefix}</label>
            <div className={cls.wrapper}>
                <CustomSelect
                    id={`${idPrefix}Currency`}
                    value={currency}
                    onChange={onCurrencyChange}
                    currenciesList={currenciesList}
                    flagsData={flagsData}/>
                <CustomInput idPrefix={idPrefix} amount={amount} onAmountChange={onAmountChange}/>
            </div>
        </div>
    );
};

