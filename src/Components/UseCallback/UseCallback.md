# useCallback no React

O `useCallback` é um hook do React utilizado para memorizar funções entre renderizações.

---

# Estrutura básica

```tsx
const fn = useCallback(() => {
  // função
}, [dependencias]);
```

---

# O que o useCallback faz?

Ele evita que uma função seja recriada a cada renderização.

---

# Importante

No React, funções são recriadas sempre que o componente renderiza.

Exemplo:

```tsx
export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("clicou");
  }

  return (
    <button onClick={handleClick}>
      {count}
    </button>
  );
}
```

Toda renderização cria:
- uma nova referência para `handleClick`.

---

# Comparação com useMemo

## useMemo

Memoriza valores.

```tsx
const value = useMemo(() => {
  return heavyCalculation();
}, []);
```

---

## useCallback

Memoriza funções.

```tsx
const handleClick = useCallback(() => {
  console.log("clicou");
}, []);
```

---

# Quando o problema aparece?

Principalmente ao passar funções para componentes filhos.

---

# Exemplo sem useCallback

## Componente Pai

```tsx
export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("clicou");
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
```

---

## Componente Filho

```tsx
function Child({ onClick }) {
  console.log("renderizou filho");

  return (
    <button onClick={onClick}>
      Filho
    </button>
  );
}
```

---

# Problema

Toda vez que o pai renderiza:
- `handleClick` é recriada
- o filho recebe nova referência
- o filho rerenderiza

Mesmo que nada importante tenha mudado.

---

# Solução com useCallback

```tsx
const handleClick = useCallback(() => {
  console.log("clicou");
}, []);
```

Agora:
- a referência da função permanece a mesma.

---

# useCallback sozinho não resolve tudo

Ele normalmente é usado junto com:

```tsx
React.memo()
```

---

# Exemplo com React.memo

```tsx
const Child = React.memo(({ onClick }) => {
  console.log("renderizou filho");

  return (
    <button onClick={onClick}>
      Filho
    </button>
  );
});
```

---

# Agora o React consegue evitar rerenders

Se:
- props não mudarem
- referência da função permanecer igual

o componente filho:
- não rerenderiza.

---

# Curiosidade importante

Internamente:

```tsx
useCallback(fn, deps)
```

é praticamente equivalente a:

```tsx
useMemo(() => fn, deps)
```

---

# Quando usar useCallback?

Use principalmente quando:
- passar funções para componentes filhos memoizados
- otimizar listas grandes
- evitar rerenders desnecessários
- manter referências estáveis

---

# Quando NÃO usar

Evite usar em:
- componentes simples
- funções pequenas sem impacto de performance

Exemplo desnecessário:

```tsx
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

em componentes pequenos.

---

# React moderno recomenda

1. Faça funcionar primeiro.
2. Otimize depois se necessário.

---

# Comparação com Vue

No Vue:
- funções em templates normalmente não geram tanta preocupação.

No React:
- referências de funções importam bastante
- principalmente com memoização.

---

# Resumo mental

## useMemo

Memoriza VALORES.

---

## useCallback

Memoriza FUNÇÕES.

---

## useRef

Persiste valores sem rerenderizar.

---

## useEffect

Executa efeitos após renderização.