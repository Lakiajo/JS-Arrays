console.log('Lakia Jones');

const dinosaurs = [
//loop over dinosaurs//
//build up a dom string//
//print domstring to the dom//
{
    dinoType: 't-rex',
    name: 'wrex'
},
{
    dinoType: 'stegosaurus',
    name: 'stegs'
},
{
    dinoType: 'velociraptor',
    name: 'raptor'
},
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
let domstring = '';
for(let i = 0; i < dinosaurs.length; i++){
    domstring += `<div class= "dinosaur">`
    domstring += `<h3>${dinosaurs[i].dinoType}</h3>`;
    domstring += `<p>${dinosaurs[i].name}</p>`;
    domstring += `</div>`
}
printToDom('dino', domstring);
};


const init = () => {
buildDinosaurs();
};

init();






