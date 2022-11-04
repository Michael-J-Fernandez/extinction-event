let speciesCross = document.querySelectorAll('ol li');

speciesCross.forEach(dinoItem => {

    dinoItem.addEventListener('click', () => {
        console.log(dinoItem.innerText);
        dinoItem.style.textDecoration = 'line-through';
    })
})




let speciesFade = document.querySelectorAll('ul li');

speciesFade.forEach(dinoItem => {
    
    dinoItem.addEventListener('click', () => {
        console.log(dinoItem.innerText);
        dinoItem.style.opacity = '0';
    })
})




let dinoCollapse = document.querySelectorAll('#row img');

dinoCollapse.forEach(dinoItem => {
    
    dinoItem.addEventListener('click', () => {
        console.log(dinoItem.innerText);
        dinoItem.style.width = '0px'
    })
})




let meteor = document.querySelector('#destroy-all');

meteor.addEventListener('click', () => {

    speciesCross.forEach(dinoItem => {
        dinoItem.style.textDecoration = 'line-through';
    })

    speciesFade.forEach(dinoItem => {
        dinoItem.style.opacity = '0';
    })

    dinoCollapse.forEach(dinoItem => {
        dinoItem.style.width = '0px';
    })
})