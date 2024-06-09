const fakelove2Audio = new Audio('./Audio/Fake Love 2 - Fukra Insaan.mp3');
const goinoffAudio = new Audio('./Audio/Goin Off - Karan Aujla.mp3');
const headoverheelsAudio = new Audio('./Audio/Head Over Heels - Sukhan Verma.mp3');
const noreasonAudio = new Audio('./Audio/No Reason - Parmish Verma.mp3');
const ranjhaaAudio = new Audio('./Audio/Ranjhaa - Fukra Insaan.mp3');
const terebinaAudio = new Audio('./Audio/Tere Bina - Sukhan Verma.mp3');
const winningspeechAudio = new Audio('./Audio/Winning Speech - Karan Aujla.mp3');

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const songImage = document.querySelector('.song-image');
const playPauseIcon = document.querySelector('#play-pause-icon');

const songs = [
   {ele: fakelove2Audio, audioName: 'Fake Love 2 - Fukra Insaan', imgsrc: './Images/Fake Love 2.jpg'} ,
   {ele: goinoffAudio, audioName: 'Goin Off - Karan Aujla', imgsrc: './Images/Goin Off.jpg'} ,
   {ele: headoverheelsAudio, audioName: 'Head Over Heels - Sukhan Verma', imgsrc: './Images/Head Over Heels.jpg'} , 
   {ele: noreasonAudio, audioName: 'No Reason - Parmish Verma', imgsrc: './Images/No Reason.jpg'} ,
   {ele: ranjhaaAudio, audioName: 'Ranjhaa - Fukra Insaan', imgsrc: './Images/Ranjhaa.jpg'} ,
   {ele: terebinaAudio, audioName: 'Tere Bina - Sukhan Verma', imgsrc: './Images/Tere Bina.jpg'} ,
   {ele: winningspeechAudio, audioName: 'Winning Speech - Karan Aujla', imgsrc: './Images/Winning Speech.jpg'} ,
];

let current = 0;
let currentsong = songs[current].ele;
songName.textContent = songs[current].audioName;
songImage.src = songs[current].imgsrc;

playBtn.addEventListener('click', ()=> {
   playPauseSong();
}) 
nextBtn.addEventListener('click', ()=> {
   updateSong('next');
   playPauseSong();
})
prevBtn.addEventListener('click', ()=> {
   updateSong('previous');
   playPauseSong();
})


const updateSong = (action)=> {
   currentsong.pause();
   currentsong.currentTime=0;
   if (action === 'next') {
      current++;
      if (current > songs.length-1) current = 0;
   }
   if (action === 'previous') {
      current--;
      if (current < 0) current = songs.length-1;
   }
   currentsong = songs[current].ele;
   songName.textContent = songs[current].audioName;
   changeImage(songs[current].imgsrc);
}

const playPauseSong = ()=> {
   if (currentsong.paused) {
      currentsong.play();
      playPauseIcon.className = 'ph-bold ph-pause';
   } else {
      currentsong.pause();
      playPauseIcon.className = 'ph-bold ph-play';
   }
};

const changeImage = (newSrc) => {
   songImage.classList.add('fade-out');
   setTimeout(() => {
      songImage.src = newSrc;
      songImage.classList.remove('fade-out');
   }, 500); // Match this duration to your CSS transition duration
};

const initializeProgressBar = () => {
   songs.forEach(song => {
      const audio = song.ele;
      audio.addEventListener('timeupdate', () => {
         const progress = (audio.currentTime / audio.duration) * 100;
         const progressBar = document.querySelector('.progress');
         progressBar.style.width = `${progress}%`;
      });
   });
};

initializeProgressBar();
