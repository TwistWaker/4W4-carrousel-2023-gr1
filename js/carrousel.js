////base des fonctions d

(function(){
    console.log('début du carrousel')
    /*------------------------------------------------*/
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let boutcarrousel =document.querySelector('.carrousel');
    let boutcarrousel__x = document.querySelector('.carrousel__x');
    let boutcarrousel__figure = document.querySelector('.carrousel__figure');
    /*--------------------------------------------------------*/
    let galerie = document.querySelector(".galerie");
    let galerie__img = document.querySelectorAll("img");
    console.log(galerie__img.length);
    /************************************************* */
    boutcarrousel__ouvrir.addEventListener('mousedown', function(){

    boutcarrousel.classList.add('carrousel--ouvrir');
    ajout_img_dans_carrousel();
    
    })
    /****************************************************** */
    boutcarrousel__x.addEventListener('mousedown', function(){

        boutcarrousel.classList.remove('carrousel--ouvrir');
        
        })
        /**********************/
        function ajout_img_dans_carrousel(){
            for(const elm of galerie__img){
               console.log(elm.getAttribute('src'));
                let img = document.createElement('img');
                img.setAttribute('src', elm.getAttribute('src'));
                boutcarrousel__figure.appendChild(img);
            }
        }
})()