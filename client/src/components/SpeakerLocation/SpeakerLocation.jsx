import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class SwitchLabels extends React.Component {
  componentDidMount() {
    
  }
  state = {
    down: true,
    up: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="subheading" component="h2">
            QLS Amp Speakers
          </Typography>
          <FormGroup column>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.down}
                  onChange={this.handleChange('down')}
                  value="down"
                  color="primary"
                />
              }
              label="Downstairs"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.up}
                  onChange={this.handleChange('up')}
                  value="up"
                  color="primary"
                />
              }
              label="Outside"
            />
          </FormGroup>
        </CardContent>
      </Card>
    );
  }
}

export default SwitchLabels;
