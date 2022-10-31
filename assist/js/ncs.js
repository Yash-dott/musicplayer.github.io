const ncs_arr = [
    {
        filename: "sdfghjkl;'",
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

ncs.addEventListener("click",()=>{
    songItems.forEach((element,i)=>{
        element.getElementsByClassName("s_no_songname")[0].innerText = ncs_arr[i].songname;
        element.getElementsByClassName("song_total_duration")[0].innerText = ncs_arr[i].duration;
    })
    album_name.innerText = ncs_arr[0].singername;
})

// data change
defineindex_ncs=()=>{
    datachange_hardy(ncs_arr[array_index]);
    play.classList.remove("fa-circle-play")
    play.classList.add("fa-circle-pause")
}
datachange_ncs=(ncs)=>{
    songname.innerText = ncs_arr.filename
    singer.innerText = ncs_arr.singername
    audio.src = "assist/audio/ncs/" + ncs_arr.filename + ".mp3"
    song_cover.src = "assist/covers/ncs/" + ncs_arr.cover + ".webp"
    audio.play();
}