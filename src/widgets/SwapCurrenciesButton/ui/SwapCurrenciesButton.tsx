import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

import cls from './SwapCurrenciesButton.module.scss'
import SwapIcon from '@/shared/assets/swap-icon.svg'
import {swapCurrencies} from "@/features/currencyConverter/model/slice/currencyConverterSlice.ts";
import {useDispatch} from "react-redux";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button.tsx";

interface SwapCurrenciesButtonProps {
    className?: string;
}

export const SwapCurrenciesButton: FC<SwapCurrenciesButtonProps> = ({className = ""}) => {
    const dispatch = useDispatch();

    const handleSwap = () => {
        dispatch(swapCurrencies());
    };

    return (
        <div className={classNames(cls.container, {}, [className])}>
            <span></span>
            <Button
                onClick={handleSwap}
                className={classNames(cls.SwapCurrenciesButton, {}, [className])}
                variant={ButtonVariant.ROUNDED}
            >
                <img src={SwapIcon} alt="swap icon" />
            </Button>
        </div>
    );
};
