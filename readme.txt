In this Current Version,
Fixes:

Progress:
Made 2 object data types and established a connection together.
Finished the RootQueries.

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