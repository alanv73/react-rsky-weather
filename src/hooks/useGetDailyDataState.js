import axios from 'axios';
import { useState } from 'react';
import { API_URL, DAILY_FIELDS } from '../constants';

const useGetDailyDataState = (defaultVal) => {
    const [state, setState] = useState(defaultVal);

    const getDailyData = async (targetDate) => {
        const headers = {
            headers: {
                reqdate: targetDate.toLocaleDateString(),
            }
        }
        const rskyUrl = `${API_URL}/daily`;
        try {
            const response = await axios.get(rskyUrl, headers);
            setState(response.data.daily);
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const getParamArray = (param) => {
        return state.map(p => p[param]);
    }

    const getMinParam = (param) => {
        let minElement = state.filter(d => 
            d[param] === Math.min(
                ...state.map(p => p[param])
            )
        );
        if(!minElement.length) return null;
        minElement = minElement[0];
        const min = minElement[param];
        const recorded = minElement.CREATED;
        return `${min}@${new Date(recorded).toLocaleTimeString()}`;
    }

    const getMaxParam = (param) => {
        let maxElement = state.filter(d => 
            d[param] === Math.max(
                ...state.map(p => p[param])
            )
        );
        if(!maxElement.length) return null;
        maxElement = maxElement[0];
        const max = maxElement[param];
        const recorded = maxElement.CREATED;
        return `${max}@${new Date(recorded).toLocaleTimeString()}`;
    }

    const getDayChartData = (param) => {
        const params = DAILY_FIELDS;

        if(params.includes(param)) {
            const objectArray = state.map(p => {
                return { 
                    name: new Date(p['CREATED']).toLocaleTimeString(),
                    param: p[param]
                };
            });
            return objectArray;
        }
        return [];
    }

    return [state, getDailyData, getParamArray, getMinParam, getMaxParam, getDayChartData];
}

export default useGetDailyDataState;