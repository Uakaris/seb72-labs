import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import MailboxList from './MailboxList';
import NavBar from './NavBar';
import MailboxDetails from './MailboxDetails';
import MailboxForm from './MailboxForm'
import '../index.css'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <main><h1>Post Office</h1></main> } />
        <Route path="/mailboxes" element={ <MailboxList mailboxes={ mailboxes } />} />
        <Route path="/mailboxes/:mailboxId" element={ <MailboxDetails mailboxes={ mailboxes } />} />
        <Route path="/new-mailbox" element={ <MailboxForm addBox={ addBox } />}/>
      </Routes>
    </>
  );
};

export default App;