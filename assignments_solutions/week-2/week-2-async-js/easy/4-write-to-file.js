const { AsyncLocalStorage } = require("async_hooks")
const fs = require("fs")

data = "edited this file"

fs.writeFile("a.txt",data,(err)=>{
    if(err) throw err
})