import React, { useState, createContext } from 'react';
import useGetWeatherState from '../hooks/useGetWeatherState';
import useGetDailyDataState from '../hooks/useGetDailyDataState';
import useGetDailySummaryState from '../hooks/useGetDailySummaryState';
import useSelectState from '../hooks/useSelectState';

export const WeatherContext = createContext();
export const DailyContext = createContext();
export const DailySummaryContext = createContext();

export function WeatherProvider(props) {
    const [currentWeather, isCurrentWeatherLoading,  getCurrentWeather] = useGetWeatherState({});
    const [dailySummary, isDailySummaryLoading, getDailySummary, getSummaryParamArray] = useGetDailySummaryState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dChartField, handleDayChartChange] = useSelectState('AMBIENT_TEMPERATURE');

    const [
        dailyData, 
        isDailyDataLoading,
        getDailyDataState, 
        getDailyParamArray,
        getMinParam,
        getMaxParam,
        getDayChartData
     ] = useGetDailyDataState([]);

    return(
        <WeatherContext.Provider value={{
            currentWeather,
            isCurrentWeatherLoading, 
            getCurrentWeather
        }} >
            <DailyContext.Provider value={{
                dailyData,
                isDailyDataLoading, 
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
                    isDailySummaryLoading,
                    getDailySummary,
                    getSummaryParamArray
                }} >
                    {props.children}
                </DailySummaryContext.Provider>
            </DailyContext.Provider>
        </WeatherContext.Provider>
    );
}