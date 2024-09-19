import {RootState} from "@/app/providers/StoreProvider/config/store.ts";

export const selectLoading = (state: RootState) => state.ticker.loading;
