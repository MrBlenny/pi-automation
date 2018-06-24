const express = require('express')
const Gpio = require('onoff').Gpio;
const app = express()
const relayGroup1 = new Gpio(2, 'out');
const relayGroup2 = new Gpio(3, 'out');

app.get('/', (req, res) => {
  res.send(
    `<html>
      <table>
        <tr><td><a href="/speakers/down">speakers/down</a></td><td>Turns the downstairs speakers on</td></tr>
        <tr><td><a href="/speakers/up">speakers/up</a></td><td>Turns the upstairs speakers on</td></tr>
        <tr><td><a href="/speakers/both">speakers/both</a></td><td>Turns the both sets of speakers on</td></tr>
      </table>
    </html>`
  )
})

app.get('/speakers/down', (req, res) => {
  relayGroup1.writeSync(Gpio.LOW)
  relayGroup2.writeSync(Gpio.HIGH)
  res.send('down')
})

app.get('/speakers/up', (req, res) => {
  relayGroup1.writeSync(Gpio.HIGH)
  relayGroup2.writeSync(Gpio.LOW)
  res.send('up')
})

app.get('/speakers/both', (req, res) => {
  relayGroup1.writeSync(Gpio.LOW)
  relayGroup2.writeSync(Gpio.LOW)
  res.send('both')
})

console.log('Server Running on port 3000')
app.listen(3000)