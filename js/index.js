var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onscroll = (e)=>{
    if (document.body.scrollTop > h/10 || document.documentElement.scrollTop > h/10) {
        //after scroll
        document.getElementById("navbar").classList.add('shadow-lg');
        document.getElementById("navbar").classList.add('bg-white');
        document.getElementById("title").classList.add('text-blue-300');
        document.getElementById("title").classList.remove('text-yellow-400');

    } else {
        //before scroll
        document.getElementById("navbar").classList.remove('shadow-lg');
        document.getElementById("navbar").classList.remove('bg-white');
        document.getElementById("title").classList.remove('text-blue-300');
        document.getElementById("title").classList.add('text-yellow-400');

    }
};

window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

function scrollToId(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

