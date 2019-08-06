const Menu = document.getElementById("toolbar");
document.getElementById('Aboutmenu').addEventListener('click', menuclickAbout)
function menuclickAbout(){
    document.getElementById('Abouttext').scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"});
}
document.getElementById('backgroundmenu').addEventListener('click', menuclickbackstory)
function menuclickbackstory(){
    (document.getElementById('backstory')).scrollIntoView({behavior:"smooth", block: "start", inline: 'start'});
}
document.getElementById('Featuredmenu').addEventListener('click', menuclickFeatured)
function menuclickFeatured(){
    document.getElementById('Featured').scrollIntoView({behavior:"smooth", block: "start", inline: "start"});
}
document.getElementById('Future-Goalmenu').addEventListener('click', menuclickFuture)
function menuclickFuture(){
    document.getElementById('Future-Goal').scrollIntoView({behavior:"smooth", block: "start"});
}
document.getElementById('Familymenu').addEventListener('click',menuclickFamily)
function menuclickFamily(){
    document.getElementById('Family').scrollIntoView({behavior:"smooth", block: "start", inline: "start"});
}
document.getElementById('Picture').addEventListener('click',menuclickPicture)
function menuclickPicture(){
    document.getElementById('imgAbout').scrollIntoView({behavior:"smooth", block: "start", inline: "start"});
}

document.getElementById('Resume').addEventListener('click', resumeURL)
function resumeURL(){
    window.location.href = "resume.pdf";
}