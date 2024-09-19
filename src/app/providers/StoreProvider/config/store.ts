import { configureStore } from '@reduxjs/toolkit';
import tickerReducer from '@/features/ticker/model/slice/tickerSlice';
import { StateSchema } from './stateSchema';
import {currencyConverterReducer} from "@/features/currencyConverter/model/slice/currencyConverterSlice.ts";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            ticker: tickerReducer,
            currencyConverter: currencyConverterReducer
        },
        preloadedState: initialState,
    });
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
