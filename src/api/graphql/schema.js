var { buildSchema } = require('graphql');

export default buildSchema(`

  type Document {
    result: String
  }

  type Profile {
    name: String,
    nick: String
  }
  
  type User {
    id: String
    name: String,
    email: String,
    webId: String,
    verified: Boolean
  }

  type Query {
    user (id: String): User
    profile (id: String): Profile
    document (id: String): Document
  }
`)