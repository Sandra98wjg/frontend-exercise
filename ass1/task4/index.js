const outEl=document.getElementById("output-el")
const firName=document.getElementById("first-name")
const laName=document.getElementById("last-name")
const birDay=document.getElementById("b-day")
const livCities= document.getElementsByName("city")
const ferCheese=document.getElementById("f-cheese")
// const
let haveFName=false
let haveLName=false
let haveBDay=false
let firstName=""
let lastName=""
let age=0
let favouriteCheese="Haloumi"
let city="no cities"

function check(){
    if(! haveFName){
        outEl.textContent="Do not enter an invalid firstname"
        return
    }
    if(!haveLName){
        outEl.textContent="Do not enter an invalid lastname"
        return
    }
    if(!haveBDay){
        outEl.textContent="Do not enter an invalid date of birth"
        return
    }
    outEl.textContent=`Hello ${firstName} ${lastName}, you are ${age} years old, your favourite cheese is ${favouriteCheese} and you've lived in ${city}.`
}

function fName(){
    if(firName.value.length<3||firName.value.length>50){
        haveFName=false
    }
    else {
        haveFName=true
    }
    firstName=firName.value
    check()
}

function lName(){
    if(laName.value.length<3||laName.value.length>50) {
        haveLName=false
    }
    else {
        haveLName=true
    }
    lastName=laName.value
    check()
}
function bDay(){
    let reg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
    let regExp = new RegExp(reg)
    if(!regExp.test(birDay.value)){
        haveBDay=false
    }
    else{
        haveBDay=true
    }
    age=getAge(birDay.value)
    check()
}
function fCheese(){
    favouriteCheese=ferCheese.value
    check()
}

function lCity(){
    city=""
    for(let i=0;i<livCities.length;i++){
        if(livCities[i].checked){
           city+=livCities[i].value+", "
        }
    }
    city=city.substr(0, city.length - 2)
    if(city===""){
        city="no cities"
    }
    check()
}

function remove(){
    haveFName=false
    haveLName=false
    haveBDay=false
    firstName=""
    lastName=""
    age=0
    city="no cities"
    firName.value=""
    laName.value=""
    birDay.value=""
    outEl.textContent=""
    ferCheese.value="Haloumi"
    for(let i=0;i<livCities.length;i++){
        if(livCities[i].checked){
            livCities[i].checked=false
        }
    }
}

function getAge(bDay){
    let total=0
    let now=new Date().toLocaleDateString().split("/")
    let bDays=bDay.split("/")
    total=parseInt(now[0],10)-parseInt(bDays[2],10)
    if(parseInt(now[1],10)<parseInt(bDays[1],10)){
        total-=1
    }
    else if(parseInt(now[1],10)===parseInt(bDays[1],10)){
        if(parseInt(now[2],10)<parseInt(bDays[0],10)){
            total-=1
        }
    }
    return total
}