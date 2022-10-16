// console.log("Ce fichier JS fonctionne parfaitement avec GSAP !");
// console.log("Et pour le prouver je vais faire bouger le titre de la page !");
// console.log("TADAM !");

// const { render } = require("node-sass");

// gsap.to("h1", { 
//     x: 0,
//     duration: 1 
// });

gsap.registerPlugin(MotionPathPlugin);


// LIST OF FUNCTIONS

// get "randomNumber" [min, max]

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
};

// get X "randomItems" from an array

function getRandomItems(array, numberItems) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberItems);
};

// "getRandomItemAndRemove" from an array to do something

// for(let i = allPixels.length - 1; i > 0; i--){
//   const j = Math.random() * (i + 1) | 0;
//   [allPixels[i], allPixels[j]] = [allPixels[j], allPixels[i]];
// }
// for(const x of allPixels) {x.style.background="black"};

// function getRandomItemAndRemove(array) {
//   for (var i = array.length - 1; i >= 0; i--) {
//     item = array.splice(Math.floor(Math.random() * array.length), 1);
//   }
// };

// randomPower Speed & Type for GSAP MotionPath

let powerSpeed = [1, 2, 3, 4];
let powerType = ["in", "inOut", "out"];

let powerSpeedRand = powerSpeed[Math.floor(Math.random() * powerSpeed.length)];
let powerTypeRand = powerType[Math.floor(Math.random() * powerType.length)];

let powerChoice = `power${powerSpeedRand}.${powerTypeRand}`;


// Variables 
let pixelHidden = []
let pannelCurrent = "";
let logoMIC = document.querySelector("#logoMuseum")
let aniTextSusan = document.querySelector("#titleAniSusan");
let aniTextKare = document.querySelector("#titleAniKare");
let newTextShadow = '';

//////////////////////////////////////////////////
//    A LOT OF THINGS FOR SCREENEFFECT          //
/////////////////////////////////////////////////

