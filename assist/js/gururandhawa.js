const gururandhawaarr = [
    {
        filename: "Baby Girl",
        songname: "1. Baby Girl",
        singername: "Guru Randhawa",
        cover: "Baby Girl",
        duration: "3:43",
    },
    {
        filename: "Surma Surma",
        songname: "2. Surma Surma",
        singername: "Guru Randhawa",
        cover: "Surma Surma",
        duration: "3:37",
    },
    {
        filename: "High Rated Gabru",
        songname: "3. High Rated Gabru",
        singername: "Guru Randhawa",
        cover: "High Rated Gabru",
        duration: "3:36",
    },
    {
        filename: "Made in India",
        songname: "4. Made in India",
        singername: "Guru Randhawa",
        cover: "Made in India",
        duration:  "3:20",
    },
    {
        filename: "Lahore",
        songname: "5. Lahore",
        singername: "Guru Randhawa",
        cover: "Lahore",
        duration: "3:17",
    },
    {
        filename: "Ishq Tera",
        songname: "6. Ishq Tera",
        singername: "Guru Randhawa",
        cover: "Ishq Tera",
        duration: "3:24",
    },
]





gururandhawalistbtn.addEventListener("click",()=>{
    songItems.forEach((element, i)=>{ 
        // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
        element.getElementsByClassName("s_no_songname")[0].innerText = gururandhawaarr[i].songname; 
        element.getElementsByClassName("song_total_duration")[0].innerText = gururandhawaarr[i].duration;
    })
    album_name.innerText = gururandhawaarr[0].singername 
})

// datachange_guru
defineindex_guru = () => {
    datachange_guru(gururandhawaarr[array_index])
    play.classList.remove("fa-circle-play")
    play.classList.add("fa-circle-pause")
}
datachange_guru = (gururandhawaarr) => {
    songname.innerText = gururandhawaarr.filename
    singer.innerText = gururandhawaarr.singername
    audio.src = "assist/audio/gururandhawa/" + gururandhawaarr.filename + ".mp3"
    song_cover.src = "assist/covers/gururandhawa/" + gururandhawaarr.cover + ".webp";
    audio.play();
}