let audio = document.querySelector("audio")
let play = document.getElementById("play")
let progressbar = document.getElementById("progressbar")
let songduration = document.getElementById("total_duration")
let currentduration = document.getElementById("current_duration")
let mastervolume = document.getElementById("volume")
let volumebtn = document.getElementById("volume_btn")
let repeatsong = document.getElementById("repeat")
let nextsong = document.getElementById("next")
let prevsong = document.getElementById("pre")
let songname = document.getElementById("song_name")
let singer = document.getElementById("singer")
let song_cover = document.getElementById("cover")
let visualbutton = document.getElementById("visual_btn")
let visual = document.getElementById("visual")
let songprogress = document.getElementById("song_progress")
let albumscontainer = document.getElementById("mid_albums_container")

// handle play and pause

play.addEventListener("click", () => {

    play_pause_fun();

})

play_pause_fun = () => {

    if (audio.paused || audio.currentTime <= 0) {

        audio.play();
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")

    }
    else {
        audio.pause();
        play.classList.remove("fa-circle-pause")
        play.classList.add("fa-circle-play")

    }
}






audio.addEventListener("timeupdate", () => {

    // update progressbar time

    let totprogress = ((audio.currentTime / audio.duration) * 100)
    progressbar.style.width = `${totprogress}%`

    songprogress.onclick = (e) => {
        audio.currentTime = parseInt((e.offsetX / songprogress.offsetWidth) * audio.duration)

    }

    // total duration of song
    let durmin = parseInt(audio.duration / 60)
    let dursec = parseInt(audio.duration % 60)

    songduration.innerText = `${durmin}:${dursec}`

    // current time of song
    let currmin = parseInt(audio.currentTime / 60)
    let currsec = parseInt(audio.currentTime % 60)

    currentduration.innerText = `${currmin}:${currsec}`




    // what happened when song currentTime = song total duration

    songend = 0;
    if (audio.currentTime == audio.duration) {

        play.classList.replace("fa-circle-pause", "fa-circle-play")
        progressbar.value = `${songend}`
        currentduration.innerText = `${0}:${0}`

    }

})



// volumecontrol

audio.volume = mastervolume.value;
// mastervolume.oninput = function () {
mastervolume.addEventListener("input",()=>{

    audio.volume = mastervolume.value;

    let currentvolume = mastervolume.value


    if (currentvolume == 0) {
        volumebtn.classList.replace("fa-volume-low", "fa-volume-xmark")
    }

    else if (currentvolume >= 0.1 && currentvolume <= 0.3) {

        volumebtn.classList.replace("fa-volume", "fa-volume-low")
        volumebtn.classList.replace("fa-volume-xmark", "fa-volume-low")
    }
    else if (currentvolume >= 0.3 && currentvolume <= 0.6) {

        volumebtn.classList.replace("fa-volume-low", "fa-volume")
        volumebtn.classList.replace("fa-volume-high", "fa-volume")
    }
    else {
        volumebtn.classList.replace("fa-volume", "fa-volume-high")
    }
})



// mute functionality

volumebtn.addEventListener("click", () => {

    if (audio.volume > 0) {

        mastervolume.value = 0
        audio.volume = 0
        volumebtn.classList.replace("fa-volume-low", "fa-volume-xmark")
        volumebtn.classList.replace("fa-volume-high", "fa-volume-xmark")
    }

    else {
        mastervolume.value = 0.8
        audio.volume = mastervolume.value;
        volumebtn.classList.replace("fa-volume-xmark", "fa-volume-high")
    }
})


// audio repeat

repeatsong.addEventListener("click", () => {

    if (audio.loop != true) {

        audio.loop = true;
        audio.play();
        repeatsong.style.color = `${"#1db954"}`
    }
    else {
        audio.loop = false;
        repeatsong.style.color = `${"white"}`

    }
})

// shuffle

let randombtn = document.getElementById("random")
randombtn.addEventListener("click",()=>{
    
    if (randombtn.style.color != `${"#1db954"}`) {
        
        randombtn.style.color = `${"#1db954"}`
        random_fun();
    } 
    else {
        
        randombtn.style.color.remove = `${"white"}`
    }
})

random_fun=()=>{
    array_index = 0;
    random_number = parseInt(Math.random()*6)

    if (random_number != array_index) {
        
        array_index = random_number
        check_condition();
    }
    else{
        random_fun();
    }

}


// visual

visualbutton.addEventListener("click", () => {

    if (visual.style.width != `${100}%`) {
        visual.style.width = `${100}%`;
        albumscontainer.classList.add("mid_albums_container")
        visualbutton.style.color = `${"#1db954"}`
        
    }
    else {
        visual.style.width = `${0}%`;
        visualbutton.style.color = `${"white"}`
        setTimeout(function () {
            albumscontainer.classList.remove("mid_albums_container")
        }, 800);
    }

})

document.body.onkeyup = function (e) {

    if (e.keyCode == 32) {
        play_pause_fun();
    }


}


// list_

let cardsmaincontainer = document.getElementById("cards_main_cont")
let honeysinghlistbtn = document.getElementById("honeysinghlistbtn")
let gururandhawalistbtn = document.getElementById("gururandhawalistbtn")
let badshahlistbtn = document.getElementById("badshahlistbtn")
let hardylistbtn = document.getElementById("harrdylistbtn")
let sidhulistbtn = document.getElementById("sidhu_moose_wala")
let apdhillonlistbtn =document.getElementById("ap_dhillon")
let ncs = document.getElementById("ncs")
let songs_list = document.getElementById("songs_list")
let home = document.getElementById("home_btn")
let albumplaybtn = document.querySelectorAll(".album_play_btn")


