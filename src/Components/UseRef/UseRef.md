# useRef no React

O `useRef` é um hook do React utilizado para criar uma referência mutável que persiste entre renderizações sem causar rerender.

---

# Estrutura básica

```tsx
const ref = useRef(valorInicial);
```

---

# O que o useRef retorna?

```tsx
{
  current: valor
}
```

---

# Exemplo simples

```tsx
import { useRef } from "react";

export default function App() {
  const countRef = useRef(0);

  function increment() {
    countRef.current++;

    console.log(countRef.current);
  }

  return (
    <button onClick={increment}>
      Incrementar
    </button>
  );
}
```

---

# Importante

Alterar:

```tsx
countRef.current++
```

NÃO rerenderiza o componente.

---

# Diferença entre useState e useRef

## useState

- altera interface
- rerenderiza componente

```tsx
const [count, setCount] = useState(0);
```

---

## useRef

- guarda valor
- NÃO rerenderiza componente

```tsx
const countRef = useRef(0);
```

---

# Comparação Vue x React

## Vue

```ts
const count = ref(0)
```

O valor é reativo.

---

## React

```tsx
const countRef = useRef(0)
```

O valor NÃO é reativo.

---

# useRef no React se aproxima mais disso no Vue

```ts
let count = 0
```

Mas persistindo entre renderizações.

---

# Uso mais comum: acessar elementos DOM

```tsx
import { useRef } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focar input
      </button>
    </div>
  );
}
```

---

# Casos comuns de uso

- focus em inputs
- scroll
- timers
- websocket
- canvas
- integração com bibliotecas externas
- armazenar valores anteriores

---

# Exemplo: armazenar valor anterior

```tsx
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Atual: {count}</p>
      <p>Anterior: {previousCount.current}</p>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

---

# Exemplo: guardar timer

```tsx
const timerRef = useRef<number | null>(null);
```

---

# Exemplo: guardar websocket

```tsx
const socketRef = useRef<WebSocket | null>(null);
```

---

# Exemplo: guardar elemento HTML

```tsx
const divRef = useRef<HTMLDivElement>(null);
```

---

# Regra mental importante

## useState

"Quero atualizar a interface."

---

## useRef

"Quero guardar um valor sem rerenderizar."

---

# Erro comum

Fazer isso:

```tsx
countRef.current++
```

e esperar atualização na tela.

Não funciona porque:
- `useRef` não é reativo.

---

# Diferença filosófica entre Vue e React

## Vue ref()

Faz parte da reatividade.

---

## React useRef()

É apenas uma referência mutável persistente.

---

# Resumo

| Hook | Objetivo |
|---|---|
| useState | Estado reativo |
| useMemo | Memorizar cálculos |
| useEffect | Efeitos colaterais |
| useRef | Persistir valores sem rerender |