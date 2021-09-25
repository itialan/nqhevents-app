import React from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailed from '../../features/events/eventDetailed/EventDetailed';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import './style.css';

const App = () => {
  return (
    <React.Fragment>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route exact path='/events/:id' component={EventDetailed} />
              <Route
                exact
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </React.Fragment>
  );
};

export default App;
