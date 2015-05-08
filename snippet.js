/* (Native) Javascript snippet to check whether a user stops typing 
 * 
 * @author Jochem Stoel
 * @url http://jochemstoel.github.io/
 */

var $typingTimer;                
var $doneTypingInterval = 3000;  // 3 seconds

/* User presses a key. */
function key_down() {
    clearTimeout($typingTimer);
};

/* User releases a key. */
function key_up() {
    clearTimeout($typingTimer);
    $typingTimer = setTimeout(update, $doneTypingInterval);
};

textarea = document.getElementById('mytextarea');
$editor.setAttribute('onkeyup', 'key_up()');
$editor.setAttribute('onkeydown', 'key_down()');

