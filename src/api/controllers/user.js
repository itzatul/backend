import { User } from '../db/models/users'
export default ({ id }) => {
return User.findOne({ name: id }, (err, user) => {
    if(err){
      return "db querry error"
    }
    console.log(user);
    return {
     ...user
    }
  });
}