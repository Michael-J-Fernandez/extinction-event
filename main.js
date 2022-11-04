let speciesCross = document.querySelectorAll('ol li');

function speciesCrossFunc() {

    for (let i = 0; i < speciesCross.length; i++) {

        speciesCross[i].addEventListener('click', () => {
            console.log(speciesCross[i].innerText);
            speciesCross[i].style.textDecoration = 'line-through';
        })
    }
}

speciesCrossFunc();




let speciesFade = document.querySelectorAll('ul li');

function speciesFadeFunc(){
    
    for (let i = 0; i < speciesFade.length; i++) {
        
        speciesFade[i].addEventListener('click', () => {
            console.log(speciesFade[i].innerText);
            speciesFade[i].style.opacity = '0';
        })
    }
}

speciesFadeFunc()




let dinoCollapse = document.querySelectorAll('#row img');

function dinoCollapseFunc(){

    for (let i = 0; i < dinoCollapse.length; i++) {
        
        dinoCollapse[i].addEventListener('click', () => {
            console.log(dinoCollapse[i].innerText);
            dinoCollapse[i].style.width = '0px'
        })
    }
}

dinoCollapseFunc();




let meteor = document.querySelector('#destroy-all');

function destroyAll() {

    meteor.addEventListener('click', () => {

        for (let i = 0; i < speciesCross.length; i++) {
            speciesCross[i].style.textDecoration = 'line-through';
        }

        for (let i = 0; i < speciesFade.length; i++) {
            speciesFade[i].style.opacity = '0';
        }

        for (let i = 0; i < dinoCollapse.length; i++) {
            console.log(dinoCollapse[i].innerText);
            dinoCollapse[i].style.width = '0px'
        }
    })
}

destroyAll();