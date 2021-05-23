const star = document.querySelector('.star');
const main = document.querySelector('main');
const btn = document.querySelector('.enviar');


function action(enviando) {
    enviando.preventDefault();

    let text = document.querySelector('#textColor');
    let cor = text.value;

    
    
   
    /**-------------------------- */

    for (let i = 0; i < 5; i++){

        let li = document.createElement('li');
        
        function randonization(max, min) {
            return Math.ceil(Math.random() * (max - min) + min);
        }
    
        let size = randonization(7,5);
        let delay = randonization(0.1, 4);
        let timeDuration = randonization(10, 7);
        let position = randonization(1, 98);
       /* let bgColor = randonization(1,250);*/
    
        li.style.backgroundColor = `rgb(${cor})`;
    
        li.style.width = `${size}px`;
        li.style.height = `${size}px`;
    
        li.style.left = `${position}%`;
        li.style.top = `-${size}%`;
    
        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${timeDuration}s`;
       /* li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()},)`;*/
        
       
        star.appendChild(li);
       
    }
    
    console.log(`cor: ${cor}`);
    
}


btn.addEventListener('click', action);

