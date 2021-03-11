import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../constants';

const useGetWeatherState = (initialVal) => {
    const [state, setState] = useState(initialVal);
    const [loading, setLoading] = useState(false);


    const getLatestWeather = async () => {
        setLoading(true);
        const rskyUrl = `${API_URL}/currently`;

        try{
            axios.get(rskyUrl)
                .then(response => response.data.currently)
                .then(currently => {
                    setLoading(false);
                    setState(currently);
                });
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }

    return [state, loading, getLatestWeather];
}

export default useGetWeatherState;