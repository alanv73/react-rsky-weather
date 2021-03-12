import React from 'react';
import useStyles from './styles/FieldDropDownStyles';

function FieldDropDown({field, onChange, data}) {
    const classes = useStyles();
    return (
        <div>
            <select 
                className={classes.select}
                value={field} 
                onChange={onChange} 
                id="cars"
            >
                {data.map(f => (
                    <option className={classes.option} key={f} value={f}>
                        {
                            f.replace(/_/g, ' ')
                                .split(' ')
                                .map(w => 
                                    w[0] + w.substr(1).toLowerCase()
                                ).join(' ')
                        }
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FieldDropDown;