// querySelector of 252 pixels
let A0 = document.querySelector(".A0");
let A1 = document.querySelector(".A1");
let A2 = document.querySelector(".A2");
let A3 = document.querySelector(".A3");
let A4 = document.querySelector(".A4");
let A5 = document.querySelector(".A5");
let A6 = document.querySelector(".A6");
let A7 = document.querySelector(".A7");
let A8 = document.querySelector(".A8");
let A9 = document.querySelector(".A9");
let A10 = document.querySelector(".A10");
let A11 = document.querySelector(".A11");
let B0 = document.querySelector(".B0");
let B1 = document.querySelector(".B1");
let B2 = document.querySelector(".B2");
let B3 = document.querySelector(".B3");
let B4 = document.querySelector(".B4");
let B5 = document.querySelector(".B5");
let B6 = document.querySelector(".B6");
let B7 = document.querySelector(".B7");
let B8 = document.querySelector(".B8");
let B9 = document.querySelector(".B9");
let B10 = document.querySelector(".B10");
let B11 = document.querySelector(".B11");
let C0 = document.querySelector(".C0");
let C1 = document.querySelector(".C1");
let C2 = document.querySelector(".C2");
let C3 = document.querySelector(".C3");
let C4 = document.querySelector(".C4");
let C5 = document.querySelector(".C5");
let C6 = document.querySelector(".C6");
let C7 = document.querySelector(".C7");
let C8 = document.querySelector(".C8");
let C9 = document.querySelector(".C9");
let C10 = document.querySelector(".C10");
let C11 = document.querySelector(".C11");
let D0 = document.querySelector(".D0");
let D1 = document.querySelector(".D1");
let D2 = document.querySelector(".D2");
let D3 = document.querySelector(".D3");
let D4 = document.querySelector(".D4");
let D5 = document.querySelector(".D5");
let D6 = document.querySelector(".D6");
let D7 = document.querySelector(".D7");
let D8 = document.querySelector(".D8");
let D9 = document.querySelector(".D9");
let D10 = document.querySelector(".D10");
let D11 = document.querySelector(".D11");
let E0 = document.querySelector(".E0");
let E1 = document.querySelector(".E1");
let E2 = document.querySelector(".E2");
let E3 = document.querySelector(".E3");
let E4 = document.querySelector(".E4");
let E5 = document.querySelector(".E5");
let E6 = document.querySelector(".E6");
let E7 = document.querySelector(".E7");
let E8 = document.querySelector(".E8");
let E9 = document.querySelector(".E9");
let E10 = document.querySelector(".E10");
let E11 = document.querySelector(".E11");
let F0 = document.querySelector(".F0");
let F1 = document.querySelector(".F1");
let F2 = document.querySelector(".F2");
let F3 = document.querySelector(".F3");
let F4 = document.querySelector(".F4");
let F5 = document.querySelector(".F5");
let F6 = document.querySelector(".F6");
let F7 = document.querySelector(".F7");
let F8 = document.querySelector(".F8");
let F9 = document.querySelector(".F9");
let F10 = document.querySelector(".F10");
let F11 = document.querySelector(".F11");
let G0 = document.querySelector(".G0");
let G1 = document.querySelector(".G1");
let G2 = document.querySelector(".G2");
let G3 = document.querySelector(".G3");
let G4 = document.querySelector(".G4");
let G5 = document.querySelector(".G5");
let G6 = document.querySelector(".G6");
let G7 = document.querySelector(".G7");
let G8 = document.querySelector(".G8");
let G9 = document.querySelector(".G9");
let G10 = document.querySelector(".G10");
let G11 = document.querySelector(".G11");
let H0 = document.querySelector(".H0");
let H1 = document.querySelector(".H1");
let H2 = document.querySelector(".H2");
let H3 = document.querySelector(".H3");
let H4 = document.querySelector(".H4");
let H5 = document.querySelector(".H5");
let H6 = document.querySelector(".H6");
let H7 = document.querySelector(".H7");
let H8 = document.querySelector(".H8");
let H9 = document.querySelector(".H9");
let H10 = document.querySelector(".H10");
let H11 = document.querySelector(".H11");
let I0 = document.querySelector(".I0");
let I1 = document.querySelector(".I1");
let I2 = document.querySelector(".I2");
let I3 = document.querySelector(".I3");
let I4 = document.querySelector(".I4");
let I5 = document.querySelector(".I5");
let I6 = document.querySelector(".I6");
let I7 = document.querySelector(".I7");
let I8 = document.querySelector(".I8");
let I9 = document.querySelector(".I9");
let I10 = document.querySelector(".I10");
let I11 = document.querySelector(".I11");
let J0 = document.querySelector(".J0");
let J1 = document.querySelector(".J1");
let J2 = document.querySelector(".J2");
let J3 = document.querySelector(".J3");
let J4 = document.querySelector(".J4");
let J5 = document.querySelector(".J5");
let J6 = document.querySelector(".J6");
let J7 = document.querySelector(".J7");
let J8 = document.querySelector(".J8");
let J9 = document.querySelector(".J9");
let J10 = document.querySelector(".J10");
let J11 = document.querySelector(".J11");
let K0 = document.querySelector(".K0");
let K1 = document.querySelector(".K1");
let K2 = document.querySelector(".K2");
let K3 = document.querySelector(".K3");
let K4 = document.querySelector(".K4");
let K5 = document.querySelector(".K5");
let K6 = document.querySelector(".K6");
let K7 = document.querySelector(".K7");
let K8 = document.querySelector(".K8");
let K9 = document.querySelector(".K9");
let K10 = document.querySelector(".K10");
let K11 = document.querySelector(".K11");
let L0 = document.querySelector(".L0");
let L1 = document.querySelector(".L1");
let L2 = document.querySelector(".L2");
let L3 = document.querySelector(".L3");
let L4 = document.querySelector(".L4");
let L5 = document.querySelector(".L5");
let L6 = document.querySelector(".L6");
let L7 = document.querySelector(".L7");
let L8 = document.querySelector(".L8");
let L9 = document.querySelector(".L9");
let L10 = document.querySelector(".L10");
let L11 = document.querySelector(".L11");
let M0 = document.querySelector(".M0");
let M1 = document.querySelector(".M1");
let M2 = document.querySelector(".M2");
let M3 = document.querySelector(".M3");
let M4 = document.querySelector(".M4");
let M5 = document.querySelector(".M5");
let M6 = document.querySelector(".M6");
let M7 = document.querySelector(".M7");
let M8 = document.querySelector(".M8");
let M9 = document.querySelector(".M9");
let M10 = document.querySelector(".M10");
let M11 = document.querySelector(".M11");
let N0 = document.querySelector(".N0");
let N1 = document.querySelector(".N1");
let N2 = document.querySelector(".N2");
let N3 = document.querySelector(".N3");
let N4 = document.querySelector(".N4");
let N5 = document.querySelector(".N5");
let N6 = document.querySelector(".N6");
let N7 = document.querySelector(".N7");
let N8 = document.querySelector(".N8");
let N9 = document.querySelector(".N9");
let N10 = document.querySelector(".N10");
let N11 = document.querySelector(".N11");
let O0 = document.querySelector(".O0");
let O1 = document.querySelector(".O1");
let O2 = document.querySelector(".O2");
let O3 = document.querySelector(".O3");
let O4 = document.querySelector(".O4");
let O5 = document.querySelector(".O5");
let O6 = document.querySelector(".O6");
let O7 = document.querySelector(".O7");
let O8 = document.querySelector(".O8");
let O9 = document.querySelector(".O9");
let O10 = document.querySelector(".O10");
let O11 = document.querySelector(".O11");
let P0 = document.querySelector(".P0");
let P1 = document.querySelector(".P1");
let P2 = document.querySelector(".P2");
let P3 = document.querySelector(".P3");
let P4 = document.querySelector(".P4");
let P5 = document.querySelector(".P5");
let P6 = document.querySelector(".P6");
let P7 = document.querySelector(".P7");
let P8 = document.querySelector(".P8");
let P9 = document.querySelector(".P9");
let P10 = document.querySelector(".P10");
let P11 = document.querySelector(".P11");
let Q0 = document.querySelector(".Q0");
let Q1 = document.querySelector(".Q1");
let Q2 = document.querySelector(".Q2");
let Q3 = document.querySelector(".Q3");
let Q4 = document.querySelector(".Q4");
let Q5 = document.querySelector(".Q5");
let Q6 = document.querySelector(".Q6");
let Q7 = document.querySelector(".Q7");
let Q8 = document.querySelector(".Q8");
let Q9 = document.querySelector(".Q9");
let Q10 = document.querySelector(".Q10");
let Q11 = document.querySelector(".Q11");
let R0 = document.querySelector(".R0");
let R1 = document.querySelector(".R1");
let R2 = document.querySelector(".R2");
let R3 = document.querySelector(".R3");
let R4 = document.querySelector(".R4");
let R5 = document.querySelector(".R5");
let R6 = document.querySelector(".R6");
let R7 = document.querySelector(".R7");
let R8 = document.querySelector(".R8");
let R9 = document.querySelector(".R9");
let R10 = document.querySelector(".R10");
let R11 = document.querySelector(".R11");
let S0 = document.querySelector(".S0");
let S1 = document.querySelector(".S1");
let S2 = document.querySelector(".S2");
let S3 = document.querySelector(".S3");
let S4 = document.querySelector(".S4");
let S5 = document.querySelector(".S5");
let S6 = document.querySelector(".S6");
let S7 = document.querySelector(".S7");
let S8 = document.querySelector(".S8");
let S9 = document.querySelector(".S9");
let S10 = document.querySelector(".S10");
let S11 = document.querySelector(".S11");
let T0 = document.querySelector(".T0");
let T1 = document.querySelector(".T1");
let T2 = document.querySelector(".T2");
let T3 = document.querySelector(".T3");
let T4 = document.querySelector(".T4");
let T5 = document.querySelector(".T5");
let T6 = document.querySelector(".T6");
let T7 = document.querySelector(".T7");
let T8 = document.querySelector(".T8");
let T9 = document.querySelector(".T9");
let T10 = document.querySelector(".T10");
let T11 = document.querySelector(".T11");
let U0 = document.querySelector(".U0");
let U1 = document.querySelector(".U1");
let U2 = document.querySelector(".U2");
let U3 = document.querySelector(".U3");
let U4 = document.querySelector(".U4");
let U5 = document.querySelector(".U5");
let U6 = document.querySelector(".U6");
let U7 = document.querySelector(".U7");
let U8 = document.querySelector(".U8");
let U9 = document.querySelector(".U9");
let U10 = document.querySelector(".U10");
let U11 = document.querySelector(".U11");

