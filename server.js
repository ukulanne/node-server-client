/****************************************
 ** Anne Summers <ukulanne@gmail.com>  **
 ** February 14, 2018                  **
 ** Socket server example              **
 ***************************************/

/* Time-stamp: <2019-02-14 15:06:05 panda> */

const https = require ('https')
const net   = require ('net')

const PORT  = 5000

const server =  net.createServer ((socket) => {
    console.log (`[INFO] Received connection from: ${socket.localAddress}`)

    socket.on ('data', (data) => {
        let str = data.toString ()
        let json = JSON.parse (str)

        /* console.log (str) */

        console.log (`[MSG] Email: ${json.email} Message: ${json.msg}`)

        /*
          sendmail ('foo@foo.com', json.email, json.msg)
        */
    })
})

server.listen (PORT)
console.log (`[INFO] Started server on port: ${PORT}`)
