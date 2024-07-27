let aboutoff=$(".about-me").offset().top;

$(window).on('scroll',function(e){
    let wScroll=$(window).scrollTop();
    console.log(wScroll);
    if(wScroll>90){
        $('.imgOfAboutSection').addClass('animate__animated animate__fadeInLeft');
        $('.aboutMeSection').addClass('animate__animated animate__fadeInRight');

    }
    if(wScroll>860){
        $('.leftServices').addClass('animate__animated animate__slideInLeft');
        $('.middleServices').addClass('animate__animated animate__slideInDown');
        $('.middleUpServices').addClass('animate__animated animate__slideInUp');
        $('.rightServices').addClass('animate__animated animate__slideInRight');

    }
    if(wScroll>aboutoff-50){
        $('.nav-bar').css('cssText',`
            
            background-color: rgba(0, 0, 0, 0.8);
            
            `);
           

    }else{
        $('.nav-bar').css('cssText',`
            
            background-color:transparent;
            
            `);
          
    }


    
})

function forLoop() {
    let count = 0;
    const interval = setInterval(() => {
        // let count = 0;
        count++;
        document.querySelector('.happyCustomers').innerHTML = count;
        if (count === 850) {
            clearInterval(interval);
        }
    }, 5);
   
  
}
  

function completeProjects(){
    let count=0
    const intervalOfProjects = setInterval(() => {
        // let count = 0;
        count++;
        document.querySelector('.completeProjects').innerHTML = count;
        if (count === 230) {
            clearInterval(intervalOfProjects);
        }
    },5);
}
function linesOfCodes(){
     let count = 0;
    const intervalOflinesOfCodes = setInterval(() => {
        
        count+=10;
        document.querySelector('.linesOfCodes').innerHTML = count;
        if (count === 9450) {
            clearInterval(intervalOflinesOfCodes);
        }
    },1);
}
function filesDownlaod(){
     let count = 0;
    const intervalOffilesDownlaod = setInterval(() => {
        
        count++;
        document.querySelector('.filesDownlaod').innerHTML = count;
        if (count === 780) {
            clearInterval(intervalOffilesDownlaod);
        }
    },1);
}

let totalOffset = $(".total").offset().top;
$(window).on('scroll', function(e) {
    let wScroll = $(window).scrollTop();
    if (wScroll > 2570) {
            forLoop();
            completeProjects();
            linesOfCodes();
            filesDownlaod();
    } else {
        document.querySelector('.happyCustomers').innerHTML = '';
        document.querySelector('.completeProjects').innerHTML = '';
        document.querySelector('.linesOfCodes').innerHTML = '';
    }
});









