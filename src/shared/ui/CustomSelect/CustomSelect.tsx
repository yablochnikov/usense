import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

import cls from './CustomSelect.module.scss'

interface CustomSelectProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    currenciesList: string[];
    flagsData: Record<string, string>;
    className?: string;
}

export const CustomSelect: FC<CustomSelectProps> = (props) => {
    const {id,
        value,
        onChange,
        currenciesList,
        flagsData,
        className = ''
    } = props;
    return (
        <div className={classNames(cls.CustomSelect, {}, [className])}>
            {value && flagsData[value] && (
                <img
                    className={cls.flag}
                    src={flagsData[value]}
                    alt={`${value} flag`}
                />
            )}
            <select
                className={cls.select}
                id={id}
                value={value}
                onChange={onChange}
            >
                {currenciesList.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
};
