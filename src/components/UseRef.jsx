import { useRef, useState } from "react";

const UseRef = () => {

    // const [valor, setValor] = useState(0)
    const valor = useRef(0);

    return (
        <>
            {/* <button onClick={() => setValor(valor+1)}>+1</button> */}
            <button onClick={() => valor.current += 1}>+1</button>
            <h1>O valor é {valor.current}</h1>
        </>
    );
}
 
export default UseRef;