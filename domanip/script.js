const url='https://jsonplaceholder.typicode.com/todos';

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

//main element content



fetch(url)
.then(response=>response.json())
.then(data=>{
    list=[...data]
    // list.forEach(element => {
    //     var div= document.createElement('div')
    //     div.innerhtml=`<h2>${element.title}</h2>`
    //     main.appendChild(div)
    //     console.log(element.title)
    // });
    showData(list);
})

function showData(list){
    for ( i=0 ; i<list.length; i++){
        CreateDivElement(list[i])
    }
}

function CreateDivElement(i){
    var div= document.createElement('div')
        if(i.completed){
            div.style='background-color: green; color: white; display: flex; align-items: center; padding: 1%; margin: 10px; color: white;'
        }
        else{
            div.style='background-color: red; display: flex; color: white;  align-items: center; padding: 1%; margin: 10px; color: white;'
        }
        // div.innerhtml='<h2>'+list[i].title+'</h2>'
        h1=document.createElement('h1')
        button1=document.createElement('button')
        button2=document.createElement('button')
        button3=document.createElement('button')

        h1.innerText=i.title
        div.appendChild(h1)
        
        button1.className='Button'
        button1.innerText='Mark as complete'
        div.appendChild(button1)
        
        button2.className='Button'
        button2.innerText='Edit'
        div.appendChild(button2)

        button3.className='Button'
        button3.innerText='Delete'
        div.appendChild(button3)

        main.appendChild(div)

        buttons=document.getElementsByClassName('Button')
}










main.style='height:auto; color: black;'






//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//------------------------------------------------------------------------------

// console.log(document.getElementsByTagName('ul'))
uls=document.getElementsByTagName('ul')


// for ( i=0 ; i<uls.length; i++){
//     uls[i].style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger;';
// }

/*

160

parent.children is not an array. It is HTMLCollection and it does not have forEach method. You can convert it to the array first. For example in ES6:
*/
Array.from(uls).forEach(child=>{
    console.log(child)
    child.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'
    console.log(child)
})

//we can't directly use foreach with html collection

// uls.forEach(e => {
//     e.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'
//     console.log(e)
// })




// header.style='position-fixed; margin-top: 0px'
// ulheader.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'


// footer.style='position-relative; margin-top: 0px'
// ulfooter.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'


// footer.appendChild(createFooter())

