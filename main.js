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
// five assignments
//function called buldAssignmentCard
//should loop over assignments and make a DOM String
//reuse the print to domstring

const assignments = [
{
    title: 'Product Cards',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'use flexbox',
    assignmentUrl: 'www.productcards.com'
},
{
    title: 'Snacks',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'use flexbox',
    assignmentUrl: 'www.productcards.com'
},
{
    title: 'Happy Deal',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'use flexbox',
    assignmentUrl: 'www.productcards.com'
},
{
    title: 'Smart data',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'use flexbox',
    assignmentUrl: 'www.productcards.com'
},
{
    title: 'Low Life',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'use flexbox',
    assignmentUrl: 'www.productcards.com'
}
];

const buildAssignmentCard = () => {
    let domstring = '';
    for(let i = 0; i < assignments.length; i++){
        domstring += `<div class= "classwork">`
        domstring += `<h3>${assignments[i].title}</h3>`;
        domstring += `<p>${assignments[i].dueDate}</p>`;
        domstring += `<p>${assignments[i].topic}</p>`;
        domstring += `<p>${assignments[i].notes}</p>`;
        domstring += `<p>${assignments[i].assignmentUrl}</p>`;
        domstring += `</div>`
    }
    printToDom('classwork', domstring);
};


const init = () => {
buildDinosaurs();
};

buildAssignmentCard();//call the function after!!

init();






