import {useState, useRef, useEffect} from "react";
import './App.css';
import {headers} from "./settings.js"
import {Notes} from "./notes.js"

function App() {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState("");
  const form = useRef(null);

  useEffect(getNotes, []);

function getNotes(){
 fetch("https://kea2021-6773.restdb.io/rest/foobar-notes", {
    method: "get",
    headers: headers,
  })
  .then((res) => res.json())
  .then((data) => {
    let sortedNotes = sortData(data);
    setNotes(sortedNotes);
  })
}

function sortData(data){
  let sortedNotes = data.sort((a,b) => b.timestamp - a.timestamp);
  return sortedNotes;
}

function onSubmit(e){
  e.preventDefault();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = new Date().getDate();
  let month = months[new Date().getMonth()];
  let minutes = String(new Date().getMinutes()).padStart(2, "0");
  let hours = new Date().getHours();

    post({
      text: message,
      name: "Zuz",
      date: `${day} ${month} at ${hours}:${minutes}`,
      timestamp: Date.now(),
    });
}

function post(data){
    const postData = JSON.stringify(data);
    fetch("https://kea2021-6773.restdb.io/rest/foobar-notes", {
      method: "post",
      headers: headers,
      body: postData,
    })
      .then((res) => res.json())
}


return (
  <div className="App">
  <h1 className="coloredHeader">Notes</h1>
  <Notes notes={notes}/>
  <section className="messageForm">
    <form onSubmit={onSubmit} ref={form}>
      <textarea rows="6" placeholder="type your message..." id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      <input type="submit" value="submit"></input>
    </form>
  </section>
  </div>
);

}
export default App;
