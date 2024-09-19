import React from 'react';
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface ConversionRateProps {
    currencyA: string;
    currencyB: string;
    conversionRateAB: number;
    className?: string
}

export const ConversionRate: React.FC<ConversionRateProps> = (props) => {
    const {
        currencyA,
        currencyB,
        conversionRateAB,
        className = ''
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <p>1 {currencyA} = {conversionRateAB} {currencyB}</p>
        </div>
    );
};
