import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '@/shared/config/api/api';

interface FetchConversionRatesParams {
    from: string;
    to: string;
}

export const fetchConversionRates = createAsyncThunk(
    'currencyConverter/fetchConversionRates',
    async ({ from, to }: FetchConversionRatesParams) => {
        try {
            const response = await axios.get(`${API_BASE_URL}${from}`);
            const rates = response.data.rates;

            if (to in rates) {
                const rateAB = rates[to];
                const rateBA = 1 / rateAB;
                return { rateAB, rateBA };
            } else {
                throw new Error(`Conversion rate for ${to} not available`);
            }
        } catch (error) {
            throw new Error('Failed to fetch conversion rates');
        }
    }
);
