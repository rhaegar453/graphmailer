export default class Data{
    constructor(){
        this.date=new Date().toTimeString().split(' ')[0];
        this.RAM=Math.floor(Math.random()*100);
        this.CPU=Math.floor(Math.random()*100);
        this.totalUtilization=Math.floor(Math.random()*100);
    }
    returnData(){
        return setInterval(()=>{
            console.log(new Data());
        },1000);
    }
}

