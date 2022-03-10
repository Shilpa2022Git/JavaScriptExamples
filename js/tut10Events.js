console.log("Events in JS");

document.getElementById('heading').addEventListener('click', function(e){
    let variable;
    console.log("clicked on heading", e)
    //redirect to link using location
    //location.href = "https://www.w3schools.com/";
    variable = e.target;   //e.target gives element
    console.log("Target ", variable);
    variable = e.target.className;
    console.log("Class name ", variable);
    variable = e.target.classList;  //list can be iretated using Array.from(classlist);, Foreach can be used here
    variable = e.target.id;
    console.log("Class list ", variable);

    //position of mouse click
    let mousePosX, mousePosY;
    mousePosX = e.offsetX;
    mousePosY = e.offsetY;
    console.log("Mouse pos ", mousePosX, mousePosY)

    console.log("Client Pos ", e.clientX, e.clientY);

    console.log("Screen Pos ", e.clientX, e.clientY);
    console.clear();
});

let btn = document.getElementById('btn');
btn.addEventListener('click', func1);  //ony for left click, mousedown, mousewheel events
btn.addEventListener('dblclick', func2);

function func1(e){
    console.log("Thanks ", e);
    //to prevent form submission default behaviour
    //use preventDefault()
    /*
    The preventDefault() method cancels the
        event if it is cancelable, meaning that
        the default action that belongs to the
        event will not occur.
    */
    e.preventDefault();
}

function func2(e){
    console.log("This is dbl click event");
    e.preventDefault();
}

//getclassname functiom returns htmlcollection. To get an ele we can use either Array.from or item method.
let divEle = document.getElementsByClassName('no').item(0);
divEle.addEventListener('mouseenter', function(e){
        divEle.style.backgroundColor = 'cyan';  //    `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`
});

//mousemove event
divEle.addEventListener('mouseleave', function(e){
    console.log(e.offsetX)
    divEle.style.backgroundColor = 'yellow';
});

