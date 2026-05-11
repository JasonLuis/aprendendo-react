import Profile from "./Profile";

// Em um aplicativo React, cada elemento da interface do usuário é um componente.
// Os componentes React são funções JavaScript comuns, exceto pelo seguinte:
// Seus nomes sempre começam com letra maiúscula.
// Eles retornam marcação JSX.

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}