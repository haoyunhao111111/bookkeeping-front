import React, {useState, useEffect, useCallback} from 'react';

import useApi from './hooks/useApi';

function Child({callback}) {
    useEffect(() => {
        callback()
    }, [callback])
    return <div>子组件</div>
}

function  App() {
    // const [{data}, handleInputChange] = useApi()
    const [name, setName] = useState('');
    const [age, setAge] = useState(18);
    const [kw, setkw] = useState('');
    const callback = useCallback(() => {
        console.log(111)
    }, [name, age])
    return (
        <div className='app'>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <input type="text" onChange={(e) => setAge(e.target.value)}/>
            <input type="text" onChange={(e) => setkw(e.target.value)}/>
            <Child callback={callback}/>
        </div>
    )
}

export default App
