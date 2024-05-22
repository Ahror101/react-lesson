import React, {useState} from "react";

export default function Counter() {

    const [count, setCount] = useState(0)

    const [users, setUsers] = useState ([
        {id: 1, name: "Alisher", age: 12},
        {id: 2, name: "Islom", age: 17},
        {id: 3, name: "Adham", age: 22},
        {id: 4, name: "Shohruh", age: 32},
        {id: 5, name: "Firdavs", age: 18},
        {id: 6, name: "Abror", age: 23},
    ])
    console.log(users);

    function plus () {
        setCount(count +1)
    }
    function minus () {
        setCount(count -1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <div className="col-4">
                <div className="card text-center">
                    <div className="card-body"></div>
                    <h1> {count}</h1>
                    <div className="btns d-flex ">
                    <button onClick={plus} className="btn btn-primary w-50"> Plus </button>
                    <button onClick={minus} className="btn btn-danger w-50"> Minus </button>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <table className="table">
                    
                </table>
            </div>
        </div>
    )
}