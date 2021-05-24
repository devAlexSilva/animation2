const flakes = document.querySelector('.animed');
const main = document.querySelector('main');
const btnColor = document.querySelector('#btnColor');




btnColor.addEventListener('click', (enviando) => {
    enviando.preventDefault();
/*----------------------------------------------------------*/
    let textColor = document.querySelector('#textColor');
    let fieldColor = textColor.value;


    let texQuantidade = document.querySelector('#textQuantidade');
    let fieldQuantidade = texQuantidade.value;

    let textSpeed = document.querySelector('#textSpeed');
    let fieldTime = textSpeed.value;

    let textSize = document.querySelector('#textSize');
    let fieldSize = textSize.value;

 /*----------------------------------------------------------*/   
        let verification = [...document.querySelectorAll('.animed li')];
        verification.forEach(element => {
            flakes.removeChild(element)
        });
    

    for (let i = 0; i < fieldQuantidade; i++) {

        let li = document.createElement('li');

        function randonization(max, min) {
            return Math.ceil(Math.random() * (max - min) + min);
        }


        /*let size = randonization(fieldSize);*/
        let delay = randonization(0.1, 4);
        /*let timeDuration = randonization(fieldSpeed);*/
        let position = randonization(1, 98);
        /* let bgColor = randonization(1,250);*/

        li.style.backgroundColor = `rgb(${fieldColor})`;

        li.style.width = `${fieldSize}px`;
        li.style.height = `${fieldSize}px`;

        li.style.left = `${position}%`;
        li.style.top = `-${fieldSize}%`;

        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${fieldTime}s`;
        /* li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()},)`;*/


        flakes.appendChild(li);
        
    }



    
    
});

