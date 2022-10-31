const apdhillon = [
    {
        filename: "Excuses",
        songname: "1. Excuses ",
        singername: "AP Dhillon",
        cover: "Excuses",
        duration: "2:59",
    },
    {
        filename: "Brown Munde",
        songname: "2. Brown Munde",
        singername: "AP Dhillon",
        cover: "Brown Munde",
        duration: "4:12",
    },
    {
        filename: "Empty",
        songname: "3. Empty",
        singername: "AP Dhillon",
        cover: "Empty",
        duration: "0:00",
    },
    {
        filename: "Empty",
        songname: "4. Empty",
        singername: "AP Dhillon",
        cover: "Empty",
        duration: "0:00",
    },
    {
        filename: "Dance Empty",
        songname: "5. Empty",
        singername: "AP Dhillon",
        cover: "Empty",
        duration: "0:00",
    },
    {
        filename: "Empty",
        songname: "6. Empty",
        singername: "AP Dhillon",
        cover: "Empty",
        duration: "0:00",
    },
]

apdhillonlistbtn.addEventListener("click",()=>{
    songItems.forEach((element,i)=>{
        element.getElementsByClassName("s_no_songname")[0].innerText = apdhillon[i].songname;
        element.getElementsByClassName("song_total_duration")[0].innerText =apdhillon[i].duration;
    })
    album_name.innerText = apdhillon[0].singername;
})

defineindex_apdhillon=()=>{
    datachange_apdhillon(apdhillon[array_index]);
    play.classList.replace("fa-circle-play","fa-circle-pause")
}

datachange_apdhillon=(apdhillon)=>{
    songname.innerText = apdhillon.filename;
    singer.innerText = apdhillon.singername;
    audio.src = "assist/audio/ap dhillon/" + apdhillon.filename + ".mp3"
    song_cover.src = "assist/covers/ap dhillon/" + apdhillon.cover + ".webp"
    audio.play();
}