// All pixels Screen Effect HTML/CSS
const allPixelsOnSE = document.querySelectorAll("div#screenEffect > div");

// All pixels Screen Effect

const allPixels = [
  A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11,
  B0, B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11,
  C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11,
  D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11,
  E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11,
  F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11,
  G0, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11,
  H0, H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11,
  I0, I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11,
  J0, J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11,
  K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11,
  L0, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11,
  M0, M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11,
  N0, N1, N2, N3, N4, N5, N6, N7, N8, N9, N10, N11,
  O0, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11,
  P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11,
  Q0, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11,
  R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11,
  S0, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11,
  T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11,
  U0, U1, U2, U3, U4, U5, U6, U7, U8, U9, U10, U11];

// const allPixels

// Only the 8x8 Pixels Screen Effect Center

const onlyCorePixelsOnSE = document.querySelectorAll("div#screenEffect > .core");

const pixelColorsGlitch = ["whitesmoke", "ghostwhite", "gainsboro", "grey", "lightgrey", "darkgray", "grey", "lightslategray"];

const pannel = document.querySelector("#screenEffect");
const infoExpoAff = document.querySelector(".infoBox");

// randomColor from a list for WORKSHOP SUSAN KARE

const gradientColorsList = ["#A9519A","#7A6EBO","#2D58A5","#394275","#1F2042","#1EOF27"];

//

infoExpoAff.style.opacity = 0;





// randomBoilingBubble
//
// bulles évaporantes 
// 1 - naissent de la bulle bg Musueum
// 2 - s'élévent de façon aélatoire sur l'axe X, rotate et scale 
// 3 - deviennent transparentent au fil de leur élévation

// function eva(nombubulle){

// List EntryPoint littleBubbleEP_1, littleBubbleEP_2, littleBubbleEP_3, littleBubbleEP_4
let port = randomNumber(1, 4)
let littleBubbleEntryPoint = `littleBubble_${port}`;







// Point de création des cartons


// create cardBox for line prod1 & prod2 
let cardBoxEntryPoint = document.querySelector('#entryConveyor');

const cardBox = new Image(390, 390);
cardBox.src = "ress/pict/box/box.svg";
cardBox.alt = "Une boite en carton";
cardBoxEntryPoint.appendChild(cardBox);
cardBox.setAttribute("class", "randomBox");
cardBox.style.position = 'relative';
cardBox.style.top = '-200px';
cardBox.style.left = '-150px';
cardBox.style.opacity = 1;

// create an another cardBox for the same line
let cardBoxAEntryPoint = document.querySelector('#entryConveyor');

const cardBoxA = new Image(390, 390);
cardBoxA.src = "ress/pict/box/box.svg";
cardBoxA.alt = "Une boite en carton";
cardBoxAEntryPoint.appendChild(cardBoxA);
cardBoxA.setAttribute("class", "randomBoxA");
cardBoxA.style.position = 'relative';
cardBoxA.style.top = '-200px';
cardBoxA.style.left = '-150px';
cardBoxA.style.opacity = 1;

// create again an another cardBox for the same line
let cardBoxBEntryPoint = document.querySelector('#entryConveyor');

