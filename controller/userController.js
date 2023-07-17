const register=(req,res)=>{
    res.send("User Registered")
}

const login=(req,res)=>{
    res.send("Login")
}

module.exports ={ register,login }