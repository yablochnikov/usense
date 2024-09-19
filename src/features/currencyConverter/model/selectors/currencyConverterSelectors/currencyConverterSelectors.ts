import {RootState} from "@/app/providers/StoreProvider/config/store.ts";

export const selectCurrencyConverterState = (state: RootState) => state.currencyConverter;

export const selectCurrenciesList = (state: RootState) => state.currencyConverter.currenciesList;

export const selectAmountA = (state: RootState) => state.currencyConverter.amountA;

export const selectCurrencyA = (state: RootState) => state.currencyConverter.currencyA;

export const selectAmountB = (state: RootState) => state.currencyConverter.amountB;

export const selectCurrencyB = (state: RootState) => state.currencyConverter.currencyB;

export const selectConversionRateAB = (state: RootState) => state.currencyConverter.conversionRateAB;

export const selectConversionRateBA = (state: RootState) => state.currencyConverter.conversionRateBA;

export const selectError = (state: RootState) => state.currencyConverter.error;
