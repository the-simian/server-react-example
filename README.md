#Server-React-Example

Currently based in part on Pete Hunt's react-server-rendering example, but updated to include react-dom.

This is subject to change as I improve on ways to build the project.

For example:
- I am not happy with starting, waiting, stopping
- I am not happy with the current jsx integration
- gulp is love, gulp is life
- I want ice cream.


Current instructions.

Run `npm install` then `npm start`. Now. Wait a little bit. Its busy making the broswer-bundle.js file. Is it done? ok good, then kill it.

You can `open index.html`, wait a few seconds and see the app. Or you can `node server.js` and open `http://localhost:4000/` to see
the server rendered version. 

Note the better performance (due to simulated JS load time) and if you edit the text field the JS won't
blow it away when it loads.
