# PI Automation

This server runs on a raspberry pi and controls various home automation functions.

## Usage
* Make sure `pm2` is installed and configured on the pi
* `npm i` inside `./server`
* `pm2 ./server/index.js` to run the server. This will server `client/build`
* Server should be running on port 3000

## Development
* `cd client` and `yarn start` to start the frontend on `3001`
* `cd server` and `yarn start` to start the backend on `3000`

## Deploy
* `yarn build` to build the frontend
* commit and push
* `git pull` on the pi
* restart the server process using `pm2 restart pi-automation`