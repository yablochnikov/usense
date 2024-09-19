import {CurrencyRates} from "@/features/ticker/model/types/CurrencyRates.ts";

export interface TickerState {
    rates: CurrencyRates;
    loading: boolean;
}