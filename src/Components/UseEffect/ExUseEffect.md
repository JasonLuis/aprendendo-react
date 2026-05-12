# useEffect no React

O `useEffect` é um hook do React utilizado para executar efeitos colaterais dentro de componentes funcionais.

---

# O que são efeitos colaterais?

São operações que acontecem fora do fluxo normal da renderização.

Exemplos:
- chamadas API
- timers
- eventos
- localStorage
- websocket
- manipulação do DOM

---

# Estrutura básica

```tsx
useEffect(() => {
  // efeito
}, [dependencias]);
```

---

# Exemplo simples

```tsx
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count mudou:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

# Como funciona?

Sempre que:
- `count` mudar

o `useEffect` será executado.

---

# Comparação com Vue

## Vue

```ts
watch(count, () => {
  console.log(count.value)
})
```

## React

```tsx
useEffect(() => {
  console.log(count);
}, [count]);
```

---

# useEffect sem dependências

```tsx
useEffect(() => {
  console.log("renderizou");
});
```

Executa:
- em toda renderização

---

# useEffect com array vazio

```tsx
useEffect(() => {
  console.log("montou");
}, []);
```

Executa:
- apenas uma vez

---

# Equivalente no Vue

## Vue

```ts
onMounted(() => {})
```

## React

```tsx
useEffect(() => {}, [])
```

---

# Cleanup Function

O `useEffect` pode retornar uma função de limpeza.

```tsx
useEffect(() => {
  console.log("montou");

  return () => {
    console.log("desmontou");
  };
}, []);
```

---

# Equivalente no Vue

## Vue

```ts
onUnmounted(() => {})
```

---

# Exemplo com timer

```tsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("timer");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

---

# Por que o cleanup é importante?

Evita:
- memory leaks
- timers infinitos
- eventos duplicados
- conexões abertas

---

# Exemplo real com API

```tsx
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

Executa:
- quando o componente monta

---

# Fluxo mental do React

1. Estado muda
2. Componente renderiza
3. Tela atualiza
4. useEffect executa

---

# Diferença importante entre Vue e React

## Vue
A reatividade acontece nos valores.

## React
A reatividade acontece na renderização do componente.

---

# Problema clássico: loop infinito

```tsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

Isso causa:
- alteração de estado
- rerender
- novo effect
- loop infinito

---

# Quando usar useEffect?

Use para:
- API
- eventos
- timers
- subscriptions
- sincronizações externas

---

# Quando NÃO usar useEffect

Errado:

```tsx
useEffect(() => {
  setFullName(name + surname);
}, [name, surname]);
```

Melhor:

```tsx
const fullName = name + surname;
```

---

# Resumo

## useEffect
Executa efeitos colaterais após renderizações.

## useMemo
Memoriza cálculos pesados.

---

# Comparação Vue x React

| Vue | React |
|---|---|
| watch | useEffect |
| onMounted | useEffect([], []) |
| onUnmounted | cleanup function |
| computed | useMemo |