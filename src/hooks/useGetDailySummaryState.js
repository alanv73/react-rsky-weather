import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../constants';

const useGetDailySummaryState = (defaultVal) => {
    const [state, setState] = useState(defaultVal);

    const getDailySummary = async (targetDate, numDays) => {
        const headers = {
            headers: {
                reqdate: targetDate.toLocaleDateString(),
                days: numDays
            }
        }
        const rskyUrl = `${API_URL}/dailysummary`;
        try {
            const response = await axios.get(rskyUrl, headers);
            setState(response.data.daily_summary);
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const getParamArray = (param) => {
        if(param === 'CREATED_DATE'){
            return state.map(p => new Date(p['CREATED_DATE']).toLocaleDateString());
        }
        return state.map(p => p[param]);
    }

    return [state, getDailySummary, getParamArray];
}

export default useGetDailySummaryState;