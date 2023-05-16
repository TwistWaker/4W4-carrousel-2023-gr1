////base des fonctions d

(function(){
    console.log('début du carrousel')
    /*------------------------------------------------*/
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let boutcarrousel =document.querySelector('.carrousel');
    let boutcarrousel__x = document.querySelector('.carrousel__x');
    let boutcarrousel__fleche_droite = document.querySelector('.carrousel__fleche_droite');
    let boutcarrousel__fleche_gauche = document.querySelector('.carrousel__fleche_gauche');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    console.log(carrousel__figure.tagName);
    let carrousel__form = document.querySelector('.carrousel__form');
    console.log(carrousel__form.tagName);
    /*--------------------------------------------------------*/
    let galerie = document.querySelector(".galerie");
    let galerie__img = document.querySelectorAll("img");
    console.log(galerie__img.length);
    let index = 0;
    let ancien_index = -1;
    let position = 0; // permet indexer les images de la galerie et 


    // permet de crée le carrousel en parcouran tla galrie d'image
    ajout_img_dans_carrousel();
    /************************************************* */
    boutcarrousel__ouvrir.addEventListener('mousedown', function(){

    boutcarrousel.classList.add('carrousel--ouvrir');
    
    afficher_image(index);
    console.log(index);
    })
    /****************************************************** */
    boutcarrousel__x.addEventListener('mousedown', function(){

        boutcarrousel.classList.remove('carrousel--ouvrir');
        
        })
        
        function ajout_img_dans_carrousel(){
            
            for(const elm of galerie__img){
                elm.dataset.index = position;
                elm.addEventListener('mousedown',function(){
                  index = this.dataset.index;
                    afficher_image(index);
                  if(carrousel__figure.classList.contains('carrousel--ouvrir') == false){
                  //pour ouvrir la boite modale
                  boutcarrousel.classList.add('carrousel--ouvrir');
                    }
                    //console.log(index)
                })
                creation_img_carrousel(elm);
                creation_radio_carrousel();
            }
        }

    boutcarrousel__fleche_gauche.addEventListener('mousedown', function(){

      index = index -1;
      afficher_image(index);
      if(index <= 0){
        index = galerie__img.length;
      }
        
        })

    boutcarrousel__fleche_droite.addEventListener('mousedown', function(){

        index = index +1;
      afficher_image(index);
      if(index >= 5){
        index = 0;
      }
        console.log(index.length);
        })

       


        /**********************/

        function creation_img_carrousel(elm){
            console.log(elm.getAttribute('src'));
            let img = document.createElement('img');
            img.src = elm.src;
            img.classList.add('carrousel__img');
            //img.setAttribute('src', elm.getAttribute('src'));
           carrousel__figure.appendChild(img);
        }
        
        function creation_radio_carrousel(){
            let rad = document.createElement('input');
            console.log(rad.tagName);
            rad.setAttribute('type','radio');
            rad.setAttribute('name', 'carrousel__rad');
            rad.classList.add('carrousel__rad');
            
            rad.dataset.index = position;
            position++; //incrémentation de 1
            carrousel__form.appendChild(rad);
            rad.addEventListener('mousedown', function(){
                index = this.dataset.index;
                afficher_image(index)
            })
        }


        function afficher_image(index){
            
            if (ancien_index != -1){
                // carrousel__figure.children[ancien_index].style.opacity = 0  
                carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
               carrousel__form.children[ancien_index].checked = false;
               }
               // carrousel__figure.children[index].style.opacity = 1
               redimensionner_carrousel()
               carrousel__figure.children[index].classList.add('carrousel__img--activer')
               carrousel__form.children[index].checked = true;
               ancien_index = index
             }

             /* permet de verifier si la classe <<carrousl-activer>> ce trouve dans
             la liste des classes carrousel
             carrousel.classlist.contain('carrousel--activer')
             
             */
        function redimensionner_carrousel(){
          /*récupère les dimensions de l'image courante*/
          const imageWidth = carrousel__figure.children[index].naturalWidth;
          const imageHeight = carrousel__figure.children[index].naturalHeight;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          let carrouselWidth = windowWidth;
          if(windowWidth >= 1000){
          carrouselWidth = windowWidth - windowHeight/2;
          }
         let carrouselHeight = carrouselWidth * imageHeight/imageWidth;
         
        /* carrousel.style.width = `${carrouselWidth}px`;
         carrousel.style.height = `${carrouselHeight}px`;
         carrousel.style.top = `${(windowHeight-carrouselHeight)/2}px`;
         carrousel.style.left = `${(windowWidth-carrouselWidth)/2}px`;*/


          console.log(`imageWidth= ${imageWidth}
          imageHeight= ${imageHeight}
          windowWidth= ${windowWidth}
          windowHeight= ${windowHeight}`);
        }
})()