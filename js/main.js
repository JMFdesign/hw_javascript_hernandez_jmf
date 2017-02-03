var presFortyOne = {
    firstName: 'George H.W.',
    lastName: 'Bush',
    termLength: '1',
    party: 'Republican',
    yearsOfPresidency: '1989-1993'
};

var presFortyTwo = {
    firstName: 'William (Bill)',
    lastName: 'Clinton',
    termLength: '2',
    party: 'Democrat',
    yearsOfPresidency: '1993-2001'
};

var presFortyThree = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: '2',
    party: 'Republican',
    yearsOfPresidency: '2001-2009'
};

var presFortyFour = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: '2',
    party: 'Democrat',
    yearsOfPresidency: '2009-2017'
};

var presFortyFive = {
    firstName: 'Donald',
    lastName: 'Trump',
    termLength: 'Current',
    party: 'Republican',
    yearsOfPresidency: '2017-Current'
};

var presidents = [presFortyFive, presFortyFour, presFortyThree, presFortyTwo, presFortyOne];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);
