const express = require('express')
const Gpio = require('onoff').Gpio;
const { join } = require('path')

const app = express()

// Mock GPIO if required
const GpioMocked = (pin, type) => {
  if (Gpio.accessible) {
    return new Gpio(pin, type);
  } else {
    return {
      writeSync: () => {}
    }
  }
}

// Create GPIO groups
const relayGroup1 = GpioMocked(2, 'out');
const relayGroup2 = GpioMocked(3, 'out');

app.use(express.static(join(__dirname, '../client/build')))

app.get('/speakers', (req, res) => {
  res.json(state.speakers)
})

app.get('/speakers/down', (req, res) => {
  relayGroup1.writeSync(Gpio.LOW)
  relayGroup2.writeSync(Gpio.LOW)
  res.json({
    message: 'Speakers set to downstairs', 
  })
})

app.get('/speakers/up', (req, res) => {
  relayGroup1.writeSync(Gpio.HIGH)
  relayGroup2.writeSync(Gpio.LOW)
  res.json({
    message: 'Speakers set to upstairs deck', 
  })
})

app.get('/speakers/both', (req, res) => {
  relayGroup1.writeSync(Gpio.LOW)
  relayGroup2.writeSync(Gpio.HIGH)
  res.json({
    message: 'Speakers set inside and outside', 
  })
})

console.log('Server Running on port 3000')
app.listen(3000)