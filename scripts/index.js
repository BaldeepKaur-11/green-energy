// creating shortcut for printing
const p = console.log;

// get the references to interactive HTML elements
const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

function preloader() {
        const imagesPaths = [
           "./images/solar.jpg",
           "./images/wind.jpg",
           "./images/hydroelectric.jpg"
        ];
          const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }
            console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };

// create array that will store the data
let pages = [
    {
        heading: "Solar Energy",
        bodyText: "Solar power is energy from the sun that is converted into thermal or electrical energy. Solar energy is the cleanest and most abundant renewable energy source available, and the U.S. has some of the richest solar resources in the world. Solar technologies can harness this energy for a variety of uses, including generating electricity, providing light or a comfortable interior environment, and heating water for domestic, commercial, or industrial use.",
        thumb: "./images/solar.jpg"
    },
    {
        heading: "Wind Energy",
        bodyText: "Wind power is cost-effective. Land-based utility-scale wind is one of the lowest-priced energy sources available today, costing between two and six cents per kilowatt-hour, depending on the wind resource and the particular project’s financing. Because the electricity from wind farms is sold at a fixed price over a long period of time (e.g. 20+ years) and its fuel is free, wind energy mitigates the price uncertainty that fuel costs add to traditional sources of energy.",
        thumb: "./images/wind.jpg"
    },
    {
        heading: "Hydroelectric Energy",
        bodyText: " Hydroelectricity promotes guaranteed energy and price stability.River water is a domestic resource which, contrary to fuel or natural gas, is not subject to market fluctuations. In addition to this, it is the only large renewable source of electricity and its cost-benefit ratio, efficiency, flexibility and reliability assist in optimizing the use of thermal power plants.",
        thumb: "https://pixabay.com/photos/dam-river-water-landscape-power-929406/"
    }
];

// create function that handles click-event
function  clickBtn(ev) {
    
    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    p(index);
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

        // remove currently present id="active"
        for (let i = 0; i<ctrlBtns.length; i++){
            // claiming that current element in the loop containe attribute
            if(ctrlBtns[i].id){
                // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                ctrlBtns[i].removeAttribute('id');
            }  
        }
         
 

        // assign id="active" to the currently clicked button
        clickedButton.id='active';    
    
    // load the corresponding data into <div class="container"></div>
    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
        <h3>${pages[index].bodyText}</h3>
    `;
      window.addEventListener("load", preloader);
}
// register your buttons for click event
for(let i = 0; i<ctrlBtns.length; i++){ 
    ctrlBtns[i].addEventListener('click', clickBtn);  
}
