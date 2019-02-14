/****************************************
 ** Anne Summers <ukulanne@gmail.com>  **
 ** February 14, 2018                  **
 ** Socket client example              **
 ***************************************/

const socket = require ('net').Socket ()

const PORT = 5000

socket.connect (PORT)
socket.write ('{"email" : "arlrios@us.ibm.com", "msg": "Hello World"}')
socket.end ()

/* echo '{"email" : "arlrios@us.ibm.com", "msg": "Hello World"}' | nc 127.0.0.1 5000 */

/* nc 127.0.0.1 5000 < panda */

/*panda:
  {"email" : "arlrios@us.ibm.com", "msg": "Hello World"}
*/
