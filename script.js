function heroboxVideoPlay(){
    var playButton = document.querySelector(".herobox .play_button");
var video = document.querySelector(".herobox .video video")


var click = 0
playButton.addEventListener("click",function(){
    if(click == 0){
        video.play()
        click = 1
    }
    else{
        video.pause()
        click = 0
    }
})
}
heroboxVideoPlay()



function SectionTwoVideoPlay(){
    var playButton = document.querySelector(".section_2 .play_button");
var video = document.querySelector(".section_2 .video video")


var click = 0
playButton.addEventListener("click",function(){
    if(click == 0){
        video.play()
        click = 1
    }
    else{
        video.pause()
        click = 0
    }
})
}
SectionTwoVideoPlay()



// /* <==================================== Navbar Coded Here ===========================================> */

gsap.to(".nav",{
    y : 120,
    duration : 1
})


// /* <==================================== Herobox Coded Here ===========================================> */

function herobox(){
    var tl = gsap.timeline();

tl.from(".herobox h1",{
    opacity: 0,
    y : "80%",
    duration : 1
})
tl.from(".herobox p",{
    opacity: 0,
    duration : 1
})
tl.to(".herobox a",{
    opacity: 1,
    duration : 1
})
tl.to(".herobox .play_button i",{
    opacity: 1,
    duration : 1
}, 'a')
tl.to(".herobox .animated_circle",{
    opacity: 1,
    duration : 1
}, 'a')
}
herobox();

/* <==================================== Section no 1 Coded Here ===========================================> */


function sectionOne(){
    gsap.from(".card_wrapper .card_1",{
        opacity : 0,
        duration : 1,
        ease : Power2,
        y : "50%",
        scrollTrigger : {
            trigger : ".card_wrapper",
            toggleActions : "play complete complete reverse",
            start : "top 80%",
            end : "bottom 0%"
        }
    })
    
    gsap.from(".section_1 .image_wrapper_section_1",{
        x : "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .image_wrapper_section_1",
            start : "top 70%",
            end : "bottom 50%"
        }
    })
    gsap.from(".section_1 .commas_image",{
        x : "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .commas_image",
        }
    })
    gsap.from(".section_1 .text_container_section_1",{
        x : "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .text_container_section_1",
        }
    })
    gsap.from(".section_1 .skew_box",{
        x : "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .skew_box",
        }
    })
    
    gsap.from(".section_1 .right_content_section_1 h2",{
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .right_content_section_1 h2",
            start : "top 70%",
            end : "bottom 0%"
        }
    })
    gsap.from(".section_1 .right_content_section_1 h1",{
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .right_content_section_1 h1",
            start : "top 80%",
            end : "bottom 10%"
        }
    })
    gsap.from(".section_1 .right_content_section_1 p.para_1",{
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .right_content_section_1 p.para_1",
            start : "top 80%",
            end : "bottom 10%"
        }
    })
    gsap.from(".section_1 .right_content_section_1 .side_line_section_1",{
        scaleY : 0,
        duration : 1,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .right_content_section_1 .side_line_section_1",
            start : "top 80%",
            end : "bottom 10%"
        }
    })
    gsap.from(".section_1 .right_content_section_1 p.para_2",{
        y : 30,
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .right_content_section_1 p.para_2",
            start : "top 80%",
            end : "bottom 10%"
        }
    })
    gsap.from(".section_1 .right_content_section_1 p.para_3",{
        y : 30,
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .right_content_section_1 p.para_3",
            start : "top 70%",
            end : "bottom 10%"
        }
    })
    gsap.from(".section_1 .right_content_section_1 a",{
        y : 30,
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_1 .right_content_section_1 a",
            start : "top 70%",
            end : "bottom 10%"
        }
    })
}

sectionOne()

/* <==================================== Section no 2 Coded Here ===========================================> */


