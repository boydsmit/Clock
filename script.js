const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
var time = new Date();
var hoek = 0;


const face = new Image();
face.src = "images/face.png";

const secondsPointer = new Image();
secondsPointer.src = "images/seconds.png";



const minutePointer = new Image();
minutePointer.src = "images/minutes.png";



const hourPointer = new Image();
hourPointer.src = "images/hours.png";

face.addEventListener('load',()=>{

    setInterval(draw,60);
});

function draw() {
    time = new Date();
    context.clearRect(0,0,500,500);
    context.drawImage(face,0,0);
    context.save();
    context.translate(250,250);
    context.rotate(time.getSeconds()/60*2*Math.PI);
    context.drawImage(secondsPointer,-26,-222);
    context.restore();

    //minutes
    context.save();
    context.translate(250,250);
    context.rotate(time.getMinutes()/60*2*Math.PI);
    context.drawImage(minutePointer,-34,-224);
    context.restore();

    //hours
    context.save();
    context.translate(250,250);
    context.rotate(time.getHours()/60*2*Math.PI);
    context.drawImage(hourPointer,-27,-190);
    context.restore();

    myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    hoek += 0.05;
}