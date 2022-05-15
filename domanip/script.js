const url='https://jsonplaceholder.typicode.com/todos';

array=["hi","my","name","is","kk"]
isloading=true

//creating the page structure i.e 3 divs Header, Main, Footer
const body=document.body
let header = document.createElement('div')
let main=document.createElement('div')
let footer=document.createElement('div')
let searchBox=document.createElement('div')
header.className='Header'
main.className='Main'
footer.className='Footer'
searchBox.className='search-box'
body.appendChild(header)
body.appendChild(searchBox)
body.appendChild(main)
body.appendChild(footer)

let list=[]

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

function createSearchbox(){
    let box=document.createElement('input')
    return box
}

function creatButton(){
    button=document.createElement('button')
    button.className='Button'
    button.style='color: white; background-color: transparent; height:40px; border: 2px solid black; font-weight: bold; font-size:large;'
    return button
}



header.appendChild(createHeader())
footer.appendChild(createFooter())
searchBox.appendChild(createSearchbox())
//main element content


function Togglebehave(id){
    for(i=0; i<list.length; i++){
        if(list[i].id==id){
            console.log("id is matched")
            list[i].completed=!list[i].completed
        }
    }
    return list
}


function onMarkClick(event){
    // event.src
    console.log("mark button is clicked")
    id=event.srcElement.parentNode.id
    list=Togglebehave(id)
    render(list)    
}


function editClick(event){
    console.log("edit button is clicked")
    id=event.srcElement.parentNode.id
}

function dltClick(event){
    console.log("delete btton in clicked")
    id=event.srcElement.parentNode.id
    console.log(`deleted item is ${id}`)
    list=list.filter((el)=>{
        return el.id!=id;
    })
 
    render(list)
}

function CreateDivElement(i){
    var div= document.createElement('div')
    div.id=i.id
        if(i.completed){
            div.style='background-color: green; color: white; display: flex; align-items: center; padding: 1%; margin: 10px; color: white; justify-content: space-around;'
        }
        else{
            div.style='background-color: red; display: flex; color: white;  align-items: center; padding: 1%; margin: 10px; color: white; justify-content: space-around;'
        }
        // div.innerhtml='<h2>'+list[i].title+'</h2>'
        h1=document.createElement('h1')
        button1=creatButton()
        button2=creatButton()
        button3=creatButton()

        h1.innerText=i.title
        div.appendChild(h1)

        button1.textContent=(i.completed)?'Mark as incomplete':'mark as complete';
        div.appendChild(button1)
        button1.setAttribute("type","button")
        button1.addEventListener('click',onMarkClick)

        button2.innerText='Edit'
        div.appendChild(button2)
        button2.setAttribute("type","button")
        button2.addEventListener('click',editClick)

        button3.innerText='Delete'
        div.appendChild(button3)
        button3.setAttribute("type","button")
        button3.addEventListener('click',dltClick)

        main.appendChild(div)

       

}


function Loader(){
    div=document.createElement('div')
    h1=document.createElement('h1')
    h1.textContent='Loading...'
    div.appendChild(h1)
    main.appendChild(div)
}

function showData(list){
    for ( i=0 ; i<list.length; i++){
        CreateDivElement(list[i])
    }
}

//default render
render("",true)

fetch(url)
.then(response=>response.json())
.then(data=>{
    list=[...data]
    isloading=false
    render(list,isloading)
})

function clearData(){
    document.querySelector('.main').innerHTML=""
}


function render(data,isloading){
    if(isloading){
        Loader()
    }
    else{
        clearData()
        isloading=false;
        showData(data)
    }
}

















//*****************STYLING******************************* */
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//------------------------------------------------------------------------------

// console.log(document.getElementsByTagName('ul'))

uls=document.getElementsByTagName('ul')

body.style='margin: 0; padding: 0;'

main.style='height:auto; color: black;'

searchBox.style='display: flex; align-items: center; justify-content: center;'

ibox=document.querySelector('input')
// console.log(ibox)
ibox.style='width:50%; height: 40px; border: 2px solid grey;'

/*
parent.children is not an array. It is HTMLCollection and it does not have forEach method. You can convert it to the array first. For example in ES6:
*/
Array.from(uls).forEach(child=>{
    // console.log(child)
    child.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'
    // console.log(child)
})

//we can't directly use foreach with html collection

// uls.forEach(e => {
//     e.style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger; font-family: Georgia, serif;'
//     console.log(e)
// })

//so we use below method also

// for ( i=0 ; i<uls.length; i++){
//     uls[i].style='display:flex; list-style-type: none; justify-content: space-around; height: 50px; background-color: black; color: white; align-items: center; font-weight: bolder; font-size: larger;';
// }
