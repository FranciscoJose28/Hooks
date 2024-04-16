import { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {

    const [valor, setValor] = useState(0)
    const [valor2, setValor2] = useState(0)
    useEffect(() => {
        console.log("chamado todas as vezes");
    })
    useEffect(() => {
        console.log("chamado apenas uma vez");
    }, [])
    useEffect(() => {
        console.log("chamado toda vez que a dependência sofrer alterações");
    }, [valor])
    return (
        <>
            <button onClick={() => setValor(valor + 1)}>+1</button>
            <button onClick={() => setValor2(valor + 2)}>+2</button>
        </>
    );
}

export default UseEffect;