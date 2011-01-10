My Joyent no.de, r.no.de. Uses the [r.js RequireJS adapter for Node](http://requirejs.org/docs/node.html). The latest r.js will try to load a "main.js" file if no other argument is passed to it, which is useful for the no.de environment.

The no.de service assumes the server script is called server.js, so to use the RequireJS adapter on no.de:

* [Get r.js](http://requirejs.org/docs/download.html#node). Needs to be in a RequireJS release greater than 0.22.0. Until the next release comes out, use [this temp version using lastest r.js repo code](http://requirejs.org/temp/r.js). The temp version may go away at some point or change, but should be stable until the next RequireJS release.
* mv r.js server.js
* Create a main.js as a sibling to server.js.
* Put your app logic in main.js

Then you are all set! This project is an example of that workflow.
