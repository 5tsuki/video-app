# Video APP Server

This server exposes a catch-all endpoint that returns a video file at a certain path.

## Why

Mostly because I want to watch videos in [Watch2gether](https://w2g.tv/) with a video that isn't readily available online.

## How to set up?

1. Pull the project
2. Put any video in the `/video` folder
3. `npm run start`
4. Check if the video is hosted @ `localhost:3000/video/<video_filename>.mp4` ([example](https://localhost:3000/video/baku_btch.mp4))
5. Use [ngrok](https://ngrok.com/download) to tunnel online HTTP traffic to the local `3000` port
6. `./ngrok http 3000`
7. ngrok should show something like this in the terminal:
   1. `Forwarding https://<id>.<region>.ngrok.io -> http://localhost:3000`
8. Navigate to `https://<id>.<region>.ngrok.io/video/<video_filename>.mp4`
9. If the video is showing, you can use it as a URL for W2G, if not idk.
