import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

import cls from './Main.module.scss'
import {Converter} from "@/widgets/Converter";
import {ConversionRate} from "@/widgets/ConversionRate/ui/ConversionRate.tsx";
import {RootState} from "@/app/providers/StoreProvider/config/store.ts";
import { useSelector } from "react-redux";

interface MainProps {
    className?: string;
}

export const Main: FC<MainProps> = ({className= ""}) => {
    const {
        currencyA,
        currencyB,
        conversionRateAB,
    } = useSelector((state: RootState) => state.currencyConverter);

    return (
        <main className={classNames(cls.Main, {}, [className])} data-testid="main">
            <h1 className={classNames(cls.heading, {}, [])}>Currency Converter</h1>
            <p className={classNames(cls.description, {}, [])}>Check live rates, set rate alerts, receive notifications and more.</p>
            <Converter/>
            <p className={classNames(cls.hint, {}, [])}>Indicative Exchange Rate</p>
            <ConversionRate currencyA={currencyA} currencyB={currencyB} conversionRateAB={conversionRateAB} className={cls.rate}/>
        </main>
    );
};
