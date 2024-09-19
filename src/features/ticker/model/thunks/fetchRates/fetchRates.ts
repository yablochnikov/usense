import { fetchCurrencyRates } from "@/features/ticker/api/fetchCurrencyRates";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRates = createAsyncThunk(
    'ticker/fetchRates',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchCurrencyRates();
            return data.rates;
        } catch (error) {
            console.error('Failed to fetch rates', error);
            return rejectWithValue('Failed to fetch rates');
        }
    }
);