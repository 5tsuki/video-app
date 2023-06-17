const express = require('express');
const http = require('http');
const serveIndex = require('serve-index');

const PORT = 3000 || process.env.PORT;

const app = express();

// place a video in the video folder and access it via http://localhost:3000/<video_filename>.mp4
// ex. http://localhost:3000/baku_btch.mp4

app.use(["/"], express.static('video'), serveIndex('video', { 'icons': true }))

// app.get('*', (req, res) => {
//   const { path } = req;
//   res.set('Content-Type', 'video/mp4');
//   res.sendFile(__dirname + path);
// });

http.createServer(app).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
