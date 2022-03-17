

let contact = document.getElementById('contact');
let container2 = document.getElementById('container2');
let Projects = document.getElementById('Projects');
let container3 = document.getElementById('container3');



var a = 1;

    Projects.addEventListener('click', () => {
    a++;
    if(a % 2 === 0){
        container3.style.animationName = 'container';
    }else{
        container3.style.animationName = 'containerback';
    }
    
    
    });

    var b = 1;

contact.addEventListener('click', () => {
b++;
if(b % 2 === 0){
    container2.style.animationName = 'move';
}else{
    container2.style.animationName = 'moveback';
}


});

