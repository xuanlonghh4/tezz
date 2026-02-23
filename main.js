const banner = document.getElementById('banner-id');
const bannerImageUrl = ['central-cee.jpg', 'chicano-style.avif', 'crow-zero-uniform.png'];
const preButton = document.getElementById('pre-btn');
const nextButton = document.getElementById('next-btn');
const bannerTitle = document.getElementById('banner-title');
const bannerContent = document.getElementById('banner-content');

const loginFormContainer = document.querySelector('.login-form-container');
const loginForm = document.getElementById('form');
const menuSelectLogin  = document.getElementById('menu-select-login');
const formExitButton = document.getElementById('exit-btn');

const menu = document.getElementById('menu');



const tit = ['Hong Kong 1990s', 'D r i p S t y l e', 'C h i c a n o', 'G a k u r a n', 'O l d  S k o o l'];
const content = ['"The fashion is distinctly cinematic, edgy, and incredibly captivating ..."',
'"Drip style is a statement of individuality, where style ignites as a challenge ..."',
'"A place where rebellious individuality is woven from a gritty street culture heritage ..."',
'"When Japanese school uniforms merge into the flow of fashion... "',
'"Raw, oversized, and a proud statement of struggle and street soul ..."'];

// Khởi tạo nội dung lần đầu cho banner khi web chạy 
let i = 1;
banner.style.backgroundImage = `url(./images/img-${i}.png)`;
bannerTitle.textContent = `${tit[i-1]}`;
bannerContent.textContent = `${content[i-1]}`;

banner.style.transition = '1s';
bannerTitle.style.transition = '1s';
bannerContent.style.transition = '1s';

// hàm bắt sự kiện banner và button preButton, next
function upDateBanner(){
    banner.style.backgroundImage = `url(./images/img-${i}.png)`;
    bannerTitle.textContent = `${tit[i-1]}`;
    bannerContent.textContent = `${content[i-1]}`;
}

nextButton.addEventListener('click', ()=>{
    i++;
    if(i > 5) i = 1;
    upDateBanner();
    // bannerContentTranForm();
});

preButton.addEventListener('click', ()=>{
    i--;
    if(i < 1) i = 5;
    upDateBanner();
    // bannerContentTranForm();
});

//bật tắt loging form
loginFormContainer.style.display = 'none';

menuSelectLogin.addEventListener('click', ()=>{
    loginFormContainer.style.display = 'flex';
});

formExitButton.addEventListener('click', ()=>{
    loginFormContainer.style.display = 'none';
});


// hàm hiệu ứng chữ chạy trên banner
// function bannerContentTranForm(){
//     let j = 0;
//     bannerContent.textContent = '';
//     if(j < content[i-1].length){
//         typingInterval = setInterval(()=>{
//             bannerContent.textContent += `${content[i-1].charAt(j)}`
//             j++;
//         }, 10);
//     }
//     else{
//         clearInterval(typingInterval);
//     }
// }

// // load trang web lần đầu
// document.addEventListener('DOMContentLoaded', bannerContentTranForm());


const miniMenuBtn = document.getElementById("mini-menu-btn");
const mainMenu = document.querySelector(".main-menu");
const miniMenuBtnImg = document.getElementById("mini-menu-btn-img");

let checkMiniMenuBtn = false;

miniMenuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('is-transparent');

    checkMiniMenuBtn = !checkMiniMenuBtn;

    miniMenuBtnImg.src = checkMiniMenuBtn 
        ? './images/icon/x.png' 
        : './images/icon/menu-icon.png';
});

 
