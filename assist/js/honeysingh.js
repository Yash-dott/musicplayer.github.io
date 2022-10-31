const honeysingharr = [
    {
        filename: "De Taali",
        songname: "1. De Taali",
        singername: "Yo Yo Honey singh",
        cover: "De Taali",
        duration: "3:26",
    },
    {
        filename: "Birthday Bash",
        songname: "2. Birthday Bash",
        singername: "Yo Yo Honey singh",
        cover: "Birthday Bash",
        duration: "3:03",
    },
    {
        filename: "Boothnath",
        songname: "3. Boothnath",
        singername: "Yo Yo Honey singh",
        cover: "Boothnath",
        duration: "4:05",
    },
    {
        filename: "Blue eyes",
        songname: "4. Blue eyes",
        singername: "Yo Yo Honey singh",
        cover: "Blue eyes",
        duration: "3:43",
    },
    {
        filename: "Love dose",
        songname: "5. Love dose",
        singername: "Yo Yo Honey singh",
        cover: "Love dose",
        duration: "3:59",
    },
    {
        filename: "Dheere Dheere",
        songname: "6. Dheere Dheere",
        singername: "Yo Yo Honey singh",
        cover: "Dheere Dheere",
        duration: "4:37"
    },
]



let songItems = Array.from(document.getElementsByClassName('song_list_details'));

honeysinghlistbtn.addEventListener("click",()=>{
    songItems.forEach((element, i)=>{ 
        element.getElementsByClassName("s_no_songname")[0].innerText = honeysingharr[i].songname;
        element.getElementsByClassName("song_total_duration")[0].innerText = honeysingharr[i].duration;
    })
    album_name.innerText = honeysingharr[0].singername
});

// data_change       
    defineindex_honeysingh = () => {
        datachange_yoyo(honeysingharr[array_index])
        play.classList.remove("fa-circle-play")
        play.classList.add("fa-circle-pause")
    }

   datachange_yoyo=(honeysingharr)=>{
       songname.innerText = honeysingharr.filename
       singer.innerText = honeysingharr.singername
       audio.src = "assist/audio/honeysingh/" + honeysingharr.filename + ".mp3"
       song_cover.src = "assist/covers/honeysingh/" + honeysingharr.cover + ".webp";
       audio.play();
   }



