const imageContainer = document.querySelector(".image_container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x =0;
let tim ;
prevEl.addEventListener('click',()=>{
    x = x + 45;
    clearTimeout(tim)
    updateGallery()
});
nextEl.addEventListener('click',()=>{
    x = x - 45;
    clearTimeout(tim)
    updateGallery()
});
function updateGallery(){
    imageContainer.style.transform = 'perspective(1000px) rotateY('+x+'deg)';
    tim = setTimeout(()=>{
        x = x- 45;
        updateGallery()
    },2000);
}
updateGallery()