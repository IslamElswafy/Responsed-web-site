function myFunction() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction1() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction2() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction3() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction4() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction5() {
    var dots = document.getElementById("dots6");
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn6");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction6() {
    var dots = document.getElementById("dots7");
    var moreText = document.getElementById("more7");
    var btnText = document.getElementById("myBtn7");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction7() {
    var dots = document.getElementById("dots8");
    var moreText = document.getElementById("more8");
    var btnText = document.getElementById("myBtn8");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction8() {
    var dots = document.getElementById("dots9");
    var moreText = document.getElementById("more9");
    var btnText = document.getElementById("myBtn9");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction9() {
    var dots = document.getElementById("dots10");
    var moreText = document.getElementById("more10");
    var btnText = document.getElementById("myBtn10");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction10() {
    var dots = document.getElementById("dots11");
    var moreText = document.getElementById("more11");
    var btnText = document.getElementById("myBtn11");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction11() {

    var dots = document.getElementById("dots12");
    var moreText = document.getElementById("more12");
    var btnText = document.getElementById("myBtn12");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunction12() {

    var dots = document.getElementById("dots13");
    var moreText = document.getElementById("more13");
    var btnText = document.getElementById("myBtn13");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function breaking_Bad(){
    var xhr =new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200)
        {
            var actor=xhr.responseText;

            displayProduct(actor);
        }
    };
    var url="https://breakingbadapi.com/api/characters"
    xhr.open("get", url, true);
    xhr.send();
}
function displayProduct(p) {

    var jsonData=JSON.parse(p);
    var artist=jsonData;
    var dx = document.getElementById('news_event_section');
    for(i in artist ){
        let e =document.createElement('div')
        e.innerHTML += "name: " + artist[i].name +"<br>";
        e.innerHTML += "birthday : " + artist[i].birthday +"<br>";
        e.innerHTML += "statue : " + artist[i].status +"<br>";
        e.innerHTML += "nickname : " + artist[i].nickname +"<br>";
        e.innerHTML += "category : " + artist[i].category +"<br>";
        e.innerHTML += "<img src ="+ artist[i].img +"><br>" ;
        e.setAttribute("class","news_event_section")
        dx.appendChild(e);
    }


}
function correct_name(tag) {
    tag.style.backgroundColor='white';
    var str =tag.value;
    if(str.length<=3){
        document.getElementById("lab").innerHTML="invalid name"+"<img src='Valid%20_%20Not%20Valid%20Images/notvalid.png' style='width: 50px;' >";
        tag.select();
        tag.focus();
        return 0;
    }
    else{
        document.getElementById("lab").innerHTML="name is ok "+"<img src='Valid%20_%20Not%20Valid%20Images/valid.png' style='width: 50px;'  >";
        return 1;
    }
}
function confirm(tag){
    let str = document.getElementById("password1").value;
    let str2 = tag.value;
    if(str!=str2){
        document.getElementById("pass").innerHTML="password and repeat password should be the same" + "<img src='Valid%20_%20Not%20Valid%20Images/notvalid.png' style='width: 50px;' >";;
        return 0;
    }
    else {
        document.getElementById("pass").innerHTML="confirm password"+"<img src='Valid%20_%20Not%20Valid%20Images/valid.png' style='width: 50px;'  >";
        return  1;
    }
}
function go(e) {
    let name = document.getElementById("name");
    let pass  =document.getElementById('password2');
    name = correct_name(name);
    pass= confirm(pass);
    if (name == 1 && pass == 1){
        e.submit();

    }
    else {
        e.preventDefault();
    }
}
function the_remember() {
    let check = document.getElementById("check");
    if(check.checked==true){
        alert("cheked")
        localStorage.name = document.getElementById("name").value;
        localStorage.password1 = document.getElementById("password1").value;
        localStorage.password2 = document.getElementById("password2").value;
        localStorage.mail = document.getElementById("mail").value;
    }
    else {
        if (localStorage.name){
            localStorage.removeItem("name");
            localStorage.removeItem("mail");
        }
        if (localStorage.password1){
            localStorage.removeItem("password1");
            localStorage.removeItem("password2");
        }
    }
}
function getLocalStorage(){
    if (localStorage.name)
    {
        document.getElementById("name").value=localStorage.name;
        document.getElementById("mail").value=localStorage.mail;
    }

    if (localStorage.password1)
    {
        document.getElementById("password1").value=localStorage.password1;
        document.getElementById("password2").value=localStorage.password2;
    }
}
function open_window() {

    setInterval(function () {
        window.scrollBy(0,100);},2000);
}
function correct_name2(tag) {
    tag.style.backgroundColor='white';
    var str =tag.value;
    if(str.length<=3){
        document.getElementById("lab2").innerHTML="invalid name"+"<img src='Valid%20_%20Not%20Valid%20Images/notvalid.png' style='width: 50px;' >";
        tag.select();
        tag.focus();
        return 0;
    }
    else{
        document.getElementById("lab2").innerHTML="name is ok "+"<img src='Valid%20_%20Not%20Valid%20Images/valid.png' style='width: 50px;'  >";
        return 1;
    }

}
function correct_mail(tag) {
    tag.style.backgroundColor = 'white';
    var str = tag.value;
    var regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // var t =regx.text(str);
    if (regx.test(str)==false){
        document.getElementById("mail2").innerHTML = "invalid mil" + "<img src='Valid%20_%20Not%20Valid%20Images/notvalid.png' style='width: 50px;' >";
        tag.select();
        tag.focus();
        return 0;
    } else {
        document.getElementById("mail2").innerHTML = "mail is ok " + "<img src='Valid%20_%20Not%20Valid%20Images/valid.png' style='width: 50px;'  >";
        return 1;
    }
}
function go2(e) {
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let mail  =document.getElementById('mail')
    // let subject  =document.getElementById('subject')
    if (correct_name(first_name)== 1 && correct_name2(last_name) == 1&& correct_mail(mail)==1){
        alert("hi    "+first_name.value+"  "+last_name.value+"   we sent your message  and your mail is       "+mail.value);
        e.submit();

    }
    else {
        e.preventDefault();
    }
}

function changeOpacity(t) {
    t.style.borderRadius= '50%';
    t.style.opacity = .3;
}
function changeOpacity2(t) {
    t.style.borderRadius = '20%';
    t.style.opacity = 1;
}
