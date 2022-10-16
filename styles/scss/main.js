// Point de création des cartons
// let cardBoxEntryPoint = document.querySelector('#entryConveyor');
// console.log(cardBoxEntryPoint);
// let cardBox = document.createElement("cardBox");
// cardBox.setAttribute("box",src="ress/pict/box/box_ouverte.svg");

document.cardBoxEntryPoint.appendChild(cardBox);

// cardBox on clik
cardBox.addEventListener('mouseover', function(){
    cardBox.removeAttribute("box",src="ress\pict\box\box.svg");
    cardBox.setAttribute("box",src="ress\pict\box\box_ouverte.svg")
                                                }; )


// Let's go GSAP !!!