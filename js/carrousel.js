////base des fonctions du carrousel

(function(){
    console.log('début du carrousel')
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let boutcarrousel =document.querySelector('.carrousel');
    let boutcarrousel__x = document.querySelector('.carrousel__x');
    boutcarrousel__ouvrir.addEventListener('mousedown', function(){

    boutcarrousel.classList.add('carrousel--ouvrir');
    
    })
    boutcarrousel__x.addEventListener('mousedown', function(){

        boutcarrousel.classList.remove('carrousel--ouvrir');
        
        })
})()