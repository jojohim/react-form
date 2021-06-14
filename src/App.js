import {useState, useRef} from "react";
import './App.css';
import {headers} from "./settings.js"

function App() {
  return (
    <div className="App">
    <h1>Message to Staff</h1>
    <MessageForm />
    </div>

  );
}

function MessageForm(props){

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [message, setMessage] = useState("");
  const form = useRef(null);

  function onSubmit(e){
    console.log(e);
    e.preventDefault();
    post({
      text: message,
      name: "Zuz",
      date: `${new Date().getDate()} ${months[new Date().getMonth()]}`,
    });
  }
  return (
    <section className="messagForm">
    <form onSubmit={onSubmit} ref={form}>
    <label for="message">Message</label>
  <textarea rows="6" placeholder="Your Message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
  <input type="submit" value="send"></input>
    </form>
    </section>
  );
}

function post(data){
  console.log(data);
    const postData = JSON.stringify(data);
    fetch("https://kea2021-6773.restdb.io/rest/foobar-notes", {
      method: "post",
      headers: headers,
      body: postData,
    })
      .then((res) => res.json())
}

export default App;
