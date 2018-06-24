import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import http from 'axios'

class SpeakersLocation extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom color="textSecondary" component="h2">
            QLS Amplifier
          </Typography>
          <Typography component="p">
            Change the speaker output
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={ () => http.get('/speakers/down') }>
            Down
          </Button>
          <Button size="small" color="primary" onClick={ () => http.get('/speakers/up') }>
            Outside
          </Button>
          <Button size="small" color="primary" onClick={ () => http.get('/speakers/both') }>
            Both
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default SpeakersLocation;
