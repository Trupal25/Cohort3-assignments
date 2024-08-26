function counter(){
    
    setTimeout(()=>{
        console.log(count++);
        counter()
    },1000)
}
let count = 0
counter();