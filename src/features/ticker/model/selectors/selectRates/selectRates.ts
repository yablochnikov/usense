import { RootState } from "@/app/providers/StoreProvider/config/store";

export const selectRates = (state: RootState) => state.ticker.rates;
