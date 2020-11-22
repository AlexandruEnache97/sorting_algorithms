let setNumbers = false;
let nrOfElements = 30;

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const setNrToSort = () => {
    if(!setNumbers) {
        // create the divs elements
        for(let i = 0; i < nrOfElements; i++) {
            // div element for the colored column
            const div =  document.createElement('div');
            div.style.width = 300 / 15 + 'px';
            div.style.margin = '0px 1px';
            div.classList.add('number'); // add the class to the columns
            
            // p element for the number of column
            const p = document.createElement('p');
            p.classList.add('nr'); // add the class to the p elements
        
            document.getElementById('elements').appendChild(div); // add the div element to the parent container
            document.getElementById('numbers').appendChild(p); // add the p element to the div of numbers

        }
        setNumbers = true; // do the creation one time
    }
}

const setNrHeight = () => {

    setNrToSort();
    const items = document.getElementsByClassName("number");
    const numbers = document.getElementsByClassName("nr");

    for(let i = 0; i < items.length; i++) {
        const value = getRandomInt(100, 800);
        items[i].style.height = value / 1.8 + "px";
        items[i].style.background = "lightskyblue";
        numbers[i].innerHTML = value;
    }

    const nr = document.getElementById('numbers');
    if(nrOfElements > 40) {
        nr.style.display = 'none';
    } else {
        nr.style.display = 'flex';
    }
}

const insertionSort = () => {
    const numbers = document.getElementsByClassName("nr");
    const items = document.getElementsByClassName("number");

    let i = 1;
    let animation = setInterval(() => {

        if(i >= numbers.length - 1) {
            clearInterval(animation);
        }

        let key = numbers[i].innerHTML;  
        let j = i - 1;  

        while (j >= 0 && numbers[j].innerHTML > key) 
        {  
            
            items[j + 1].style.height = numbers[j].innerHTML / 1.8 + "px";
            
            numbers[j + 1].innerHTML = numbers[j].innerHTML;  
            

            items[j + 1].style.background = 'rgb(29, 122, 180)';
            j = j - 1; 
        } 

        items[j + 1].style.height = key / 1.8 + "px";
        numbers[j + 1].innerHTML = key; 

        items[j + 1].style.background = 'rgb(0, 49, 80)';
        
        i++;
    }, 250);
}

const hoverDivs = () => {
    
    const divs = document.getElementsByClassName('number');

    for(let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', () => {
            divs[i].classList.add('divHover');
        });

        divs[i].addEventListener('mouseout', () => {
            divs[i].classList.remove('divHover');
        });
    
    }
}

const deleteDivs = () => {
    const items = document.getElementsByClassName('number');
    for(let i = nrOfElements - 1; i >= 0; i-- ) {
        items[i].remove();
        document.getElementsByClassName('nr')[i].remove();

    }
    setNumbers = false;
}

// functionality random numbers button
document.getElementById("randomBtn").addEventListener('click', () => {
    setNrHeight();
});

// functionality insertion sort button
document.getElementById("insertionBtn").addEventListener('click', () => {
    insertionSort();
});

//functionality delete button 
document.getElementById("deleteDivs").addEventListener('click', () => {
    deleteDivs();
});

const setNrElemSlider = () => {
    const slider = document.querySelector('.slider');
    const sliderValue = document.querySelector('.valueOfSlider');

    // change the text for slider value
    slider.oninput = () =>  sliderValue.innerHTML = slider.value;
    
    // change nr of elements by slider value
    document.getElementById('changeNrOfElements').addEventListener('click', () => {

        deleteDivs();
        nrOfElements = sliderValue.innerHTML;
        console.log(nrOfElements);
        setNrHeight();
    });
}

const hoverBtns = () => {
    const buttons = document.getElementsByClassName('btn');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', () => {
            buttons[i].classList.add('hoverBtn');
        });
        buttons[i].addEventListener('mouseout', () => {
            buttons[i].classList.remove('hoverBtn');
        });
    }
}
    



setNrHeight();
//hoverDivs();
setNrElemSlider();
hoverBtns();