function sectionTwo(){
    gsap.from(".section_2 .container .row1:nth-child(1) .col_1:nth-child(1)",{
        y: "50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_2 .container",
            start : "top 60%"
        }
    })
    gsap.from(".section_2 .container .row1:nth-child(1) .col_1:nth-child(2)",{
        y: "50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_2 .container",
            start : "top 60%"
        }
    })
    gsap.from(".section_2 .container .row1:nth-child(1) .col_1:nth-child(3)",{
        y: "50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_2 .container",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_2 .container .row1:nth-child(2) .col_1:nth-child(1)",{
        y: "50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_2 .container",
            start : "top 60%"
        }
    })
    gsap.from(".section_2 .container .row1:nth-child(2) .col_1:nth-child(2)",{
        y: "50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_2 .container",
            start : "top 60%"
        }
    })
    gsap.from(".section_2 .container .row1:nth-child(2) .col_1:nth-child(3)",{
        y: "50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_2 .container",
            start : "top 60%"
        }
    })
}

sectionTwo();


/* <==================================== Section no 3 Coded Here ===========================================> */

function sectionThree(){
    gsap.from(".section_3 .image_content_box",{
        x: "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 .image_content_box",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_3 .main_image img",{
        x: "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 .main_image img",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_3 h1",{
        y: "20%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 h1",
            start : "top 60%"
        }
    })
    gsap.from(".section_3 .circle_commas",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 .circle_commas",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_3 p.paragraph_1_section3",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 p.paragraph_1_section3",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_3 .profile_pic",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 .profile_pic",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_3 h2.name",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 h2.name",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_3 p.passion",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_3 p.passion",
            start : "top 60%"
        }
    })
}

sectionThree();


/* <==================================== Section no 4 Coded Here ===========================================> */


function section4(){
    gsap.from(".section_4 h2.sub_heading",{
        x: "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_4 h2.sub_heading",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_4 h1.main_heading_section4",{
        x: "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_4 h1.main_heading_section4",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_4 p.dummy_text",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_4 p.dummy_text",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_4 .container_section4 .col_1:nth-child(1)",{
        y : 100,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_4 .container_section4 .col_1:nth-child(1)",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_4 .container_section4 .col_1:nth-child(2)",{
        y : 100,
        delay : 1,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_4 .container_section4 .col_1:nth-child(2)",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_4 .container_section4 .col_1:nth-child(3)",{
        y : 100,
        duration : 1,
        delay : 2,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_4 .container_section4 .col_1:nth-child(3)",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_4 p.footer_text",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_4 p.footer_text",
            start : "top 60%",
        }
    })
}

section4();


/* <==================================== Section no 5 Coded Here ===========================================> */

function section5(){
    gsap.from(".section_5 img",{
        scale: 1.2,
        duration : .5,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_5 img",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_5 h1",{
        y : 100,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_5 h1",
            start : "top 80%"
        }
    })
    
    gsap.from(".section_5 p",{
        y : 100,
        duration : 1,
        delay : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_5 p",
            start : "top 80%"
        }
    })
}

section5();

/* <==================================== Section no 6 Coded Here ===========================================> */

function section6(){
    gsap.from(".section_6 .contact_form",{
        y : 100,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_6 .contact_form",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_6 h1.logo_heading",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_6 h1.logo_heading",
            start : "top 60%"
        }
    })
    
    
    gsap.from(".section_6 .logo_wrapper",{
        y : 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_6 .logo_wrapper",
            start : "top 60%"
        }
    })
}

section6();


/* <==================================== Section no 7 Coded Here ===========================================> */

function section7(){
    gsap.from(".section_7 h2.sub_heading",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_7 h2.sub_heading",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_7 h1.main_heading_section7",{
        x : 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_7 h1.main_heading_section7",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_7 p.dummy_text_section_7",{
        y : 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_7 p.dummy_text_section_7",
            start : "top 60%"
        }
    })
    
    gsap.from(".section_7 .container_section7",{
        y : 100,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".section_7 .container_section7",
            start : "top 60%"
        }
    })
}

section7();

/* <==================================== Footer Coded Here ===========================================> */

function footer(){
    gsap.from(".footer .part_1",{
        y: 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".footer .part_1",
            start : "top 60%"
        }
    })
    
    gsap.from(".footer .part_2",{
        y: 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".footer .part_2",
            start : "top 60%"
        }
    })
    
    gsap.from(".footer .part_3",{
        y: 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".footer .part_3",
            start : "top 60%"
        }
    })
    
    gsap.from(".footer .sub_footer",{
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            toggleActions : "play complete complete reverse",
            trigger : ".footer .sub_footer",
        }
    })
}

footer();


// This is for Smooth Scrolling

// (function () {
//     const locomotiveScroll = new LocomotiveScroll();
// })();