// show/hide list box
albumplaybtn.forEach((albumplaybtn) => {

    albumplaybtn.addEventListener("click", () => {

        cardsmaincontainer.style.display = `${"none"}`
        songs_list.style.display = `${"block"}`
    })

})

home.addEventListener("click", () => {
    cardsmaincontainer.style.display = `${"block"}`
    songs_list.style.display = `${"none"}`
    songs_list.style.display = `${"none"}`
})






let li_play_btn = document.querySelectorAll(".list_play_btn")
let album_name = document.getElementById("album_name")

let song_playbtn_1 = document.getElementById("song_playbtn_1")
let song_playbtn_2 = document.getElementById("song_playbtn_2")
let song_playbtn_3 = document.getElementById("song_playbtn_3")
let song_playbtn_4 = document.getElementById("song_playbtn_4")
let song_playbtn_5 = document.getElementById("song_playbtn_5")
let song_playbtn_6 = document.getElementById("song_playbtn_6")


let song_list_1 = document.getElementById("song_list_details_1")
let song_list_2 = document.getElementById("song_list_details_2")
let song_list_3 = document.getElementById("song_list_details_3")
let song_list_4 = document.getElementById("song_list_details_4")
let song_list_5 = document.getElementById("song_list_details_5")
let song_list_6 = document.getElementById("song_list_details_6")






check_condition = () => {

    if (album_name.innerText === "Yo Yo Honey singh") {
        defineindex_honeysingh();
    }

    if (album_name.innerText === "Guru Randhawa") {
        defineindex_guru();
    }
    if (album_name.innerText === "Badshah") {
        defineindex_badshah();
    }
    if (album_name.innerText === "Hardy Sandhu") {
        defineindex_hardy();
    }
    if (album_name.innerText === "Sidhu Moose Wala") {
        defineindex_sidhu();
    }
    if (album_name.innerText === "AP Dhillon") {
        defineindex_apdhillon();
    }
    if (album_name.innerText === "ncs") {
        ncs();
    }

}

li_play_btn.forEach(li_play_btn => {

    li_play_btn.addEventListener("click", () => {
        // define_index
        array_index = li_play_btn.value;
        check_condition();

        // change_icons//add class
        switch (array_index) {

            case 0:
                song_playbtn_1.classList.replace("fa-circle-play", "fa-circle-pause")
                song_list_1.classList.add("play-green_colour")
                break;

            case 1:
                song_playbtn_2.classList.replace("fa-circle-play", "fa-circle-pause")
                song_list_details_2.classList.add("play-green_colour")
                break;

            case 2:
                song_playbtn_3.classList.replace("fa-circle-play", "fa-circle-pause")
                song_list_details_3.classList.add("play-green_colour")
                break;

            case 3:
                song_playbtn_4.classList.replace("fa-circle-play", "fa-circle-pause")
                song_list_details_4.classList.add("play-green_colour")
                break;

            case 4:
                song_playbtn_5.classList.replace("fa-circle-play", "fa-circle-pause")
                song_list_details_5.classList.add("play-green_colour")
                break;

            case 5:
                song_playbtn_6.classList.replace("fa-circle-play", "fa-circle-pause")
                song_list_details_6.classList.add("play-green_colour")
                break;
            default:
                break;
        }

        // remove_class=()=>{

        if (array_index != 0) {
            song_list_1.classList.remove("play-green_colour")
            song_playbtn_1.classList.replace("fa-circle-pause", "fa-circle-play")
        }
        if (array_index != 1) {
            song_list_2.classList.remove("play-green_colour")
            song_playbtn_2.classList.replace("fa-circle-pause", "fa-circle-play")
        }
        if (array_index != 2) {
            song_list_3.classList.remove("play-green_colour")
            song_playbtn_3.classList.replace("fa-circle-pause", "fa-circle-play")
        }
        if (array_index != 3) {
            song_list_4.classList.remove("play-green_colour")
            song_playbtn_4.classList.replace("fa-circle-pause", "fa-circle-play")
        }
        if (array_index != 4) {
            song_list_5.classList.remove("play-green_colour")
            song_playbtn_5.classList.replace("fa-circle-pause", "fa-circle-play")
        }
        if (array_index != 5) {
            song_list_6.classList.remove("play-green_colour")
            song_playbtn_6.classList.replace("fa-circle-pause", "fa-circle-play")
        }
        // }



    })
});

//next and pre

nextsongfun = () => {
    array_index++;

    if (array_index >= 6) {
        array_index = 0;
    }
    check_condition();

}

presongfun = () => {
    array_index--;

    if (array_index < 0) {
        array_index = 5;
    }
    check_condition();
}

nextsong.addEventListener("click", nextsongfun)
prevsong.addEventListener("click", presongfun)



let left_cont = document.querySelector(".left_container")
let hamb = document.querySelector(".hamb_bar")

hamb.addEventListener("click",()=>{

    if (left_cont.style.display !== `${"none"}` ) {
        
        left_cont.style.display = `${"none"}`
    } else {
        left_cont.style.display = `${"block"}`
        
    }
})


