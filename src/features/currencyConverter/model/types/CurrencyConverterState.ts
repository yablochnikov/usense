export interface CurrencyConverterState {
    currenciesList: string[];
    amountA: number;
    currencyA: string;
    amountB: number;
    currencyB: string;
    conversionRateAB: number;
    conversionRateBA: number;
    error: string | null;
}