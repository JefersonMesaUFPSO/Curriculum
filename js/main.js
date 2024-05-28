let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let ico_hamburguer = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(ico_hamburguer){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        ico_hamburguer= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#2b9ed8";
        ico_hamburguer= true;
    }

    enlaces_header.classList.toggle("hamburgueropen");
})

document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburguer")[0].style.color ="#000";
})



// Funcion para colocar una transición mas lenta a los hipervinculos del nav

const links  = document.querySelectorAll('.link');

links.forEach( (link) => {
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        const element = document.querySelector(link.getAttribute('href'));

        element.scrollIntoView({block: "start", behavior: "smooth"});
    });
});