import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import './style.css';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <React.Fragment>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </React.Fragment>
  );
};

export default App;
