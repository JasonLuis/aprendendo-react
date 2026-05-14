import React from "react";
interface Props {
    onClick: () => void
}

/*
useCallback sozinho NÃO faz milagre
O ganho aparece principalmente com:
React.memo()
*/

// Filho memoizado
const Child = React.memo(({ onClick }: Props) => {
    console.log("renderizou filho");

    return (
        <button onClick={onClick}>
            Filho
        </button>
    );
})

export default Child;

/*
Agora sim

Se:
- a função não mudar
- props não mudarem
o filho:
- NÃO rerenderiza.
*/

/**
O que React.memo faz?

Ele memoriza:

a renderização do componente

Se as props:

não mudarem

o componente:

não rerenderiza.
 */