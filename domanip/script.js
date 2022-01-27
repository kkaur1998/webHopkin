// const url='https://jsonplaceholder.typicode.com/todos';

// fetch(url)
// .then(response=>response.json())
// .then(data=>console.log(data))

array=["hi","my","name","is","kk"]


//creating the page structure i.e 3 divs Header, Main, Footer
const body=document.body
let header = document.createElement('div')
let main=document.createElement('div')
let footer=document.createElement('div')
header.className='Header'
main.className='Main'
footer.className='Footer'
body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)

body.style='margin: 0; padding: 0;'

//this is for testing of DOM script
/*
header.innerHTML=`<h1>Hi this is header element</h1>`
main.innerHTML=`<h1>Hi this is main element</h1>`
footer.innerHTML=`<h1>Hi this is footer element</h1>`
*/


let ulheader=document.createElement('ul')
ulheader.className='navlist'

let ulfooter=document.createElement('ul')
ulfooter.className='footerlist'

// creating header div list 
function createHeader(){
    array.forEach(element => {
        let li= document.createElement('li')
        li.className='items';
        let a=document.createElement('a')
        li.innerText=element
        li.appendChild(a)
        ulheader.appendChild(li) 
    });
    return ulheader
}

footarray=["contact","aboutUS"]

function createFooter(){
    footarray.forEach(element => {
        let li= document.createElement('li')
        li.className='items';
        let a=document.createElement('a')
        li.innerText=element
        li.appendChild(a)
        ulfooter.appendChild(li) 
    });
    return ulfooter
}

header.appendChild(createHeader())
footer.appendChild(createFooter())

// console.log(document.getElementsByTagName('ul'))
uls=document.getElementsByTagName('ul')


for ( i=0 ; i<uls.length; i++){
    uls[i].style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;';
}

// uls.forEach((e) => {
//     e.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'
//     console.log(e)
// });


// header.style='position-fixed; margin-top: 0px'
// ulheader.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'


// footer.style='position-relative; margin-top: 0px'
// ulfooter.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'


// footer.appendChild(createFooter())

