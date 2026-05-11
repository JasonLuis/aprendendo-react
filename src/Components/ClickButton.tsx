import { useState } from "react";

export default function ClickButton() {

    const [count, setCount] = useState(0);

    return (
        <div style={{display: 'flex', gap: '5px'}}>
            <h4>foi clicado {count}x</h4>
            <button onClick={() => {setCount(count + 1)}}>OnClick</button>
        </div>
    )
}