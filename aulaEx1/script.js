
//Setará o site conforme a hora, mudando sua cor e imagens
function loadApplication(){
    const msg = window.document.getElementById('message');
    const photo = window.document.getElementById('icon');
    const date = new Date(); 
    // const hour = date.getHours(); 
    const hour = 22;
    msg.innerHTML =`It's ${hour} o'clock`; 
    if (hour >= 0 && hour <12){
        //goor morning
        photo.src = '/aulaEx1/img.src/daylight.png';
        document.body.style.backgroundColor = '6da8f6';
    } else if (hour >= 12 && hour <18){
        //good afternoon
        photo.src = '/aulaEx1/img.src/afternoon.png';
        document.body.style.backgroundColor = '#fea3a3';
    }else {
        //good night
        photo.src = '/aulaEx1/img.src/night.png';
        document.body.style.backgroundColor = '#00000088'
    }
}



