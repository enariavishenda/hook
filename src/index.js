import ReactDOM from "react-dom";
import React, { useState, useEffect, useCallback} from "react";

const App = () => {

    const [value, setValue] = useState(1)
    const [visible, setVisible] = useState(true)

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}>
                    +
                </button>
                <button onClick={() => setVisible(false)}>
                    hide
                </button>
                <PlanetInfo id={value} />
            </div>
        )
    }
    else
        {
            return (
                <button onClick={() => setVisible(true)}>
                    show
                </button>
            )
        }
    }

    const getPlanet = (id) => {
    const _api = 'https://swapi.dev/api/planets/'
    return fetch(`${_api}${id}`)
        .then(res => res.json())
        .then(data => data)
    }

    const useRequest = (request) => {
        const [ dataState, setDataState] = useState(null)

        useEffect(() => {
            let cancel = false
            request().then(data => !cancel && setDataState(data))
            return () => cancel = true
        }, [request])
        return dataState
    }

    const usePlanetInfo = (id) => {
    const request = useCallback( () => getPlanet(id), [ id ] )
        return useRequest(request)
    }

    const PlanetInfo = ({id}) => {

    const data = usePlanetInfo(id)

    return (
        <div>{id} - { data && data.name}</div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));