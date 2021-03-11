import React from 'react'

function FieldDropDown({field, onChange, data}) {
    return (
        <div>
            <select 
                    value={field} 
                    onChange={onChange} 
                    id="cars"
                >
                    {data.map(f => (
                        <option key={f} value={f}>
                            {
                                f.replace('_', ' ')
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