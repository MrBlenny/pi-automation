import React, { Component } from 'react';
import './App.css';
import SpeakerLocation from './components/SpeakerLocation'
import Toolbar from './components/Toolbar'
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Grid container justify="center" style={{ padding: '15px' }}>
          <Grid item xs={12} style={{ maxWidth: '600px' }}>
            <SpeakerLocation />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
