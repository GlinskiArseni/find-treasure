let clicks = 0;

let randomPosition = function (size){
 return Math.floor(Math.random() * size); 
}
let width = 750
let height = 500

let treasure = {
    x: randomPosition(width),
    y: randomPosition(height)
}

$("#map").click(function (event) {
    clicks++;
    let distance = getdistance(event,treasure)
    let distanceHint = getdistanceHint(distance)
    $("#distance").text(distanceHint)
    if( distance < 8){
        alert("Ты нашел клад пиратов! Так держать!" + clicks)
    }
});
let getdistance = function (event,treasure){
    let distX = event.offsetX - treasure.x
    let distY = event.offsetY - treasure.y
    return Math.sqrt((distX*distX)+(distY*distY))
}

let getdistanceHint = function (distance){
    if (distance < 10){
        return "Обожжешься"
    }else if (distance < 20){
        return "Очень горячо"
    }else if(distance < 40){
        return "Горячо"
    }else if(distance < 80){
        return "Тепло"
    }else if(distance < 160){
        return "Холодно"
    }else if(distance < 320){
        return "Очень холодно"
    }else{
        return "Замерзнешь"
    }
}
