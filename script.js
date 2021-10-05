setInterval(()=>{
    let seconds,minutes,hours;
    let date=new Date();
      seconds=date.getSeconds();
      minutes=date.getMinutes();
      hours=date.getHours() - 12;
    
      let second= document.querySelector('.second');
      let hour= document.querySelector('.hour');
      let minute= document.querySelector('.minute');
    
    second.style.transform=`rotate(${seconds*6}deg)`;
    minute.style.transform=`rotate(${minutes*6}deg)`;
    hour.style.transform=`rotate(${hours *30}deg)`;
         
},1000)
