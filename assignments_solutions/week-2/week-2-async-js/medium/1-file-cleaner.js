const fs = require("fs")

fs.readFile("a.txt","utf-8",(err,data)=>{
    const contents = data;
    const newcontents = contents.replace(/\s+/g," ").trim()

    fs.writeFile("a.txt",newcontents,(err)=>{
        if(err) throw err;
    })

})