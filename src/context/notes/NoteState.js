import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const s1 = {
        "name": "Pankaj",
        "age": "22"
    }
    const [state, setstate] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "Sahil",
                "age": "20"
            })
        }, 2000);
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;