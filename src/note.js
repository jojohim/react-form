export function Note(props){
    return (
        <div className="note">
            <div className="noteStamp">
                <img src="sent-icon.svg" alt="message sent icon in blue" width="22px" height="25px" />
                <p className="noteHeader">{props.name} at {props.date}</p>
            </div>
        <p className="noteText">{props.text}</p>
      </div>
    )
}