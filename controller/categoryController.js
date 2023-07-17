const category=(req,res)=>{
    return res.send([
    {
    
      id: 1,
      title:"Thug of Hindostam",
      body: "amir khan",
    category:"bollywood"  },
    
    {
    
      id: 1,
      title:"Thug of Hindostam",
      body: "amir khan",
    category:"bollywood"  },
    
    {
      
      id: 3,
      title:"Pathaan",
      body: "SRK",
    category:"bollywood"  },
    {
      
      id: 5,
      title:"Family",
      body: "amir khan",
    category:"hollywood"  },
    {
      
      id: 7,
      title:"Friends",
      body: "chandler",
    category:"hollywood"  },
    
    
    
    {
      
      id: 6,
      title:"Twitter",
      body: "elon",
    category:"technology"  },
    
    {
      
      id: 11,
      title:"mr olympia",
      body: "Cbum",
    category:"fitness"  },

    {
      
      id: 12,
      title:"Arnold Classic",
      
      body: "Jay cutler",
    category:"fitness"  }
  ]);
}
module.exports = {category}