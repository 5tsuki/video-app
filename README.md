# Video APP Server

This server exposes a catch-all endpoint that returns a video file at a certain path.

## Why

Mostly because I want to watch videos in [Watch2gether](https://w2g.tv/) with a video that isn't readily available online.

## How to set up?

1. Pull the project
2. Put any video in the `/video` folder
3. `npm run start`
4. Check if the video is hosted @ `localhost:3000/video/<video_filename>.mp4` ([example](https://localhost:3000/video/baku_btch.mp4))
5. Copy the tunneling service executable into the project root folder
6. Use a [tunneling service](#tunneling-services) to tunnel online HTTP traffic to the local `3000` port
7. The tunneling service should return a publicly accessible URL
8. If the video is showing, you can use it as a URL for W2G, if not idk.

### Tunneling services

- [ngrok](https://ngrok.com/)
- [loophole](https://loophole.cloud/)
