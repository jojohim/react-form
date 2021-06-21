import {Note} from "./note.js";

export function Notes(props){
    console.log(props);
    return(
    <article className="notesContainer">
        {props.notes.map((item) => (
            <Note {...item} key={item._id}/>
        ))}
    </article>
    );
}