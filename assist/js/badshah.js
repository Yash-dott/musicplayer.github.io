const badshah =[
    {
        filename: "She Move It Like",
        songname: "1. She Move It Like",
        singername: "Badshah",
        cover: "She Move It Like",
        duration: "3:05",
    },
    {
        filename: "Kamaal",
        songname: "2. Kamaal",
        singername: "Badshah",
        cover: "Kamaal",
        duration: "3:07",
    },
    {
        filename: "Heartless",
        songname: "3. Heartless",
        singername: "Badshah",
        cover: "Heartless",
        duration: "5:44",
    },
    {
        filename: "DJ Waley Babu",
        songname: "4. DJ Waley Babu",
        singername: "Badshah",
        cover: "DJ Waley Babu",
        duration: "2:35",
    },
    {
        filename: "Mercy",
        songname: "5. Mercy",
        singername: "Badshah",
        cover: "Mercy",
        duration: "2:28",
    },
    {
        filename: "Empty",
        songname: "6. Empty",
        singername: "Badshah",
        cover: "Empty",
        duration: "Empty",
    },
]


// list data change

badshahlistbtn.addEventListener("click",()=>{
    songItems.forEach((element,i)=>{
        element.getElementsByClassName("s_no_songname")[0].innerText = badshah[i].songname;
        element.getElementsByClassName("song_total_duration")[0].innerText = badshah[i].duration;
    })
    album_name.innerText = badshah[0].singername;
})

// datachange
defineindex_badshah=()=>{
    datachange_badshah(badshah[array_index]);
    play.classList.remove("fa-circle-play")
    play.classList.add("fa-circle-pause")
}

datachange_badshah=(badshah)=>{
    songname.innerText = badshah.filename;
    singer.innerText = badshah.singername;
    song_cover.src = "assist/covers/badshah/" + badshah.cover + ".webp"
    audio.src = "assist/audio/badshah/" + badshah.filename + ".mp3"
    audio.play();
}