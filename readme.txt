In this Current Version,
Fixes:
Schema : GraphQL** instead of GraphQl**

Progress:
Connected Schema to the server and implemented a dummy array to act as database.
Changed the type of ID to GraphQLID instead of GraphQLString
enabled GraphiQL

Query is sent in the format:
{
  RootQueryfield(args:"whatever"){
  fieldofObject1
  fieldofObject2	
  }
}

eg:.
{
  book(id:"2"){
    name
    genre
  }

}