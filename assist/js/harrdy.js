const hardy = [
    {
        filename: "Hornn Blow",
        songname: "1. Hornn Blow ",
        singername: "Hardy Sandhu",
        cover: "Hornn Blow",
        duration: "2:35",
    },
    {
        filename: "Kya Baat Ay",
        songname: "2. Kya Baat Ay",
        singername: "Hardy Sandhu",
        cover: "Kya Baat Ay",
        duration: "3:04",
    },
    {
        filename: "Backbone",
        songname: "3. Backbone",
        singername: "Hardy Sandhu",
        cover: "Backbone",
        duration: "2:48",
    },
    {
        filename: "Naah",
        songname: "4. Naah",
        singername: "Hardy Sandhu",
        cover: "Naah",
        duration: "3:11",
    },
    {
        filename: "Dance Like",
        songname: "5. Dance Like",
        singername: "Hardy Sandhu",
        cover: "Dance Like",
        duration: "3:08",
    },
    {
        filename: "Bijlee Bijlee",
        songname: "6. Bijlee Bijlee",
        singername: "Hardy Sandhu",
        cover: "Bijlee Bijlee",
        duration: "3:09",
    },
]


// list_datachange

hardylistbtn.addEventListener("click",()=>{
    songItems.forEach((element,i)=>{
        element.getElementsByClassName("s_no_songname")[0].innerText = hardy[i].songname;
        element.getElementsByClassName("song_total_duration")[0].innerText = hardy[i].duration;
    })
    album_name.innerText = hardy[0].singername;
})

// data change
defineindex_hardy=()=>{
    datachange_hardy(hardy[array_index]);
    play.classList.remove("fa-circle-play")
    play.classList.add("fa-circle-pause")
}
datachange_hardy=(hardy)=>{
    songname.innerText = hardy.filename
    singer.innerText = hardy.singername
    audio.src = "assist/audio/Hardy/" + hardy.filename + ".mp3"
    song_cover.src = "assist/covers/hardy/" + hardy.cover + ".webp"
    audio.play();
}