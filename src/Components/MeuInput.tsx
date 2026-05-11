interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function MeuInput({value, onChange}: InputProps) {
    return (
        <input type="text"  value={value} onChange={(e) => onChange(e.target.value)}/>
    )
}