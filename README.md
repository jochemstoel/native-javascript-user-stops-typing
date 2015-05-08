# User stops typing

A (vanilla) Javascript solution to determine when a user stops typing.
Source: https://github.com/jochemstoel/native-javascript-user-stops-typing/blob/master/snippet.js

Assign two functions to textarea element

```javascript
textarea = document.getElementById('mytextarea');
$editor.setAttribute('onkeyup', 'key_up()');
$editor.setAttribute('onkeydown', 'key_down()');
```

Alternatively, set them as element attributes

```html
<textarea id="editor" onkeyup="key_up()" onkeydown="key_down()"></textarea>
```

Possible use:

Prevent your server from exploding. Send XMLHttp (AJAX) request to save the content when the user stopped typing and not with a timer or on every keystroke.

And if you like it, share it! =)