const cardBoxB = new Image(390, 390);
cardBoxB.src = "ress/pict/box/box.svg";
cardBoxB.alt = "Une boite en carton";
cardBoxBEntryPoint.appendChild(cardBoxB);
cardBoxB.setAttribute("class", "randomBoxB");
cardBoxB.style.position = 'relative';
cardBoxB.style.top = '-200px';
cardBoxB.style.left = '-150px';
cardBoxB.style.opacity = 1;


// cardbox on the way line prod1 & prod2

gsap.to(".randomBox", {
  duration: randomNumber(4, 6), ease: "${powerChoice}", immediateRender: true, repeat: -1, repeatDelay: Math.random() / 1.5,
  motionPath: {
    path: "#toinfobox",
    align: "#toinfobox",
    alignOrigin: [0.5, 0.55],
    stagger: randomNumber(0.1, 2)
  }
});

gsap.to(".randomBoxA", {
  duration: randomNumber(4, 6), delay: 0.2, ease: "${powerChoice}", immediateRender: true, repeat: -1, repeatDelay: Math.random() / 1.2,
  motionPath: {
    path: "#toinfobox",
    align: "#toinfobox",
    alignOrigin: [0.5, 0.55],
    stagger: randomNumber(0.1, 2)
  }
});

gsap.to(".randomBoxB", {
  duration: randomNumber(4, 6), delay: 0.4, ease: "${powerChoice}", immediateRender: true, repeat: -1,
  motionPath: {
    path: "#toinfobox",
    align: "#toinfobox",
    alignOrigin: [0.5, 0.55],
    stagger: randomNumber(0.1, 2)
  }
});

// create ardbox line prod3 "PostInfoBox"

let cardBoxPIBEntryPoint = document.querySelector('#exitinfoBox');

const cardBoxPIB = new Image(390, 390);
cardBoxPIB.src = "ress/pict/box/box.svg";
cardBoxPIB.alt = "Une boite en carton";
cardBoxPIBEntryPoint.appendChild(cardBoxPIB);
cardBoxPIB.setAttribute("class", "randomBoxPIB");
cardBoxPIB.style.position = 'relative';
cardBoxPIB.style.top = '-200px';
cardBoxPIB.style.left = '-150px';
cardBoxPIB.style.opacity = 1;
cardBoxPIB.style.zindex = 0;

// cardbox on the way line prod3

gsap.to(".randomBoxPIB", {
  duration: randomNumber(4, 12), ease: "power1.in", immediateRender: true, repeat: -1, repeatDelay: randomNumber(2, 6), yoyo: true,
  motionPath: {
    path: "#frominfobox",
    align: "#frominfobox",
    alignOrigin: [0.5, 0.55],

  }
});

// cardbox Mystery création

let cardBoxMysteryEntryPoint = document.querySelector('#exitinfoBox');

const cardBoxMystery = new Image(390, 390);
cardBoxMystery.src = "ress/pict/box/box.svg";
cardBoxMystery.alt = "Une boite mystérieuse en carton";
cardBoxMysteryEntryPoint.appendChild(cardBoxMystery);
cardBoxMystery.setAttribute("class", "mystyBox");
cardBoxMystery.style.position = 'relative';
cardBoxMystery.style.top = '-1290px';
cardBoxMystery.style.left = '-1400px';
cardBoxMystery.style.opacity = 0;


// What the ? question 
let whatItEntryPoint = document.querySelector('#exitinfoBox');
const whatIt = new Image(800, 800);
whatIt.src = "ress/pict/box/questWhite.svg";
whatIt.alt = "Question";
whatItEntryPoint.appendChild(whatIt);
whatIt.setAttribute("class", "question");
whatIt.style.position = 'relative';
whatIt.style.top = '-1499px';
whatIt.style.left = '-366px';
whatIt.style.opacity = 0;
whatIt.style.zindex = 20;


// QuerySelector for WORKSHOP & SUSAN KARE
const titleWo = document.querySelector('#titleWorkshop');
const titleSu = document.querySelector('#titleAniSusan');
const titleKa = document.querySelector('#titleAniKare');

////////////////////////////////////
// 
//     MYSTYBOX ADVENTURE !!! 
//
//////////////////////////////////
pannel.style.opacity = 0;
infoExpoAff.style.opacity = 1;

let tl = gsap.timeline()

