import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CurrencyConverterState} from "@/features/currencyConverter/model/types/CurrencyConverterState.ts";
import {
    fetchConversionRates
} from "@/features/currencyConverter/model/thunks/currencyConverterThunk/currencyConverterThunk.ts";
import {fetchCurrencies} from "@/features/currencyConverter/model/thunks/fetchCurrencies/fetchCurrenciesThunks.ts";


const initialState: CurrencyConverterState = {
    currenciesList: [],
    amountA: 0,
    currencyA: 'USD',
    amountB: 0,
    currencyB: 'UAH',
    conversionRateAB: 1,
    conversionRateBA: 1,
    error: null,
};

const currencyConverterSlice = createSlice({
    name: 'currencyConverter',
    initialState,
    reducers: {
        setAmountA(state, action: PayloadAction<number>) {
            state.amountA = action.payload;
            state.amountB = state.amountA * state.conversionRateAB;
        },
        setCurrencyA(state, action: PayloadAction<string>) {
            state.currencyA = action.payload;
        },
        setAmountB(state, action: PayloadAction<number>) {
            state.amountB = action.payload;
            state.amountA = state.amountB * state.conversionRateBA;
        },
        setCurrencyB(state, action: PayloadAction<string>) {
            state.currencyB = action.payload;
        },
        setConversionRates(state, action: PayloadAction<{ rateAB: number; rateBA: number }>) {
            state.conversionRateAB = action.payload.rateAB;
            state.conversionRateBA = action.payload.rateBA;
            state.amountB = state.amountA * state.conversionRateAB;
        },
        swapCurrencies(state) {
            const tempCurrency = state.currencyA;
            state.currencyA = state.currencyB;
            state.currencyB = tempCurrency;

            const tempAmount = state.amountA;
            state.amountA = state.amountB;
            state.amountB = tempAmount;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversionRates.fulfilled, (state, action: PayloadAction<{ rateAB: number; rateBA: number }>) => {
                state.conversionRateAB = action.payload.rateAB;
                state.conversionRateBA = action.payload.rateBA;
                state.amountB = state.amountA * state.conversionRateAB;
                state.amountA = state.amountB * state.conversionRateBA;
                state.error = null;
            })
            .addCase(fetchConversionRates.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch conversion rates';
            })
            .addCase(fetchCurrencies.fulfilled, (state,  action: PayloadAction<string[]>) => {
                state.currenciesList = action.payload.filter(currency => currency !== 'RUB');
            })
            .addCase(fetchCurrencies.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch currencies';
            });
    }
});

export const {
    setAmountA,
    setCurrencyA,
    setAmountB,
    setCurrencyB,
    swapCurrencies
} = currencyConverterSlice.actions;

export const { reducer: currencyConverterReducer } = currencyConverterSlice;
