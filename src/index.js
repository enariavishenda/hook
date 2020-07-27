import ReactDOM from "react-dom";
import React, { useState, useEffect} from "react";

const App = () => {

    const [value, setValue] = useState(0)
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

    const PlanetInfo = ({id}) => {

        const [ label, setLabel] = useState('Noname')

        const _api = 'https://swapi.dev/api/planets/'
        fetch(`${_api}${id}`)
            .then(res => res.json())
            .then(data => console.log(data.name))



        // useEffect(() => {
        //     setLabel(() => {
        //         return {
        //             label: namePlanet
        //     }
        // }, [id])})

    return (
        <div>{id} - {label}</div>
    )
}
ReactDOM.render(<App />,document.getElementById('root'));