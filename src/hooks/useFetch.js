import { useState, useEffect } from 'react'

export const useFetch = (url) => {


    const [state, setState] = useState({ data: null, loading: true, error: null })
    const baseUrl = 'http://localhost:3700/'

    useEffect(() => {


        setState({ data: null, loading: true, error: null });

        fetch(baseUrl+url, {
            'mode': 'cors'
        })
            .then(resp => resp.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data
                })

            });

    }, [url]);

    return state;
}
