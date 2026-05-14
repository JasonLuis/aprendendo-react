import { useState } from "react";
import Child from "./Child";

/*
Problema

Toda vez que o pai renderiza:

handleClick é recriada
o filho recebe nova referência
o filho rerenderiza

Mesmo que nada importante tenha mudado.

Solução com useCallback

Agora:
a referência da função permanece igual.
*/

const ExUseCallback = () => {
    const [count, setCount] = useState(0);

  function handleClick() {
    alert("clicou");
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <Child onClick={handleClick} />
    </>
  );
}

export default ExUseCallback;

/*
Regra mental perfeita

useMemo
Memoriza VALOR.

useCallback
Memoriza FUNÇÃO.

useRef
Persiste valor sem rerender.

useEffect
Executa após renderização.
*/