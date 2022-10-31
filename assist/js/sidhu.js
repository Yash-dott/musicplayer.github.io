const sidhu = [
    {
        filename: "Jdo Khabra Ch",
        songname: "1. Jdo Khabra Ch ",
        singername: "Sidhu Moose Wala",
        cover: "Jdo Khabra Ch",
        duration: "4:44",
    },
    {
        filename: "295",
        songname: "2. 295",
        singername: "Sidhu Moose Wala",
        cover: "295",
        duration: "4:32",
    },
    {
        filename: "Same Beef",
        songname: "3. Same Beef",
        singername: "Sidhu Moose Wala",
        cover: "Same Beef",
        duration: "4:22",
    },
    {
        filename: "LEVELS",
        songname: "4. LEVELS",
        singername: "Sidhu Moose Wala",
        cover: "LEVELS",
        duration: "3:51",
    },
    {
        filename: "The Last Ride",
        songname: "5. The Last Ride",
        singername: "Sidhu Moose Wala",
        cover: "The Last Ride",
        duration: "4:35"
    },
    {
        filename: "So High",
        songname: "6. So High",
        singername: "Sidhu Moose Wala",
        cover: "So High",
        duration: "3:53"
    },
]


sidhulistbtn.addEventListener("click",()=>{
    songItems.forEach((element,i)=>{
        element.getElementsByClassName("s_no_songname")[0].innerText = sidhu[i].songname;
        element.getElementsByClassName("song_total_duration")[0].innerText = sidhu[i].duration;
    })
    album_name.innerText = sidhu[0].singername;
})


defineindex_sidhu=()=>{
    datachange_sidhu(sidhu[array_index])
    play.classList.replace("fa-circle-play","fa-circle-pause")
}

datachange_sidhu=(sidhu)=>{
    song_name.innerText = sidhu.filename
    singer.innerText = sidhu.singername
    audio.src = "assist/audio/sidhu/" + sidhu.filename + ".mp3"
    song_cover.src = "assist/covers/sidhu/" + sidhu.cover + ".webp"
    audio.play();
}