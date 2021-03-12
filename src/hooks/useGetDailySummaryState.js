import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../constants';

const useGetDailySummaryState = (defaultVal) => {
    const [state, setState] = useState(defaultVal);
    const [loading, setLoading] = useState(false);

    const getDailySummary = async (targetDate, numDays=1) => {
        setLoading(true);
        const headers = {
            headers: {
                reqdate: targetDate.toLocaleDateString(),
                days: numDays
            }
        }

        const rskyUrl = `${API_URL}/dailysummary`;

        try {
            axios.get(rskyUrl, headers)
                .then(response => response.data.daily_summary)
                .then(dailySummary => {
                    setLoading(false);
                    setState(dailySummary);
                }).catch(err => {
                    setLoading(false);
                    console.log(`Error: ${err.message}`);
                });
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

    return [state, loading, getDailySummary, getParamArray];
}

export default useGetDailySummaryState;