tl.to(".mystyBox", { x: 1380, duration: 4, delay: 4, ease: "power4.out", opacity: 1, scale: 1.5 });
tl.to(".mystyBox", {
  x: "+=15", rotation: 30, duration: 1, ease: "bounce.out"
}, "-=1");
//
tl.to("#titleAniSusan", { duration: .45, onUpdate: function () { titleWo.style.textShadow = "#A9519A 1px 1px 1px"; titleWo.style.webkitTextStroke = ".5px #ffffff";aniTextSusan.style.opacity = 1; aniTextKare.style.opacity = 1 } })
tl.to(".mystyBox", { y: "+=590", rotation: 1440, duration: 3, ease: "circ.in", scale: 1.25 }, "+=0.5");
// tl.to(".mystyBox", { onUpdate: function () { titleWo.style.textShadow = "#A9519A 1px 1px 1px"; } });
tl.to("#titleAniSusan", { y: "+=110", duration: 1, ease: "power.in" })
tl.to("#titleAniKare", { y: "-=70", duration: 1, ease: "power.inOut" }, "-=.5")
tl.to("#titleAniSusan", { x: "+=252", y: "+=385", duration: 1.5, rotation: -90, ease: "power2.Out", scale: .96 }, "-=.4")
tl.to("#titleAniKare", { x: "+=1.25", y: "+=213.5", duration: 1.5, ease: "power1.out", scale: .95 }, "-=1.3")
tl.to(".mystyBox", {
  y: "-=7 ", duration: 2, ease: "slow", onUpdate: function () {
    whatIt.style.opacity = 1; 
  }
}, "=+1.5");
tl.to(".question", { duration: 2, y: "+=15", ease: "bounce.in", scale: 1.25 });
tl.to(".mystyBox", { ease: "back.out(1)",
  scale: 1.5, 
  duration: 1.5, onUpdate: function () {
    whatIt.style.opacity = 0; 
  },
});

tl.to(".mystyBox", {
  x: "-=115", y: "+=75", duration: 4, opacity: 0, onUpdate: function () {
    ;
  }
});

// tl.to(".mystyBox", { onUpdate: function () { titleSu.style.textShadow = "#A9519A .5px .5px .5px"} }, "-=1.5")
// tl.to(".mystyBox", { onUpdate: function () { titleKa.style.textShadow = "#A9519A 2px 2px 2px"; cardBoxMystery.style.opacity = 0  } }, "-=.4")

