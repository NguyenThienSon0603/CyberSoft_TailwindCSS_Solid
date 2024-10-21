// create varriables
const icon = document.getElementById("icon");
const line = document.getElementById('line');
const xline = document.getElementById('xline');
const menu = document.getElementById('menu');
const dropdown_item = document.getElementById('dropdown_item');
const featuresImage = document.getElementById('featuresImage');

// change background-color page & change icon moon - sun
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        logo.src = "./Image/logo-dark.svg";
        logofooter.src = "./Image/logo-dark.svg";
        icon.src = "./Image/icon-sun.svg";
        featuresImage.src = "./Image/features-dark-01.svg";
        robustImage.src = "./Image/hero-dark.svg";
        pakedImage.src = "./Image/about-dark-02.svg";
        startupImage.src = "./Image/about-dark-01.webp";

    } else {
        logo.src = "./Image/logo-light.svg";
        logofooter.src = "./Image/logo-light.svg";
        icon.src = "./Image/icon-moon.svg";
        featuresImage.src = "./Image/features-light-01.webp";
        robustImage.src = "./Image/hero-light.svg";
        pakedImage.src = "./Image/about-light-02.svg";
        startupImage.src = "./Image/about-light-01.webp";
    }
}

// visible navigation & change iconMenu
line.onclick = function(){
    line.style.display = 'none';
    xline.style.display = 'block';
    menu.style.display = 'block';
}
xline.onclick = function(){
    line.style.display = 'flex';
    xline.style.display = 'none';
    menu.style.display = 'none';
}

// FAQs
const question = document.querySelectorAll(".question");
question.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let answer = item.querySelector(".answer");
        let answerDark = item.querySelector(".dark-theme .answer");
        if(item.classList.contains("open")){
            answer.style.height = "150px";
            item.querySelector(".fa-solid").classList.replace("fa-plus","fa-minus");
        }
        else{
            answer.style.height = "0px";
            item.querySelector(".fa-solid").classList.replace("fa-minus","fa-plus");

        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    question.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
           
            let desc = item2.querySelector(".answer");
            desc.style.height = "0px";
            item2.querySelector(".fa-solid").classList.replace("fa-minus","fa-plus");
        }
    })
}


// Back to top
(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 100, //time for action srcoll to top
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();


// Scroll Page
window.addEventListener("scroll", function(){
    let header = document.getElementById("header");
    header.style.boxShadow = "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)";
});

window.addEventListener("scroll", scrollPage);
function scrollPage(){
    
    let scrollPageLeft = document.querySelectorAll(".scroll-page-left");
    ScrollPageFull(scrollPageLeft);

    let scrollPageRight = document.querySelectorAll(".scroll-page-right");
    ScrollPageFull(scrollPageRight);

    let scrollPageTop = document.querySelectorAll(".scroll-page-top");
    ScrollPageFull(scrollPageTop);
}
function ScrollPageFull(scrollPageClassName){
    for(var i = 0; i < scrollPageClassName.length; i++){
        let windowHeight = window.innerHeight;
        let top = scrollPageClassName[i].getBoundingClientRect().top;
        let point = 150;

        if(top < windowHeight - point){
            scrollPageClassName[i].classList.add("scroll-page");
            let header = document.getElementById("header");
        }
        else{
            scrollPageClassName[i].classList.remove("scroll-page");
        }
    }
}



// Solid Features
const features = document.querySelectorAll(".features-op");
const title = document.getElementById("features-title");
features.forEach((item, index) => {
    let div = item.querySelector("div");
    div.addEventListener("click", () => {
        item.classList.toggle("active-features");
        removeFeatures(index);

        if(index === 0){
            title.innerHTML = "Solid UI with Solid Features.";
        }
        if(index === 1){
            title.innerHTML = "Pages and UI Components You Need for a SaaS.";
        }
        if(index === 2){
            title.innerHTML = "Functional Blog, DB, Auth and Many More";
        }
    })
})

function removeFeatures(index1){
    features.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("active-features");
        }
    })
}