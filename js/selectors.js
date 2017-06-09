// declare your functions here...
// $('div img:first-child')

// $("img[alt='the beatles making faces']")

// $('div:last')


function paragraphSelector () {
    return $('p')
}

function lastImageSelector () {
    return $('img:last')
}

function ninjaBabySelector () {
    return $('img#baby-ninja')
}

function divSelector () {
    return $('.pics')
}

function firstListItem () {
    return $('ul#pic-list li:first-child')
}
// the same
// function firstListItem () {
//     return $('ul > li:first')
// }