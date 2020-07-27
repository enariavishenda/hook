import ReactDOM from "react-dom";
import React, { useContext } from "react";

const MyContext = React.createContext()

const App = () => {
    return (
        <MyContext.Provider value='Hello'>
            <Child />
        </MyContext.Provider>
    )
}
const Child = () => {

    const value = useContext(MyContext)

    return <p> {value} </p>
}

ReactDOM.render(<App />,document.getElementById('root'));