//6a
function howdy() {
    console.log('JMF Hernandez says hi!');
}

howdy();

//6b - function declaration
function numba2(string2) {
    if (string2.length < 7) {
        console.log('What a short little word!');

    } else if (string2.length === 7) {
        console.log('7, what a perfect choice!');

    } else {
        console.log("I'm sorry, but that's too many to count.");
    }
}

var string2 = ['7', 'seventy', 'university'];

numba2(string2[0]);

numba2(string2[1]);

numba2(string2[2]);

//6b - function expression
var numba = function (string) {
    if (string.length < 7) {
        return 'What a short little word!';

    } else if (string.length === 7) {
        return '7, what a perfect choice!';

    } else {
        return 'I\'m sorry, but that\'s too many to count.';
    }
};

var message = numba('7');
console.log(message);

var message2 = numba('seventy');
console.log(message2);

var message3 = numba('university');
console.log(message3);

//6c
function inception(display, favMovie) {
    display(favMovie);
}

function display() {
    console.log(favMovie + ' is a fantastic movie.');
}

var favMovie = '\"What Dreams May Come\"';

inception(display, favMovie);