tl.to(".mystyBox", { duration: .1, onUpdate: function () { infoExpoAff.style.opacity = 0}}, "-=.1")
tl.to(".mystyBox", { duration: 0.1, onUpdate: function () { expoPrez('0') }})
// tl.to(".mystyBox", { duration: 1.5,x:"+=200", onUpdate: function () { expoPrez(panMcWatch) }})
tl.to(".mystyBox", { duration: .6, onUpdate: function () { expoPrez('white') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .4, onUpdate: function () { expoPrez('_') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})

tl.to(".mystyBox", { duration: .4, onUpdate: function () { expoPrez('white') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .3, onUpdate: function () { expoPrez('_') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})

tl.to(".mystyBox", { duration: .3, onUpdate: function () { expoPrez('white') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .2, onUpdate: function () { expoPrez('_') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})

tl.to(".mystyBox", { duration: .2, onUpdate: function () { expoPrez('white') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .1, onUpdate: function () { expoPrez('_') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})
tl.to(".mystyBox", { duration: .1, onUpdate: function () { expoPrez('white') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .7, onUpdate: function () { expoPrez('e') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})
tl.to(".mystyBox", { duration: .7, onUpdate: function () { expoPrez('l') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .7, onUpdate: function () { expoPrez('e') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})
tl.to(".mystyBox", { duration: .7, onUpdate: function () { expoPrez('f') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .7, onUpdate: function () { expoPrez('o') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})
tl.to(".mystyBox", { duration: .7, onUpdate: function () { expoPrez('n') }})
tl.to("#titleAniSusan", { onUpdate: function () { let newKaTextShadow = getRandomItems(gradientColorsList, 1); titleKa.style.textShadow = ` ${newKaTextShadow} 1px 1px 1px`; console.log(`Kare ${newKaTextShadow}`)}})

tl.to(".mystyBox", { duration: .7, onUpdate: function () { expoPrez('t') }})
tl.to("#titleAniKare", { onUpdate: function () { let newSuTextShadow = getRandomItems(gradientColorsList, 1); titleSu.style.textShadow = `${newSuTextShadow} 1px 1px 1px`; console.log(`Susan ${newSuTextShadow}`)}})
tl.to(".mystyBox", { duration: .85, onUpdate: function () { expoPrez('smile') }})
tl.to(".mystyBox", { duration: .85, onUpdate: function () { expoPrez('FrontCover') }})
tl.to(".mystyBox", { duration: 1, onUpdate: function () { pannel.style.opacity = 0}}) 
tl.to(".mystyBox", { duration: 3, onUpdate: function () { infoExpoAff.style.opacity = 1}}, "-=1") 

tl.to(".mystyBox", { duration: 10, onUpdate: function () { aniTextKare.style.opacity = 0; aniTextSusan.style.opacity = 0; titleWo.style.textShadow = "none"; titleWo.style.webkitTextStroke = ".5px #70577D" } }, "+=200")




// A REFAIRE AVEC UNE FONCTION PROPRE

let zoneInd = document.querySelector('#boxB');
// console.log(zoneInd);
let listrandomBox = ["randomBox", "randomBoxA", "randomBoxB", "randomBoxPIB"];

function mouseOver() {
  cardBox.style.opacity = 1, cardBoxA.style.opacity = 1, cardBoxB.style.opacity = 1, cardBoxPIB.style.opacity = 1
};
function mouseOut() {
  cardBox.style.opacity = 0, cardBoxA.style.opacity = 0, cardBoxB.style.opacity = 0, cardBoxPIB.style.opacity = 0
};

zoneInd.addEventListener("mouseover", mouseOver);
zoneInd.addEventListener("mouseout", mouseOut);

// function visible(this){this.style.opacity: 1};

// function switchOpacity(){
// let listrandomBox = ["randomBox","randomBoxA","randomBoxB","randomBoxPIB"],
// listrandomBox.forEach{}
// }


// bulle GIF background Museum

let bubbleBreatheStart = document.querySelector('#exitinfoBox');
const bubbleBreathe = new Image(840, 470);
bubbleBreathe.src = "ress/pict/bubble/breathe.gif";
bubbleBreathe.alt = "bulle d'oxygene";
bubbleBreatheStart.appendChild(bubbleBreathe);
bubbleBreathe.setAttribute("class", "bubble");
bubbleBreathe.style.position = 'relative';
bubbleBreathe.style.top = '-1565px';
bubbleBreathe.style.left = '-842px';
bubbleBreathe.style.opacity = 1;
bubbleBreathe.style.zindex = 1;

// gsap.to(".bubble", {duration: 5, ease: "back.out(2)", y: -500, repeat: -1});

// Pack de bulles évaporantes de la bulle GIF bg Museum

let littlebubbleBreathe1Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe1 = new Image(120, 60);
littlebubbleBreathe1.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe1.alt = "petite bulle d'oxygene";
littlebubbleBreathe1Start.appendChild(littlebubbleBreathe1);
littlebubbleBreathe1.setAttribute("class", "littlebubble1");
littlebubbleBreathe1.style.position = 'relative';
littlebubbleBreathe1.style.top = '-1808px';
littlebubbleBreathe1.style.left = '-573px';
littlebubbleBreathe1.style.opacity = .5;
littlebubbleBreathe1.style.zindex = 4;

let littlebubbleBreathe2Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe2 = new Image(90, 60);
littlebubbleBreathe2.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe2.alt = "petite bulle d'oxygene";
littlebubbleBreathe2Start.appendChild(littlebubbleBreathe2);
littlebubbleBreathe2.setAttribute("class", "littlebubble2");
littlebubbleBreathe2.style.position = 'relative';
littlebubbleBreathe2.style.top = '-1878px';
littlebubbleBreathe2.style.left = '-513px';
littlebubbleBreathe2.style.opacity = .5;
littlebubbleBreathe2.style.zindex = 0;

let littlebubbleBreathe3Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe3 = new Image(140, 55);
littlebubbleBreathe3.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe3.alt = "petite bulle d'oxygene";
littlebubbleBreathe3Start.appendChild(littlebubbleBreathe3);
littlebubbleBreathe3.setAttribute("class", "littlebubble3");
littlebubbleBreathe3.style.position = 'relative';
littlebubbleBreathe3.style.top = '-1935px';
littlebubbleBreathe3.style.left = '-488px';
littlebubbleBreathe3.style.opacity = .5;
littlebubbleBreathe3.style.zindex = 4;

let littlebubbleBreathe4Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe4 = new Image(125, 65);
littlebubbleBreathe4.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe4.alt = "petite bulle d'oxygene";
littlebubbleBreathe4Start.appendChild(littlebubbleBreathe4);
littlebubbleBreathe4.setAttribute("class", "littlebubble4");
littlebubbleBreathe4.style.position = 'relative';
littlebubbleBreathe4.style.top = '-2003px';
littlebubbleBreathe4.style.left = '-451px';
littlebubbleBreathe4.style.opacity = .5;
littlebubbleBreathe4.style.zindex = 4;

let littlebubbleBreathe5Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe5 = new Image(80, 35);
littlebubbleBreathe5.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe5.alt = "petite bulle d'oxygene";
littlebubbleBreathe5Start.appendChild(littlebubbleBreathe5);
littlebubbleBreathe5.setAttribute("class", "littlebubble5");
littlebubbleBreathe5.style.position = 'relative';
littlebubbleBreathe5.style.top = '-2065px';
littlebubbleBreathe5.style.left = '-370px';
littlebubbleBreathe5.style.opacity = .5;
littlebubbleBreathe5.style.zindex = 4;

let littlebubbleBreathe6Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe6 = new Image(120, 60);
littlebubbleBreathe6.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe6.alt = "petite bulle d'oxygene";
littlebubbleBreathe6Start.appendChild(littlebubbleBreathe6);
littlebubbleBreathe6.setAttribute("class", "littlebubble6");
littlebubbleBreathe6.style.position = 'relative';
littlebubbleBreathe6.style.top = '-2070px';
littlebubbleBreathe6.style.left = '-573px';
littlebubbleBreathe6.style.opacity = .5;
littlebubbleBreathe6.style.zindex = 0;

let littlebubbleBreathe7Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe7 = new Image(90, 60);
littlebubbleBreathe7.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe7.alt = "petite bulle d'oxygene";
littlebubbleBreathe7Start.appendChild(littlebubbleBreathe7);
littlebubbleBreathe7.setAttribute("class", "littlebubble7");
littlebubbleBreathe7.style.position = 'relative';
littlebubbleBreathe7.style.top = '-2112px';
littlebubbleBreathe7.style.left = '-513px';
littlebubbleBreathe7.style.opacity = .5;
littlebubbleBreathe7.style.zindex = 4;

let littlebubbleBreathe8Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe8 = new Image(140, 55);
littlebubbleBreathe8.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe8.alt = "petite bulle d'oxygene";
littlebubbleBreathe8Start.appendChild(littlebubbleBreathe8);
littlebubbleBreathe8.setAttribute("class", "littlebubble8");
littlebubbleBreathe8.style.position = 'relative';
littlebubbleBreathe8.style.top = '-2163px';
littlebubbleBreathe8.style.left = '-488px';
littlebubbleBreathe8.style.opacity = .5;
littlebubbleBreathe8.style.zindex = 0;

let littlebubbleBreathe9Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe9 = new Image(125, 65);
littlebubbleBreathe9.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe9.alt = "petite bulle d'oxygene";
littlebubbleBreathe9Start.appendChild(littlebubbleBreathe9);
littlebubbleBreathe9.setAttribute("class", "littlebubble9");
littlebubbleBreathe9.style.position = 'relative';
littlebubbleBreathe9.style.top = '-2228px';
littlebubbleBreathe9.style.left = '-451px';
littlebubbleBreathe9.style.opacity = .5;
littlebubbleBreathe9.style.zindex = 4;

let littlebubbleBreathe10Start = document.querySelector('#exitinfoBox');
const littlebubbleBreathe10 = new Image(80, 35);
littlebubbleBreathe10.src = "ress/pict/bubble/breathe.gif";
littlebubbleBreathe10.alt = "petite bulle d'oxygene";
littlebubbleBreathe10Start.appendChild(littlebubbleBreathe10);
littlebubbleBreathe10.setAttribute("class", "littlebubble10");
littlebubbleBreathe10.style.position = 'relative';
littlebubbleBreathe10.style.top = '-2307px';
littlebubbleBreathe10.style.left = '-370px';
littlebubbleBreathe10.style.opacity = .5;
littlebubbleBreathe10.style.zindex = 0;




// bulles évaoprantes tant qu'aucun survol logo Musueum

gsap.to(".littlebubble5", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -180), scale: randomNumber(0.25, 0.65), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.5, opacity: .1 });
gsap.to(".littlebubble4", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.35, 0.7), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.5, opacity: 0 });
gsap.to(".littlebubble3", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.35, 0.65), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 2.5, opacity: .15 });
gsap.to(".littlebubble2", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.5, 0.85), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.5, opacity: 0 });
gsap.to(".littlebubble1", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.5, 0.85), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.65, opacity: .15 });

gsap.to(".littlebubble6", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -180), scale: randomNumber(0.5, 0.85), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.25, opacity: .1 });
gsap.to(".littlebubble7", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.5, 0.85), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.15, opacity: .15 });
gsap.to(".littlebubble8", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.5, 0.85), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.3, opacity: 0 });
gsap.to(".littlebubble9", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.5, 0.85), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.15, opacity: .1 });
gsap.to(".littlebubble10", { duration: randomNumber(3, 10), xPercent: randomNumber(-20, 50), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -225), scale: randomNumber(0.5, 0.85), rotation: randomNumber(0, 360), repeat: -1, repeatDelay: Math.random() / 1.2, opacity: 0 });

