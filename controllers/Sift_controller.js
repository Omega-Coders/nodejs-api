require("dotenv").config()

const axios = require('axios');

// const imageToBase64=require("image-to-base64");
// const { io } = require("socket.io-client");

// const fs = require("fs");

const posts3details = async (req, res) =>{
        
        const {ref,test}=req.body;
        await axios.post('http://localhost:8081/api/surf/', {
            ref: ref,
            test: test
          })
          .then( (output) => {
            return res.status(200).json(output.data)
          })
          .catch( (error) => {
            return res.status(400).json(error)
          });



        // const sio = io("http://localhost:5000")

        // sio.on("connect", async () => {
        //     console.log("connected");
        //             sio.emit('doSIFT', {images:[ref,test]})
        // })

        // sio.on("result", (result)=> res.status(200).json({message: result.result}))

        // sio.on("disconnect", () => {
        //     console.log("Disconnected");
        // });


}
//module.exports= posts3details;
module.exports={posts3details};
