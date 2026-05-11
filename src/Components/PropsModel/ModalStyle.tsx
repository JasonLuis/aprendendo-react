interface Props {
    open: boolean;
    toggle: () => void;
}

export function ModalStyle({ open, toggle }: Props) {
    return (
        <div>
            <p>
                Status Modal: {open ? 'Aberto' : 'Fechado'}
            </p>

            <button onClick={toggle}>
                Toggle do filho
            </button>
        </div>
    )
}