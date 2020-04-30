const express = require("express");

const graphqlHTTP = require("express-graphql");

const app = express();
app.use("/graphql",graphqlHTTP({
  
}));


app.get("/",(req,res)=>{
  res.send("hello!");
});

app.listen(3000,()=>{
  console.log("Server running on port 3000!");
});
