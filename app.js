const cursor = document.querySelector('.cursor');
const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
const aboutMe = document.querySelector('.about');
const links = document.querySelectorAll('nav > .hover-this');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
});

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});

links[0].addEventListener('click', () => {
    if (contact.classList.contains('contactActive') || aboutMe.classList.contains('aboutActive')){
        console.log("perro");
        contact.classList.remove('contactActive');
        aboutMe.classList.remove('aboutActive');
        setTimeout(() => {
            home.classList.add('homeActive')
            links.forEach(element => {
                element.style.color = '#fff'
            });
    }, 1000);
    };
});

links[1].addEventListener('click', () => {
    if (home.classList.contains('homeActive') || aboutMe.classList.contains('aboutActive')){
        home.classList.remove('homeActive');
        aboutMe.classList.remove('aboutActive');
        setTimeout(() => {
            contact.classList.add('contactActive')
            links.forEach(element => {
                element.style.color = '#000'
            });
        }, 1000);
    };
});

links[2].addEventListener('click', () => {
    if (home.classList.contains('homeActive') || contact.classList.contains('contactActive')){
        contact.classList.remove('contactActive');
        home.classList.remove('homeActive');
        setTimeout(() => {
            aboutMe.classList.add('aboutActive')
            links.forEach(element => {
                element.style.color = '#fff'
            });
        }, 1000);
    };
});

(function () {
  
    const animateit = function (e) {
          const span = this.querySelector('span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
  
          move = 10,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
  
          span.style.transform = `translate(${xMove}px, ${yMove}px)`;
  
          if (e.type === 'mouseleave') span.style.transform = '';
    };
  
    links.forEach(b => b.addEventListener('mousemove', animateit));
    links.forEach(b => b.addEventListener('mouseleave', animateit));
  
  })();

// const colors = [
//     '#2196f3',
//     '#e91e63',
//     '#ffeb3b',
//     '#74ff1d',
// ]

// function createSquare() {
//     const body = document.querySelector('body');
//     const square = document.createElement('span');

//     square.classList.add('square');

//     let size = Math.random() * 10;
//     square.style.width = 20 + size + 'px';
//     square.style.height = 20 + size + 'px';

//     square.style.top = Math.random() * innerHeight +'px';
//     square.style.left = Math.random() * innerWidth +'px';

//     const putColors = colors[Math.floor(Math.random() * colors.length)];
//     square.style.background = putColors;

//     body.appendChild(square);

//     setTimeout(() =>{
//         square.remove()
//     }, 5000);
// }

// setInterval(createSquare, 500);