let works=document.querySelectorAll("#work");
works.forEach((work)=>{
   let letters=work.textContent.split("");
   work.textContent=""; 
   letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        work.append(span);
   });
});

let currentWorkIndex=0;
let MaxWorkIndex=works.length-1;
works[currentWorkIndex].style.opacity='1';


let changeText=()=>{
    let currentWork=works[currentWorkIndex];
    let nextWork=currentWorkIndex===MaxWorkIndex?works[0]:works[currentWorkIndex+1];

    Array.from(currentWork.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i*80);
    });

    nextWork.style.opacity='1';
    Array.from(nextWork.children).forEach((letter,i)=>{
         letter.className="letter behind";
         setTimeout(()=>{
            letter.className="letter in";
         },340+i*80);
    });
    currentWorkIndex=currentWorkIndex===MaxWorkIndex? 0: currentWorkIndex+1;
}

changeText();
setInterval(changeText,3000);



///active menu

let menuList=document.querySelector('header ul li a');
let section=document.querySelector("section");

function activeMenu(){
    let len =section.length;

    while(--len && window + scrollY + 97 < section[len].offsetTop){}
    menuList.forEach(sec=> sec.classList.remove('active'));
    menuList[len].classList.add('active');
}

activeMenu();

window.addEventListener("scroll",activeMenu);
