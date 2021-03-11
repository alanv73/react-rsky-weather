import axios from 'axios';
import { useState } from 'react';
import { API_URL, HOURLY_FIELDS } from '../constants';
import { formatHours } from '../helpers';

const useGetHourlySummary = (defaultVal) => {
    const [state, setState] = useState(defaultVal);

    const getHourlySummary = async (targetDate) => {
        const headers = {
            headers: {
                reqdate: targetDate.toLocaleDateString(),
            }
        }
        const rskyUrl = `${API_URL}/hourlysummary`;
        try {
            const response = await axios.get(rskyUrl, headers);
            setState(response.data.hourly_summary);
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const getParamArray = (param) => {
        if(param === 'CREATED_HOUR'){
            return state.map(p => formatHours(p['CREATED_HOUR']));
        }
        return state.map(p => p[param]);
    }

    const getHrlyChartData = (param) => {
        const params = HOURLY_FIELDS;

        if(params.includes(param)) {
            const objectArray = state.map(p => {
                return { 
                    name: formatHours(p['CREATED_HOUR']),
                    param: p[param]
                };
            });
            return objectArray;
        }
        return [];
    }

    return [state, getHourlySummary, getParamArray, getHrlyChartData];
}

export default useGetHourlySummary;