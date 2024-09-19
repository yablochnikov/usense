import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {fetchCurrencies} from "@/features/currencyConverter/model/thunks/fetchCurrencies/fetchCurrenciesThunks.ts";
import {
    fetchConversionRates
} from "@/features/currencyConverter/model/thunks/currencyConverterThunk/currencyConverterThunk.ts";
import {
    setAmountA,
    setAmountB,
    setCurrencyA,
    setCurrencyB
} from '../model/slice/currencyConverterSlice.ts';
import {CurrencyInput} from "@/widgets/CurrencyInput";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './CurrencyConverter.module.scss'
import {SwapCurrenciesButton} from "@/widgets/SwapCurrenciesButton";
import {API_FLAGS_URL} from "@/shared/config/api/api.ts";

export const CurrencyConverter: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [flagsData, setFlagsData] = useState<Record<string, string>>({});
    const {
        amountA,
        currencyA,
        amountB,
        currencyB,
        currenciesList,
    } = useSelector((state: RootState) => state.currencyConverter);

    useEffect(() => {
        const fetchFlags = async () => {
            try {
                const response = await fetch(API_FLAGS_URL);
                const data = await response.json();

                const flags = data.reduce((acc: Record<string, string>, currency: any) => {
                    acc[currency.code] = currency.flag;
                    return acc;
                }, {});
                setFlagsData(flags);
            } catch (err) {
                console.error("Error fetching flags:", err);
            }
        };

        fetchFlags();
    }, []);

    useEffect(() => {
        dispatch(fetchCurrencies());
    }, [dispatch]);

    useEffect(() => {
        if (currencyA && currencyB) {
            dispatch(fetchConversionRates({ from: currencyA, to: currencyB }));
        }
    }, [currencyA, currencyB, dispatch]);

    const handleAmountAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAmountA = parseFloat(e.target.value) || 0;
        dispatch(setAmountA(newAmountA));
    };

    const handleCurrencyAChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCurrencyA(e.target.value));
    };

    const handleAmountBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAmountB = parseFloat(e.target.value) || 0;
        dispatch(setAmountB(newAmountB));
    };

    const handleCurrencyBChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCurrencyB(e.target.value));
    };

    return (
        <div className={classNames(cls.CurrencyConverter, {}, [])}>
            <div className={classNames(cls.wrapper, {}, [])}>
                <CurrencyInput
                    amount={amountA}
                    currency={currencyA}
                    currenciesList={currenciesList}
                    onAmountChange={handleAmountAChange}
                    onCurrencyChange={handleCurrencyAChange}
                    idPrefix="Amount"
                    flagsData={flagsData}
                />

                <SwapCurrenciesButton/>


                <CurrencyInput
                    amount={amountB}
                    currency={currencyB}
                    currenciesList={currenciesList}
                    onAmountChange={handleAmountBChange}
                    onCurrencyChange={handleCurrencyBChange}
                    idPrefix="Converted amount"
                    flagsData={flagsData}
                />
            </div>
        </div>
    );
};
