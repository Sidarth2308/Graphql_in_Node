const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
app.use("/graphql",graphqlHTTP({
  // this means "schema : schema" but in es6 we can shorten because same name.
  schema,
  // tool to test out the endpoint
  graphiql: true
}));


app.get("/",(req,res)=>{
  res.send("hello!");
});

app.listen(3000,()=>{
  console.log("Server running on port 3000!");
});
