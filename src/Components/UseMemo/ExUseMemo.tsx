import { useMemo, useState } from "react";

export default function ExUseMemo() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0);

    const result = useMemo(() => {
        console.log("calculando...");

        return 1000000 * 5000 + count - count2;
    }, [count, count2]) // entre [] é necessario declarar a variavel para o useMemo rastrear a variavel

    return (
        <div>
            <p>{result}</p>
            <p>Valor de count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui para count!</button>
            <button onClick={() => setCount2(count2 + 1)}>Clique aqui para count2!</button>
        </div>
    )
}

// O useMemo é provavelmente o hook que mais lembra o computed do Vue.js.
/*
Mas existe uma diferença MUITO importante:

computed → reatividade automática
useMemo → otimização de performance

Essa diferença muda bastante a forma de pensar.
O Vue:
rastreia dependências automaticamente
recalcula quando necessário

No React:

const fullName = useMemo(() => {
  return `${firstName} ${lastName}`;
}, [firstName, lastName]); // precisa informar a dependências manualmente

Você precisa informar dependências manualmente
*/

/*
    Quando NÃO usar useMemo?
    NÃO faça:
    const fullName = useMemo(() => {
        return `${name} ${surname}`;
    }, [name, surname]);

    Isso é inútil.
    - String pequena:
    - não custa performance
*/

/*
    Quando usar de verdade?
    Use useMemo para:

    filtros grandes
    listas enormes
    cálculos caros
    transformações pesadas
    evitar rerenders custosos
    Exemplo muito comum:
    const filteredUsers = useMemo(() => {
    return users.filter(user =>
        user.name.includes(search)
    );
    }, [users, search]);
    Muito útil quando:
    - lista é grande
    - renderização é pesada
*/

/**
 * Diferença FILOSÓFICA importante
    Vue:
        - computed é parte da reatividade.

    React:
        - useMemo é otimização.

    O React NÃO precisa dele para funcionar corretamente.
    Ele serve para:
        - evitar processamento desnecessário
 * 
 * 
 */

/**
 * Regra prática
    Pergunta:
    “Esse cálculo é pesado o suficiente para justificar memoização?”
    Se:
        NÃO → use variável normal
        SIM → useMemo
 * 
 * 
 * 
 */