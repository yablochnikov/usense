import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/app/providers/StoreProvider/config/store.ts';
import { fetchRates } from '@/features/ticker/model/thunks/fetchRates/fetchRates.ts';
import { selectRates } from '@/features/ticker/model/selectors/selectRates/selectRates.ts';
import { selectLoading } from '@/features/ticker/model/selectors/selectLoading/selectLoading.ts';
import cls from './Ticker.module.scss';

interface TickerProps {
    className?: string;
}

export const Ticker: FC<TickerProps> = ({ className }) => {
    const dispatch = useDispatch<AppDispatch>();
    const rates = useSelector((state: RootState) => selectRates(state));
    const loading = useSelector((state: RootState) => selectLoading(state));

    useEffect(() => {
        dispatch(fetchRates());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;

    const repeatedText = Object.entries(rates).map(([currency, rate]) => (
        <span key={currency} className={cls.ticker__item}>
      {currency} {(1/rate).toFixed(3)}
    </span>
    ));

    return (
        <div className={`${cls.ticker} ${className}`}>
            <div className={cls.ticker__slider}>
                <div className={cls.ticker__slider_primary}>{repeatedText}</div>
            </div>
        </div>
    );
};
