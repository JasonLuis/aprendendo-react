import { useEffect, useRef, useState } from "react";

const ExUseRef = () => {
    const [count, setCount] = useState<number>(0);

    const previusCount = useRef(0);

    useEffect(() => {
        console.log("cocontunt", count);
        previusCount.current = count;
    }, [count]);

    const previous = previusCount.current;

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {previous}</p>

            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
};

export default ExUseRef;

/**
 * O que está acontecendo?
 * Porque o useEffect executa DEPOIS da renderização
 * O valor do ref:
    é atualizado depois
    mas a renderização atual já aconteceu
   Então ele naturalmente vira:
    o valor anterior.
 * 
 * 
 * 
 */