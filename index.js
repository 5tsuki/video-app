const PORT = 3000 || process.env.PORT;
const express = require('express');
const app = express();

app.use(express.static('video'));

// place a video in the video folder and access it via http://localhost:3000/<video_filename>.mp4
// ex. http://localhost:3000/baku_btch.mp4

app.get('*', (req, res) => {
  const { path } = req;
  res.set('Content-Type', 'video/mp4');
  res.sendFile(__dirname + path);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
