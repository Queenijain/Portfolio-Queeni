const toggleMenu = document.getElementById('Togglebtn');
toggleMenu.addEventListener('click', () => {
  const toggleMenu = document.getElementById('navigation');
  toggleMenu.classList.toggle('container');
});
const CloseMenu = document.getElementById('Closebtn');
CloseMenu.addEventListener('click', () => {
  const CloseMenu = document.getElementById('navigation');
  CloseMenu.classList.remove('container');
});
const Navitems = document.querySelectorAll('.Navitem');
Navitems.forEach((Navitem) => {
  Navitem.addEventListener('click', () => {
    const navigation = document.getElementById('navigation');
    navigation.classList.remove('container');
  });
});

const toggleLanguages = document.querySelector('#toggle_languages');
const showLanguages = document.querySelector('#show_languages');
const toggleLanguagesImg = document.querySelector('#toggle_languages');
toggleLanguages.addEventListener('click', () => {
  showLanguages.classList.toggle('visible');
  toggleLanguagesImg.classList.toggle('arrow-down');
});

const toggleTools = document.querySelector('#toggle_tools');
const showTools = document.querySelector('#show_tools');
const toggleToolsImg = document.querySelector('#toggle_tools');
toggleTools.addEventListener('click', () => {
  showTools.classList.toggle('visible');
  toggleToolsImg.classList.toggle('arrow-down');
});

const toggleSkills = document.querySelector('#toggle_skills');
const showSkills = document.querySelector('#show_skills');
const toggleSkillsImg = document.querySelector('#toggle_skills');
toggleSkills.addEventListener('click', () => {
  showSkills.classList.toggle('visible');
  toggleSkillsImg.classList.toggle('arrow-down');
});


//const toggleButton = document.querySelector('#toggle_down');
// const targetElement = document.querySelector('#show');
// toggleButton.addEventListener('click', () => {
//targetElement.classList.toggle('visible');
//});

