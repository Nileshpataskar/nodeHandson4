const arr = [];

const bcrypt=require('bcrypt');

const jwt=require("jsonwebtoken");

const secretKey="Nilesh@123"
const saltRounds = 10;


const register = (req, res) => {
  const registerdata = req.body;
  console.log(registerdata);

 const user= arr.find((details) => {
    if (details.email === registerdata.email) {
      return details;
    }
  });

  if (user) {
    return res.send("User Already Registered");
  }

const hashpassword=bcrypt.hashSync(registerdata.password,saltRounds)
const tempObj={
    name:registerdata.name,
    email: registerdata.email,
    password: hashpassword,
    phone: registerdata.phone
}

const token=jwt.sign({userData:registerdata.email},secretKey,{expiresIn:360})


  arr.push(tempObj);
  console.log(tempObj);

  return res.send({msg:"user Registered succesfuly using token",token:token});
};


// functionality for login
const login = (req, res) => {

const logindata = req.body;

const user = arr.find((details) => {
    if(details.email===logindata.email){
        return details
    }
})
if(!user){
    return res.send("Not registered")

}

const validate=bcrypt.compareSync(logindata.password,user.password)

if(validate){
    return res.send("User Login Success")
}
return res.send("Password wrong")

};

module.exports = { register, login };
