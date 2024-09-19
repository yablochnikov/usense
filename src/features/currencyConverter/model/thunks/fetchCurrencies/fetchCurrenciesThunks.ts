import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {API_BASE_URL} from "@/shared/config/api/api.ts";

interface ConversionRatesResponse {
    rates: { [currencyCode: string]: number };
}

export const fetchCurrencies = createAsyncThunk<
    string[],
    void,
    { rejectValue: string }
>(
    'currencyConverter/fetchCurrencies',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<ConversionRatesResponse>(`${API_BASE_URL}/USD`);
            const currencies = Object.keys(response.data.rates);
            return currencies;
        } catch (error) {
            return rejectWithValue('Failed to fetch currencies');
        }
    }
);
