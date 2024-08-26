function showTime(){
    setInterval(()=>{
        const date = new Date();
        const time = date.toTimeString()
        if(time.substring(0,2)> 12){
            console.log(time.substring(0,8) + " AM")
        }else{
            console.log(time.substring(0,8) + " PM")
        }
        
    },1000)
}

showTime();
