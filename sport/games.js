var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "./images/images/blank.jpg";
            tile.addEventListener("dragstart", dragStart);  
            tile.addEventListener("dragover", dragOver);    
            tile.addEventListener("dragenter", dragEnter);  
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);      
            document.getElementById("board").append(tile);
           }
    }
     
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString());  
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

         
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) { 
        let tile = document.createElement("img");
        tile.src = "./images/images/" + pieces[i] + ".jpg";
         
        tile.addEventListener("dragstart", dragStart);  
        tile.addEventListener("dragover", dragOver);    
        tile.addEventListener("dragenter", dragEnter);  
        tile.addEventListener("dragleave", dragLeave);  
        tile.addEventListener("drop", dragDrop);        
        tile.addEventListener("dragend", dragEnd);       

        document.getElementById("pieces").append(tile);
    }
}


function dragStart() {
    currTile = this;  
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;  
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
const arr = new Array(
    'file:///E:/ITI/assignment/JS/project/sport/images/images/1.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/2.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/3.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/4.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/5.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/6.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/7.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/8.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/9.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/10.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/11.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/12.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/13.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/14.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/15.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/16.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/17.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/18.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/19.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/20.jpg',
     'file:///E:/ITI/assignment/JS/project/sport/images/images/21.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/22.jpg',
     'file:///E:/ITI/assignment/JS/project/sport/images/images/23.jpg','file:///E:/ITI/assignment/JS/project/sport/images/images/24.jpg',
    'file:///E:/ITI/assignment/JS/project/sport/images/images/25.jpg',)
function img(){
    imgages = document.querySelectorAll('#board img');
    for (let i = 0; i < imgages.length; i++) {
        if (imgages[i].src == arr[i]){
            continue;
        }
        else{
            console.log(imgages[i].src);
            alert("no no no no  no no no no no");
            return false;
        }
    }
    alert('yes Excellent');
}