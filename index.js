const express = require('express')
const Gpio = require('onoff').Gpio;
const app = express()
const relayGroup1 = new Gpio(2, 'out');
const relayGroup1 = new Gpio(3, 'out');

app.get('/speakers/down', (req, res) => {
  relayGroup1.write(Gpio.LOW)
  relayGroup2.write(Gpio.HIGH)
  res.send('down')
})

app.get('/speakers/up', (req, res) => {
  relayGroup1.write(Gpio.HIGH)
  relayGroup2.write(Gpio.LOW)
  res.send('up')
})

app.get('/speakers/both', (req, res) => {
  relayGroup1.write(Gpio.LOW)
  relayGroup2.write(Gpio.LOW)
  res.send('both')
})

app.listen(3000)