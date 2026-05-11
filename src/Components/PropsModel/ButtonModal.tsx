import { useState } from "react";
import { ModalStyle } from "./ModalStyle";

export default function ButtonModal() {
    const [open, setOpen] = useState<boolean>(false)

    const toggle = () => {
        setOpen((prev) => !prev);
    }

    return (
        <div>
            <button onClick={toggle}>toogle do pai</button>

            <ModalStyle open={open} toggle={toggle}/>
        </div>
    );
}