gsap.to("#logoMuseum", 7, { scale: .96, duration: 3, ease: Power0.easeNone ,repeat: -1, yoyo: true})


//Test 
// document.querySelectorAll(".littlebubble").forEach(function () {
//   gsap.to(".littlebubble", { duration: randomNumber(3, 5), xPercent: randomNumber(-20, 40), delay: randomNumber(0.5, 3), ease: "none", y: randomNumber(-150, -250), scale: randomNumber(0.5, 1.25), rotation: randomNumber(0, 360), repeat: -1 });
// }
// )



// function création de ? au dessus de la cardbox lors d'un click sur celle-ci

// const quesT = new Image();

// cardBox.setAttribute("href","https://www.imprimerie.lyon.fr/fr/susan-kare")

// cardBox onmouseover shake
// cardBox.addEventListener('mouseover', function(){gsap.to(".randomBox", {duration: 5, ease: "bounce.out", y: 25});})

// cardBox onclick ?

// cardBox.addEventListener('click', function(){console.log(`${cardBox.classList}`),)

// gsap.to(".randomBox", { x: 200,});
// gsap.to(".randomBox", {duration: 5, ease: "bounce.out", x:5, y: 25});

// function(){
//     cardBox.removeAttribute("box",src="ress\pict\box\box.svg");
//     cardBox.setAttribute("box",src="ress\pict\box\box_ouverte.svg")
//                                                 }; )


