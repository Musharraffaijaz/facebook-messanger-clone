import { useEffect, useState } from 'react'
import {Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css'
import Message from './Message';
// // import { db } from './firebase';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from './firebase'


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{username: 'Musharaf: ', text: 'hey Guys'},]);  //   {username: 'Musharaf ', message: 'hey Guys'},
  const [username, setUsername] = useState('')

  //useState = a variable in REACT JS.
  //useEffect = a run code on a condition!
  useEffect(() => {
    const messageRef = collection(db, 'message');
    const messagesQuery = query(messageRef, orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(messagesQuery, docs => {
      docs.forEach(doc => {})
    })
    return () => {
      unsub();
    }
  }, [])

  useEffect(() => {
    //the code which is runned because of the codition called [] in the square brackets!!
    // const username =  prompt("Please enter your username")
    setUsername(prompt("Please enter your username"))

  }, []) //[] is the dependancy or thye conditionm

  //so what happens is every time we change the input our code in the useEffect runs.



  console.log(input)
  console.log(messages)

  const sendMessage = (event) => {
    event.preventDefault();
    // db.collection('message').add({
    //   message: input,
    //   username: username,
    //   timestamp:firebase.firestore.FeildValue.serverTimestamp()
    // })
    setMessages([...messages, { username: username, text: input }]);
    setInput('')
  }

  return (
    <div className='App'>
      <h2>Hello {username} </h2>
      <form className='app_form'>

        <FormControl className='app_formcontrol'>
          {/* <InputLabel > Enter a Message Here</InputLabel> */}
          <Input className='app_input' placeholder='Enter a Message...' value={input} onChange={(event) => setInput(event.target.value)} />
          <Button className='app_iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send</Button>
        </FormControl>

      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }

    </div>
  )
}



export default App
