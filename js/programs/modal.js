let cerrar = document.querySelectorAll(".close")[0];
let cerrarV = document.querySelectorAll(".close")[1];
let abrirU = document.querySelector(".cta-u");
let abrirV = document.querySelector(".cta-v");
let modal = document.querySelectorAll(".modal")[0];
let modal2 = document.querySelectorAll(".modal")[1];
let modalU = document.querySelector(".modal-containerU");
let modalV = document.querySelector(".modal-containerV");

abrirU.addEventListener("click", function(e){
    e.preventDefault();
    modalU.style.opacity="1";
    modalU.style.visibility="visible";
    modal.classList.toggle("modal-close");
})

abrirV.addEventListener("click", function(e){
    e.preventDefault();
    modalV.style.opacity="1";
    modalV.style.visibility="visible";
    modal2.classList.toggle("modal-close");
})


cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalU.style.opacity="0";
        modalU.style.visibility="hidden";
    },1000)
})

cerrarV.addEventListener("click", function(){
    modal2.classList.toggle("modal-close");
    setTimeout(function(){
        modalV.style.opacity="0";
        modalV.style.visibility="hidden";
    },1000)
})


window.addEventListener("click", function(e){
    if(e.target == modalU){
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalU.style.opacity="0";
            modalU.style.visibility="hidden";
        },700)
    }

    if(e.target == modalV){
        modal2.classList.toggle("modal-close");
        setTimeout(function(){
            modalV.style.opacity="0";
            modalV.style.visibility="hidden";
        },700)
    }

})