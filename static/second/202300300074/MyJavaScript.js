


function closepopbox(Id) {
    document.getElementById(Id).style.display = 'none';
}

function hideoption(Id) {
    document.getElementById(Id).style.visibility = 'hidden';
}

function openpopbox(Id) {
    document.getElementById(Id).style.display = 'flex';
}

function showoption(Id) {
    document.getElementById(Id).style.visibility = 'visible';
}

function slidingnum(Id1,Id2) {
    document.getElementById(Id2).value = document.getElementById(Id1).value;
}

function noout(Id,min,max) {
    console.log(1);
    if (Number(document.getElementById(Id).value) > max){
        console.log(2);
        document.getElementById(Id).value = String(max);
    }else if (Number(document.getElementById(Id).value) < min){
        document.getElementById(Id).value = String(min);
    }
}

function start() {
    document.getElementById('exit').style.visibility = 'hidden';
    document.getElementById('ifplayer').style.visibility = 'hidden';
    document.getElementById('progress').style.width = '97%';
    setTimeout(start2,2000);
}
function start2() {
    document.getElementById('body').style.visibility='visible';
    document.getElementById('bar').style.visibility = 'hidden';
    document.getElementById('progress').style.visibility = 'hidden';
    document.getElementById('exit').style.visibility = 'visible';
    document.getElementById('ifplayer').style.visibility = 'visible';
}