// JS Pop Functionality<---->(JS Objects)
const Projects = [
  {
    img: 'Images/TTT.webp',
    title: 'Tic-Tac-Toe',
    skill: ['Game', 'Front-End Dev', '2023'],
    para: 'Tic-Tac-Toe also known as Noughts and Crosses, is a classic two-player game. It can be played almost anywhere with minimal setup. A paper and pencil are all you need to start a game',
    parapop: 'Tic-Tac-Toe, also known as Noughts and Crosses, is a classic two-player game. Each player takes turns marking a 3x3 grid with their symbol—either an "X" or an "O". The objective is to be the first to align three of your symbols in a horizontal, vertical, or diagonal row. Its a simple yet strategic game that helps develop critical thinking and foresight. Perfect for all ages, Tic-Tac-Toe offers quick, engaging gameplay. Whether you are looking for a fun way to pass the time or a competitive challenge, this timeless game is sure to entertain. Play now and test your skills',
    tech: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://queenijain.github.io/Tic-Tac-Toe/',
    livelink: 'https://queenijain.github.io/Tic-Tac-Toe/',
  },
  {
    img: 'Images/Melody.jpg',
    title: 'Melodify',
    skill: ['Music', 'Front-End Dev', '2023'],
    para: 'Melodify is a classic music app. This music app is a web-based platform designed for seamless audio playback, allowing users to play a song',
    parapop: 'This music app provides users with a seamless listening experience. Created using HTML for structure, CSS for styling, and JavaScript for dynamic interactions, it allows users to play, and control a selection of music tracks with an intuitive interface. With responsive design for mobile and desktop, this app focuses on delivering an enjoyable user experience through clean visuals and smooth audio playback.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://queenijain.github.io/spotifyiii/',
    livelink: 'https://queenijain.github.io/spotifyiii/',
  },
{
  img: 'Images/weather.jpg',
  title: 'Todays Weather',
  skill: ['Weather', 'Front End Dev', '2023'],
  para: 'The Weather App is based on India Weather Forecast. Fetching Data from open source weather Api and renders on web app.',
  parapop: 'The Weather App is based on India Weather Forecast. It is a digital platform designed to provide users with accurate and up-to-date information about current weather conditions .It provides real-time information on current weather conditions.This seamless integration between web and mobile platforms ensures that users can stay connected to the weather wherever they may be, empowering them to make informed decisions and stay safe in any conditions',
  tech: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://seeweatherforcast.vercel.app/',
  livelink: 'https://seeweatherforcast.vercel.app/',
},
{
  img: 'Images/qr-image.jpg',
  title: 'QR-Generator',
  skill: ['Make QR', 'Front End Dev', '2023'],
  para: 'A QR generator app simplifies the creation of Quick Response (QR) codes, streamlining the process of encoding information into these square barcodes.',
  parapop: 'A QR generator app simplifies the creation of Quick Response (QR) codes, streamlining the process of encoding information into these square barcodes. With intuitive interfaces and user-friendly features, these apps allow users to generate QR codes for various purposes, including website URLs, contact information, Wi-Fi credentials, and more. Users can customize the appearance and size of the codes, as well as choose from different encoding formats. Whether for business or personal use, QR generator apps offer a convenient and efficient solution for sharing and accessing information in todays digital world.',
  tech: ['HTML5', 'CSS3', 'JavaScript'],
  source: 'https://queenijain.github.io/QR-maker/',
  livelink: 'https://queenijain.github.io/QR-maker/',
},
{
  img: 'Images/Waffle.jpg',
  title: 'Waf-Delight',
  skill: ['Desserts', 'Front End Dev', '2023'],
  para: 'Welcome to Waf-Delight where every bite is a journey of flavors! Dive into our diverse menu, featuring an array of delectable waffles, ice creams, and cakes crafted to satisfy every craving',
  parapop: 'Developed an online ordering platform for waffles, ice cream, and cakes, It Elevate you a culinary journey with React, Redux, and Bootstrap, enhancing user experience and interface. Featuring advanced functionality like add to cart, From classic favorites to unique, innovative combinations, each dessert is designed to bring joy and indulgence to your day. Treat yourself to the perfect pairing of warm waffles, creamy ice creams, and rich cakes, all made with high-quality ingredients and a love for sweet delights. Join us and experience dessert like never before!',
  tech: ['React', 'Redux', 'Bootstrap'],
  source: 'https://waf-delight-7rpyxeyt3-queenijains-projects.vercel.app/',
  livelink: 'https://waf-delight-7rpyxeyt3-queenijains-projects.vercel.app/',
},
{
  img: 'Images/helpHub.jpg',
  title: 'Help-Hub',
  skill: ['Raise Ticket','Full Stack Dev', '2024'],
  para: 'The Help-Hub is a robust, full-stack application built on the MERN stack, allowing users to authenticate and then raise tickets to report issues or problems effectively',
  parapop: 'Developed dynamic and responsive user interfaces using React.js, Utilized React-Router for smooth and intuitive navigation, created RESTful APIs with Express.js for efficient client-server communication.Through a user-friendly interface, users can describe their issues, submit tickets, and track the resolution progress, enabling streamlined communication and efficient problem resolution. The platform is designed to ensure quick access to support and enhance overall user satisfaction by facilitating responsive customer service',
  tech: ['React', 'Redux', 'Express','Node js', 'MongoDB'],
  source: 'https://front-end-support.vercel.app/',
  livelink: 'https://front-end-support.vercel.app/',
},
{
  img: 'Images/Music.webp',
  title: 'Rhythmrise',
  skill: ['Learn Music','Full Stack Dev','2024'],
  para: 'Rythmrise is a music education platform developed with Next.js that provides a diverse range of music courses, catering to beginners and advanced learners alike',
  parapop: 'Developed a music school website using Next.js, enhancing the user experience withfast-loading pages and dynamic content.The website is designed to offer structured, engaging content, covering different genres, instruments, and musical techniques. Utilized Acertinity UI and custom styling to create an engaging and aesthetically pleasing designing, Rythmrise aims to inspire creativity, helping users master music fundamentals while nurturing their unique musical journey.',
  tech: ['NextJS', 'Typescript'],
  source: 'https://music-next-seven.vercel.app/',
  livelink: 'https://music-next-seven.vercel.app/',
}
];

