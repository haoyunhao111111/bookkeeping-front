import React, {useState, useEffect} from 'react';

import useApi from './hooks/useApi';

function  App() {
    const [{data}, handleInputChange] = useApi()
    return (
        <div className='app'>
            <input type="text" onChange={handleInputChange}/>
            {data.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

export default App
