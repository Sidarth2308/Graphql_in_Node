const graphql = require("graphql");

// Using ES6 Destructuring to grab some data from graphql
const {GraphQlObjectType, GraphQlString, GraphQlSchema } = graphql;

// defining a new data type with a name and its fields
const BookType = new GraphQlObjectType({
  name :"Book",
  //fields is going to be a function to make interactions between data types easier.
  fields:()=>({
    //We cant just say id : String. For graphql to understand it, we need to use its form of string.
    id : {type:GraphQlString},
    name: {type:GraphQlString},
    genre:{type:GraphQlString}
  })
});

/* Now we will define root queries. This a way which describes how a user can
jump into a graph and grab data.
Each of the fields will be a root query. According to our diagram, we have 4 possibilites:
1) To fetch a particular author
2) To fetch a particular Book
3) To fetch all authors
4) To fetch all books
We need to make a root query for all of these.
*/
const RootQuery = new GraphQlObjectType({
  name: "RootQueryType",
  // we are not concerned about the order inside the RootQuery
  fields: {
    book :
    {
      type: BookType,
      //args is the basis on which we will search. Here it is on the basis of the id that we will search.
      args:{id:{type:GraphQlString}},
      resolve(parent, args){
        // code to get data from db / other source

      }
    }
  }
});

// Creating a new schema and
// we are passing some options and defining which query the user is allowed to use. That query is the
//RootQuery
module.exports = new GraphQlSchema({
  query :RootQuery
});
