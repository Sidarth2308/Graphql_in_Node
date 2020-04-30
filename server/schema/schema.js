const graphql = require("graphql");
const _ = require("lodash");

// Using ES6 Destructuring to grab some data from graphql
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;
//dummy data. Will be changed with SQL or noSQL database.
var books= [
    {name:"Name of the wind",genre:"Fantasy",id:"1"},
    {name:"The Final Empire",genre:"Fantasy",id:"2"},
    {name:"The long Earth",genre:"Sci-Fi",id:"3"}
];

// defining a new data type with a name and its fields
const BookType = new GraphQLObjectType({
  name :"Book",
  //fields is going to be a function to make interactions between data types easier.
  fields:()=>({
    //We cant just say name : String. For graphql to understand it, we need to use its form of string.
    id : {type:GraphQLID},
    name: {type:GraphQLString},
    genre:{type:GraphQLString}
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
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  // we are not concerned about the order inside the RootQuery
  fields: {
    book :
    {
      type: BookType,
      //args is the basis on which we will search. Here it is on the basis of the id that we will search.
      args:{id:{type:GraphQLID}},
      resolve(parent, args){
        // code to get data from db / other source

        //Currently we are returning that JSON from the array whose id is mentioned
        return _.find(books,{id:args.id},)
      }
    }
  }
});

// Creating a new schema and
// we are passing some options and defining which query the user is allowed to use. That query is the
//RootQuery
module.exports = new GraphQLSchema({
  query :RootQuery
});
