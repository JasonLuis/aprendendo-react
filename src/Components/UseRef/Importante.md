# Por que o useRef guarda o valor anterior?

Considere o seguinte código:

```tsx
useEffect(() => {
    previousCount.current = cont;
}, [cont]);
```

O motivo do `previousCount.current` guardar o valor anterior é porque o `useEffect` executa somente APÓS a renderização.

---

# Fluxo do React

O React funciona da seguinte forma:

1. Estado muda
2. Componente renderiza
3. Tela atualiza
4. useEffect executa

---

# Exemplo completo

```tsx
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [cont, setCount] = useState(0);

  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = cont;
  }, [cont]);

  return (
    <div>
      <p>Current Count: {cont}</p>
      <p>Previous Count: {previousCount.current}</p>

      <button onClick={() => setCount(cont + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

---

# Primeira renderização

Valores:

```txt
cont = 0
previousCount.current = 0
```

Tela:

```txt
Current Count: 0
Previous Count: 0
```

---

# Após renderizar

O `useEffect` executa:

```tsx
previousCount.current = 0;
```

Nada muda visualmente.

---

# Primeiro clique

```tsx
setCount(1)
```

---

# Nova renderização

ANTES do effect rodar:

```txt
cont = 1
previousCount.current = 0
```

Tela:

```txt
Current Count: 1
Previous Count: 0
```

---

# Depois da renderização

Agora o effect executa:

```tsx
previousCount.current = 1;
```

Mas:
- `useRef` não rerenderiza o componente.

Então a tela continua igual.

---

# Próximo clique

Nova renderização:

```txt
cont = 2
previousCount.current = 1
```

Tela:

```txt
Current Count: 2
Previous Count: 1
```

---

# O segredo

O `useEffect` sempre executa APÓS a renderização.

Então:
- durante a renderização atual
- o ref ainda possui o valor anterior.

Isso faz com que o `useRef` funcione perfeitamente para armazenar valores anteriores.

---

# Importante

`useRef`:
- persiste valores entre renderizações
- NÃO causa rerender.

---

# Resumo mental

## useState

Atualiza interface e rerenderiza.

---

## useRef

Guarda valores sem rerenderizar.

---

## useEffect

Executa após a renderização.

---

# Comparação mental com Vue

No Vue, a reatividade acontece nos valores.

No React, a reatividade acontece através das renderizações do componente.

---

# Frase importante

```txt
useEffect sempre executa APÓS a renderização.
```

Essa frase ajuda a entender:
- previous state
- APIs
- timers
- sincronizações
- ciclo de vida no React.