import { useEffect, useState } from "react";

const ExUseEffect = () => {

    const [watchNumber, setWatchNumber] = useState<number>(0);

    // Equivalente ao Watcher do Vue
    useEffect(() => {
        alert(`Alterção do 'watchNumber' ${watchNumber}`);
    }, [watchNumber])

    // Equivalente ao onMounted do Vue
    useEffect(() => {
        console.log("componente montado");
    }, []);

    // Equivalente ao unMounted do Vue
    useEffect(() => {
        console.log("montou");

        return () => {
            console.log("desmontou");
        };
    }, []);

    return (
        <div>
            <h3>Exemplo de useEffect</h3>
            <p>{watchNumber}</p>
            <button onClick={() => setWatchNumber(watchNumber + 1)}>Alteração de numero</button>
            <br />

        </div>
    );
}

export default ExUseEffect;