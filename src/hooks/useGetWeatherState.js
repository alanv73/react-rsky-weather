import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../constants';

const useGetWeatherState = (initialVal) => {
    const [state, setState] = useState(initialVal);


    const getLatestWeather = async () => {
        const rskyUrl = `${API_URL}/currently`;

        try{
            const response = await axios.get(rskyUrl);
            setState(response.data.currently);
        } catch(err) {
            console.log(`Error: ${err.message}`);
        }
    }

    return [state, getLatestWeather];
}

export default useGetWeatherState;