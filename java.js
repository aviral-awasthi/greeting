function samay(){
    let t = new Date();
    console.log(t.getHours());
    if(t.getHours() <12) return 'morning';
    else if(t.getHours() <16) return 'afternoon';
    else if(t.getHours() <20) return 'evening';
    else return 'night';
}

document.addEventListener('DOMContentLoaded',() => {document.querySelector('.greeting').textContent = `Good ${samay()} my dear`;});

function parent(p){
    let pic = document.querySelector('.greetingPic');
    pic.classList.remove('show');
    pic.innerHTML =`<img src="${samay()} ${p}.jpg" class="sss" alt="greeting">`;
    setTimeout(()=> { pic.classList.add('show');},100);
    setTimeout(()=> {playaudio(`${p}audio`);} , 500);
}


let currentAudio = null;
function playaudio(audioid){
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const au = document.getElementById(audioid);
    currentAudio = au;
    if(au){
        au.currentTime = 0;
        au.play();
    }
}