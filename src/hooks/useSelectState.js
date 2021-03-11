import { useState } from 'react';

const useSelectState = initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return [value, handleChange];
}

export default useSelectState;