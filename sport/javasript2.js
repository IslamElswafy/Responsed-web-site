var array=["images/14.jpg", "images/20.jpg", "images/32.jpg"];
var array2=["sport.html", "gllary.html","politics.html"];
var dx = document.getElementById('img_button11');
var dx2 =document.getElementById("link_img");
var i = 0;
var j=0;
function prev() {

    if(i<=0) i=array.length;
    i--;
    if(j<=0) j=array2.length;
    j--
    return setimg();
}

function next () {
    if(i>=array.length-1) i=-1
    i++
    if(j>=array.length-1) j=-1
    j++
    return setimg()
}
function setimg(){
    dx2.href= array2[i];
    return dx.setAttribute('src',array[i])
}

