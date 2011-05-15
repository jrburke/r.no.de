My Joyent no.de, r.no.de. Uses the
[r.js RequireJS adapter](https://github.com/jrburke/r.js) that allows RequireJS
to run in Node. The latest r.js will try to load a "main.js" file if no other
argument is passed to it, which is useful for the no.de environment.

The no.de service assumes the server script is called server.js, so to use the
RequireJS adapter on no.de:

* [Get r.js](https://github.com/jrburke/r.js/tree/master/dist). Needs to be in
a RequireJS release greater than 0.22.0.
* mv r.js server.js
* Create a main.js as a sibling to server.js.
* Put your app logic in main.js

Then you are all set! This project is an example of that approach.