function expoPrez(panel) {
  console.log(`${panel}`);
  switch (panel) {
    
    // init
    case '0':
      pannel.style.opacity = 1;
      for (let e of allPixels) { e.style.opacity = 1, e.style.background = 'none' };
      pannel.style.background = 'none';
      pannel.style.gap = '0.2%';
      break;
       
    // blank
    case 'white':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      for (let e of pixelHidden) { e.style.opacity = 0 }
      break;

    // underscore
    case '_':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const undersc = [Q3,Q4,Q5,Q6,Q7,Q8];
      for (let e of undersc) { e.style.background = 'black' };
      break;
    
      //  e
    case 'e':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const letterE = [I4,I5,I6,I7,J3,J4,J7,J8,K3,K4,K7,K8,L3,L4,L5,L6,L7,L8,M3,M4,N3,N4,N8,O4,O5,O6,O7];
      for (let e of letterE) { e.style.background = 'black' };
      break;

    // l
    case 'l':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const letterL = [G5,G6,H5,H6,I5,I6,J5,J6,K5,K6,L5,L6,M5,M6,N5,N6,O5,O6];
      for (let e of letterL) { e.style.background = 'black' };
      break;

    // f
    case 'f':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const letterF = [G6,G7,G8,H5,H6,I4,I5,I6,I7,J5,J6,K5,K6,L5,L6,M5,M6,N5,N6,O5,O6];
      for (let e of letterF) { e.style.background = 'black' };
      break;

    // o
    case 'o':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const letterO = [I4,I5,I6,I7,J3,J4,J7,J8,K3,K4,K7,K8,L3,L4,L7,L8,M3,M4,M7,M8,N3,N4,N7,N8,O4,O5,O6,O7];
      for (let e of letterO) { e.style.background = 'black' };
      break;

    //  n
    case 'n':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const letterN = [I3,I4,I5,I6,J3,J4,J7,J8,K3,K4,K7,K8,L3,L4,L7,L8,M3,M4,M7,M8,N3,N4,N7,N8,O3,O4,O7,O8];
      for (let e of letterN) { e.style.background = 'black' };
      break;

    // t
    case 't':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const letterT = [G5,G6,H5,H6,I4,I5,I6,I7,J5,J6,K5,K6,L5,L6,M5,M6,N5,N6,O6,O7];
      for (let e of letterT) { e.style.background = 'black' };
      break;

    // smile from "Happy Macintosh on Orange Gradient" by Susan Kare
    case 'smile':
      pannel.style.background = 'none';
      for (let e of allPixelsOnSE) { e.style.background = 'white' };
      const smile = [G2,G6,G9,H2,H6,H9,I6,J6,K6,L5,L6,N3,N8,O4,O5,O6,O7];
      for (let e of smile) { e.style.background = 'black' };
      break;
    
    // "Macintosh Watch on Hot Pink" by Susan Kare
    case 'panMcWatch':
      pannel.style.opacity = 1;
      for (let e of allPixels) { e.style.opacity = 1, e.style.background = 'none' };
      pannel.style.background = 'none';
      pannel.style.gap = '0%';
      for (let e of allPixelsOnSE) { e.style.background = "#cd2a88" };
      let pixelBgWatch = [H4,H5,H6,H7,I3,I4,I5,I6,I7,I8,J3,J4,J5,J6,J7,J8,K3,K4,K5,K6,K7,K8,L3,L4,L5,L6,L7,L8,M3,M4,M5,M6,M7,M8,N3,N4,N5,N6,N7,N8,O4,O5,O6,O7];
      for (let e of pixelBgWatch) { e.style.background = "white" };
      for (let e of pixelHidden) { e.style.opacity = 0 };

      const McWatch = [E4,E5,E6,E7,F4,F5,F6,F7,G4,G5,G6,G7,H3,H8,I2,I9,J2,J9,K2,K9,K10,L2,L9,L10,M2,M9,N2,N9,O3,O8,P4,P5,P6,P7,Q4,Q5,Q6,Q7,R4,R5,R6,R7];
      for (let e of McWatch) { e.style.background = 'black' };
      
      const McWatchSecond = [L4,L5,L6,I6,J6,K6];
      for (let e of McWatchSecond) { e.style.background = 'black' };

      break;

      case 'heart':
        pannel.style.background = 'none';
        for (let e of allPixelsOnSE) { e.style.background = 'white' };
        const heart = [D1, D2, D3, D8, D9, D10, E1, E2, E3, E4, E7, E8, E9, E10, F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11,G0, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11,H0, H1, H2, H3, H4, H5, H6, H7, H8, H9, H10, H11,I0, I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, J1, J2, J3, J4, J5, J6, J7, J8, J9, J10,K2, K3, K4, K5, K6, K7, K8, K9,L3, L4, L5, L6, L7, L8,M4, M5, M6, M7,N5, N6];
        for (let e of heart) { e.style.background = 'black' };


      break;

    // //  case 'panGlitch':
    //   pannel.style.opacity = 1;
    //   for (let e of allPixelsOnSE) { let newColor = getRandomItems(pixelColorsGlitch, 1); console.log(e, newColor); e.style.background = newColor; e.style.opacity = 1 }
    //   break;

    // case invVisible:
    // case 9:
    //   pannel.style.opacity = 0;
    //   for (let e of allPixels) { e.style.opacity = 0 };
    //   break;

    case 'panVisible':
      pannel.style.background = 'none';
      pannel.style.opacity = 1;
      for (let e of allPixels) { e.style.opacity = 1, e.style.background = 'none' };

    case 'FrontCover':

      pannel.style.opacity = 1;
      pannel.style.background = 'red';
      for (let e of allPixelsOnSE) { e.style.background = 'white', e.style.opacity = 1 }
      // pixelHidden = [P0, P1, P2, P3, P4, P5, P6, P7, Q0, Q1, Q2, Q3, Q4, Q5, Q6, Q7, R0, R1, R2, R3, R4, R5, R6, R7, S0, S1, S2, S3, S4, S5, S6, S7, T0, T1, T2, T3, T4, T5, T6, T7, U0, U1, U2, U3, U4, U5, U6, U7
      // ];
      // for (let e of pixelHidden) { e.style.opacity = 0 }
      break;

    default:
  };
}
