import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const initialState = [
        {
            "_id": "68e8f7374fs6859df1ae485404",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "title",
            "description": "description blalalal",
            "tag": "personal",
            "status": "incomplete",
            "date": "2025-10-10T12:08:23.380Z",
            "__v": 0
        },
        {
            "_id": "68ea36368sf2c94a81260fdeb8",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "Holliday plan",
            "description": "Enjoy the summer vacations",
            "tag": "trip",
            "status": "incomplete",
            "date": "2025-10-11T10:49:26.684Z",
            "__v": 0
        },
        {
            "_id": "68ea40e90cbge68394e02c90ed",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "Holliday plan",
            "description": "Enjoy the summer vacations",
            "tag": "trip",
            "status": "incomplete",
            "date": "2025-10-11T11:35:05.134Z",
            "__v": 0
        },
        {
            "_id": "68e8fsf73746859df1ae485404",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "title",
            "description": "description blalalal",
            "tag": "personal",
            "status": "incomplete",
            "date": "2025-10-10T12:08:23.380Z",
            "__v": 0
        },
        {
            "_id": "68ea363682afs94a81260nffdeb8",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "Holliday plan",
            "description": "Enjoy the summer vacations",
            "tag": "trip",
            "status": "incomplete",
            "date": "2025-10-11T10:49:26.684Z",
            "__v": 0
        },
        {
            "_id": "68ea40e90cbd68394e02c90fned",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "Holliday plan",
            "description": "Enjoy the summer vacations",
            "tag": "trip",
            "status": "incomplete",
            "date": "2025-10-11T11:35:05.134Z",
            "__v": 0
        },
        {
            "_id": "68e8f737468fes59df1ae485dnd404",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "title",
            "description": "description blalalal",
            "tag": "personal",
            "status": "incomplete",
            "date": "2025-10-10T12:08:23.380Z",
            "__v": 0
        },
        {
            "_id": "68ea363zvh682dvzc94a81260tefdeb8",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "Holliday plan",
            "description": "Enjoy the summer vacations",
            "tag": "trip",
            "status": "incomplete",
            "date": "2025-10-11T10:49:26.684Z",
            "__v": 0
        },
        {
            "_id": "68ea40e90csdfb68394e02c9t0ed",
            "user": "68e8ccad7157ae6d771763f5",
            "title": "Holliday plan",
            "description": "Enjoy the summer vacations",
            "tag": "trip",
            "status": "incomplete",
            "date": "2025-10-11T11:35:05.134Z",
            "__v": 0
        },
    ]
const [notes, setNotes] = useState(initialState)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;