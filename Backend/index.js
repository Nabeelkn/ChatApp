const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const PORT =  3000

app.listen(PORT,()=>{
  console.log(`application started @PORT: ${PORT}`);
});

app.get('/authenticate',(req,res)=>{
  res.status(200).send(`chat application server started`)
})

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      {
        username:username,
        secret:username,
        first_name:username
      },
      {headers:{"private-key":"c0131bc6-f219-4694-98da-cb03ed949cff"}}
      )
      return res.status(response.status).json(response.data) 

  }catch(err){
    return res.status(err.response.status).json(err.response.data) 

  }
});



// 
