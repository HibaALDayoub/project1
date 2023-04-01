// scroller
let el = document.querySelector(".scroller");
let hieght =document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",() => {
    let scrollTop =document.documentElement.scrollTop;
    el.style.width =`${(scrollTop/hieght) * 100}%`;
})



// start icon style with color change
let main_color = localStorage.getItem("color-option");
if (main_color != null) {
    document.documentElement.style.setProperty("--main-color", main_color);
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");
        if (element.dataset.color === main_color) {
            element.classList.add("active");
        }
    })
}
// start variable to background image
let backoption = true;
let backgroundInterval;
let backgroundlocalitem = localStorage.getItem("background-option");
if (backgroundlocalitem !== null) {
    document.querySelectorAll(".random_background span").forEach(element => { element.classList.remove("active") });
    if (backgroundlocalitem === 'true') {
        backoption = true;
        document.querySelector(".random_background .yes").classList.add("active");

    } else {
        backoption = false;
        document.querySelector(".random_background .no").classList.add("active");
    }
    // document.querySelectorAll(".random_background span").forEach(element =>{element.classList.remove("active")});
    // if(backgroundlocalitem === 'true'){
    //     // document.querySelector(".random_background .yes").classList.add("active");

    // }else{
    //     document.querySelector(".random_background .no").classList.add("active");
    // }
}
// end variable to background image
//start HIDE OR Show bullets__________________________________________________________________________
let bull = document.querySelector(".nav-bulletes");
let optionspanbull = document.querySelectorAll(".bullets-option span");
let bulletlocalitem = localStorage.getItem("bullets-option");
if (bulletlocalitem !== null) {
    optionspanbull.forEach(sp => {
        sp.classList.remove("active");
    });
    if (bulletlocalitem === 'block') {
        bull.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");
    }
    else {
        bull.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}


optionspanbull.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'Show') {
            bull.style.display = 'block';
            localStorage.setItem("bullets-option", 'block');
        }
        else {
            bull.style.display = 'none';
            localStorage.setItem("bullets-option", 'none');
        }
        handleractive(e)
    })
})

//end HIDE OR Show bullets  ++++++__________________________________________________________________
document.querySelector(".icon").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".sitting").classList.toggle("Open");
}
const colorsli = document.querySelectorAll(".color-list li");
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);
        // e.target.parentElement.querySelectorAll(".active").forEach( Element =>{
        //     Element.classList.remove("active");
        //     e.target.classList.add("active")
        // })
        handleractive(e);
    })
})
const backgr = document.querySelectorAll(".random_background span");
backgr.forEach(li => {
    li.addEventListener("click", (e) => {
        // e.target.parentElement.querySelectorAll(".active").forEach( Element =>{
        //     Element.classList.remove("active");
        //     e.target.classList.add("active");
        // })
        handleractive(e);

        if (e.target.dataset.background === 'yes') {
            backoption = true;
            randomizeimg();
            localStorage.setItem("background-option", true);


        } else {
            backoption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false);
        }

    })
})
// end icon style with color change

// start backgroundImage
let landpag = document.querySelector(".landing-page");
let imgsarray = ["a.jpg", "b.jpg", "c.jpg", "d.jpg"];

function randomizeimg() {
    if (backoption === true) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsarray.length);
            landpag.style.backgroundImage = 'url("images/' + imgsarray[randomNumber] + '")';
        }, 1000);
    }
}
randomizeimg();

// end backgroundImage
//scroll
let ourskill = document.querySelector(".our_skills");
window.onscroll = function () {
    let skillsoffsettop = ourskill.offsetTop;
    // this.console.log(skillsoffsettop);
    let skillouterheight = ourskill.offsetHeight;
    //    this.console.log(skillouterheight);
    let windowheight = this.innerHeight;
    // console.log(windowheight);
    let windowscrolltop = this.pageYOffset;
    if (windowscrolltop > (skillsoffsettop + skillouterheight - windowheight)) {

        let allskill = document.querySelectorAll(".skill_box .skill_progress span");
        allskill.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
}
// end scroll
// start our gallery
let ourgallary = document.querySelectorAll(".our_gallery img");
ourgallary.forEach(img => {
    img.addEventListener('click', (e) => {

        let oveylay = document.createElement("div");
        oveylay.className = "popup-overlay";

        document.body.appendChild(oveylay);
        //start view picture
        let popupbox = document.createElement("div");
        popupbox.className = "popup-Box";

        //start view alt img 
        if (img.alt !== null) {
            let imgheading = document.createElement("h3");
            let imgtext = document.createTextNode(img.alt);
            imgheading.appendChild(imgtext);
            popupbox.appendChild(imgheading);
        }
        //end view alt img 

        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupbox.appendChild(popupImage);
        document.body.appendChild(popupbox);
        //end view picture
        //start close image "x"
        let closebutton = document.createElement("span");
        let closebuttontext = document.createTextNode("X");
        closebutton.appendChild(closebuttontext);
        closebutton.className = 'close-button';
        popupbox.appendChild(closebutton);
        //end close image "x"
        //close popup
        document.addEventListener("click", (e) => {
            if (e.target.className == 'close-button') {
                e.target.parentNode.remove();
                document.querySelector(".popup-overlay").remove();
            }
        })
    })
})
// start scroll bulletes and link
const allbullet = document.querySelectorAll(".nav-bulletes .bullete");
// allbullet.forEach(bull => {
//     bull.addEventListener("click",(e)=>{
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// })
const allskill = document.querySelectorAll("ul a");
// allskill.forEach(skl => {
//     skl.addEventListener("click",(e)=>{
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// })
function scrollto(e) {
    e.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
scrollto(allskill);
scrollto(allbullet);
// end scroll bulletes and link
function handleractive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(Element => {
        Element.classList.remove("active");
        ev.target.classList.add("active");
    })
}
//reset__________________
document.querySelector(".reset").onclick = function () {
    localStorage.removeItem("bullets-option");
    localStorage.removeItem("background-option");
    localStorage.removeItem("color-option");
    // localStorage.clear();
    window.location.reload();
}
//start links___________________________________
let menu = document.querySelector(".icon-link");
let links = document.querySelector(".alllinks");
menu.onclick = function (e) {
    e.stopPropagation();
    //لما بنقر ع الايقون بيظهر السهم واللينكات
    this.classList.toggle("menulist");
    links.classList.toggle("open");
}
document.addEventListener("click", (e) => {
    if (e.target !== menu && e.target !== links) {
        if (links.classList.contains("open")) {
            menu.classList.toggle("menulist");
            links.classList.toggle("open");
        }
    }
})
links.onclick = function (e) {
    e.stopPropagation();
}

