//6a
function howdy() {
    console.log('JMF Hernandez says hi!');
}

howdy();

function numba(string) {
    if (string.length < 7) {
        console.log('What a short little word!');

    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');

    } else {
        console.log("I'm sorry, but that's too many to count.");
    }
}

//6b
var string = ['7', 'seventy', 'university'];

numba(string[0]);

numba(string[1]);

numba(string[2]);

//6c
function inception(display, favMovie) {
    display(favMovie);
}

function display() {
    console.log(favMovie + ' is a fantastic movie.');
}

var favMovie = 'What Dreams May Come';

inception(display, favMovie);
