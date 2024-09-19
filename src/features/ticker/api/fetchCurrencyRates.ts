import axios from 'axios';
import {CurrencyRates} from "@/features/ticker/model/types/CurrencyRates.ts";
import {API_BASE_URL} from "@/shared/config/api/api.ts";



export const fetchCurrencyRates = async (): Promise<CurrencyRates> => {
    const response = await axios.get<CurrencyRates>(`${API_BASE_URL}/UAH`);
    return response.data;
};
