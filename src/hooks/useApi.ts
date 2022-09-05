import React, {useState, useEffect} from "react";

const getList = (query) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(query, 'query')
          resolve([6,7,8,9])
      }, 2000)
  })
}

const useApi = () => {
    const [data, setData] = useState([1,2,3,4,5]);
    const [query, setQuery] = useState('')
    useEffect(() => {
        (async () => {
            const data = await getList(query) as number [];
            console.log(111)
            setData(data)
        })()
    }, [query])
    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    return [{ data }, handleInputChange]
}

export default useApi