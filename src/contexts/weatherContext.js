import React, { useState, createContext } from 'react';
import useGetWeatherState from '../hooks/useGetWeatherState';
import useGetDailyDataState from '../hooks/useGetDailyDataState';
import useGetDailySummaryState from '../hooks/useGetDailySummaryState';
import useSelectState from '../hooks/useSelectState';

export const WeatherContext = createContext();
export const DailyContext = createContext();
export const DailySummaryContext = createContext();

export function WeatherProvider(props) {
    const [currentWeather, isLoading,  getCurrentWeather] = useGetWeatherState({});
    const [dailySummary, getDailySummary, getSummaryParamArray] = useGetDailySummaryState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dChartField, handleDayChartChange] = useSelectState('AMBIENT_TEMPERATURE');

    const [
        dailyData, 
        getDailyDataState, 
        getDailyParamArray,
        getMinParam,
        getMaxParam,
        getDayChartData
     ] = useGetDailyDataState([]);

    return(
        <WeatherContext.Provider value={{
            currentWeather,
            isLoading, 
            getCurrentWeather
        }} >
            <DailyContext.Provider value={{
                dailyData, 
                currentDate, 
                setCurrentDate, 
                getDailyDataState, 
                getDailyParamArray, 
                getMinParam, 
                getMaxParam,
                getDayChartData,
                dChartField,
                handleDayChartChange
            }} >
                <DailySummaryContext.Provider value={{
                    dailySummary, 
                    getDailySummary,
                    getSummaryParamArray
                }} >
                    {props.children}
                </DailySummaryContext.Provider>
            </DailyContext.Provider>
        </WeatherContext.Provider>
    );
}