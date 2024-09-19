import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRates } from '../thunks/fetchRates/fetchRates';
import { CurrencyRates } from '../types/CurrencyRates';

interface TickerState {
    rates: { [currency: string]: number };
    loading: boolean;
}

const initialState: TickerState = {
    rates: {},
    loading: false,
};


const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRates.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRates.fulfilled, (state, action: PayloadAction<CurrencyRates['rates']>) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                state.rates = action.payload;
                state.loading = false;
            })
            .addCase(fetchRates.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setLoading } = tickerSlice.actions;
export default tickerSlice.reducer;