// Use this Objects in Function Below
const ProjectsCard = document.getElementById('work');
function show(index) {
  ProjectsCard.innerHTML
  += `<div class="work-card"> 
  <div class="work-img">
      <img class="img1" src="${Projects[index].img}">
  </div>
  <div class="work-detials">
      <h2>${Projects[index].title}</h2>
      <div class="align">
          <ul>
              <span>${Projects[index].skill[0]}</span>
              <li>${Projects[index].skill[1]}</li>
              <li>${Projects[index].skill[2]}</li>
          </ul>
      </div>
      <p>${Projects[index].para}</p>
      <div class="tags">
          <ul class="hash">
              <li class="HTML">${Projects[index].tech[0]}</li>
              <li class="CSS">${Projects[index].tech[1]}</li>
              <li class="JavaScript">${Projects[index].tech[2]}</li>
          </ul>
      </div>
      <div class="submit">
          <button type = "button" class = "popup-button" id = "popupButton">See Project</button>
      </div>
  </div>
</div>`;
}
// For Loop to Deal with Array of Objects;
for (let i = 0; i < Projects.length; i += 1) {
  show(i);
}
// Pop Up Configurations;
const PopUpWindow = document.getElementById('PopupDetials');
function PopUp(index) {
  const project = Projects[index];
  PopUpWindow.innerHTML = `
  <div class = "Modal-bg">
  <div class="Modal">
      <div class="Modal-Title">
        <h2 class="heading">${project.title}</h2>
        <button type="button" class="close-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" class="close-popup" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="close-popup" fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#67798E"/>
          </svg>
        </button>
      </div>
      <div class="align">
        <ul>
          <span>${project.skill[0]}</span>
          <li>${project.skill[1]}</li>
          <li>${project.skill[2]}</li>
        </ul>
      </div>
      <div class="work-img">
        <img class="img1" src="${project.img}">
      </div>
      <div class = 'desktop-pop'>
      <p>${project.parapop}</p>
      <div class = "deskpop">
      <div class="tags">
        <ul class="hash">
          <li class="HTML">${project.tech[0]}</li>
          <li class="CSS">${project.tech[1]}</li>
          <li class="JavaScript">${project.tech[2]}</li>
        </ul>
      </div>
      <hr>
      <div class="modal-buttons">
      <a href="${project.livelink}"><button type="button" class="see-live">See Live<img src="Images/livelink.svg"></button></a>
      <a href="${project.source}"><button type="button" class="see-source">See Source<img src="Images/blue.png"></button></a>
      </div>
      </div>
    </div>
    </div>
    </div>`;
  // Add event listener to close button
  const closeButton = PopUpWindow.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    PopUpWindow.innerHTML = ''; // Clear the popup window content
  });
}

// Get all the buttons that trigger the popups
const popupButtons = document.querySelectorAll('.popup-button');

// Add click event listeners to the popup buttons
popupButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    PopUp(index);
  });
});

// Form Validation by JS
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    error.innerHTML = 'Email must be in Lower Case, The form is not sent .';
  }
});

// Form Data Preservation in Browser
const name1 = document.getElementById('name');
const email1 = document.getElementById('email');
const textarea = document.getElementById('textarea');
function setData() {
  const userData = {
    Name: name1.value,
    Email: email1.value,
    TextArea: textarea.value,
  };

  localStorage.setItem('userData', JSON.stringify(userData));
}

form.addEventListener('input', setData);

function getData() {
  const getInfo = JSON.parse(localStorage.getItem('userData'));
  name1.value = getInfo.Name;
  email1.value = getInfo.Email;
  textarea.value = getInfo.TextArea;
}

getData();

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("resumeBtn").addEventListener("click", function() {
    window.location.href = "https://online.flippingbook.com/view/657880762/";
  });
});
