function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);  
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

window.onload = function(){
    setInterval(()=>{
        const now = new Date();
        document.getElementById('date').innerHTML = myDatetime(now).substring(2, 10);
        document.getElementById('time').innerHTML = myDatetime(now).substring(11);
    }, 1000)
}

function addNode(){
    const h3 = document.createElement('h3');
    h3.classList.add('class1', 'class2');   
    const textNode = document.createTextNode('최은영');
    h3.appendChild(textNode);
    document.body.appendChild(h3);
}
function removeNode(){
    const h3 = document.querySelector('.class1');
    document.body.removeChild(h3);
}

let input = prompt('당신은 누구십니까', '이곳에 입력하세요.');
let yes = confirm('확실합니까?');             
alert(input);


let info = `href: ${location.href}\n`;
info += `hostname: ${location.hostname}\n`;
info += `port: ${location.port}\n`;
info += `pathname: ${location.pathname}\n`;

function mover(){
    let moveFicture;
    moveFicture=document.getElementById("move1");
    moveFicture.style.backgroundImage="url('https://www.olympus-thread.com/datas/cache/images/2020/04/27/1660x800_ea1e9d427fb5664c32c517a73e421e58_93935cdabc8fa3310bdcb293189b0610842bd9b9.jpg')";
}