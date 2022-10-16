const  dbConnection = uri => Object.freeze({
  uri,
  connect:() => console.log(`DB ${uri} has been connected!`);
  disconnect:() => console.log(`DB disconected`);
})

const connection = dbConnection("mongodb://...");

export default connection;