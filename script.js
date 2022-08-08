const minput = document.querySelector(".main-input");
const mbtn = document.querySelector(".main-btn");
const mul = document.querySelector(".main-ul");
const msg = document.querySelector(".msg");
const search = document.querySelector(".navbar-input");
const darkMode = document.querySelector(".dark-light");
const navSection = document.querySelector(".navbar-section");
const aDark = document.querySelector("a");
const bdark = document.querySelector("body");
const pdark = document.querySelector("p");
const listt = document.querySelector("li");
const mdark = document.querySelector(".moon");
const sundis = document.querySelector(".sun");
let DarkMode = localStorage.getItem("darkMode");
mbtn.addEventListener("click",additem);
mul.addEventListener("click",deleteNode);
darkMode.addEventListener("click",makeDark);
function additem(e){
    e.preventDefault();
    if(minput.value === ""){
        msg.innerHTML = "Please add your task!";
        msg.style.color = "red";
    }else{
        msg.remove();
        const mli = document.createElement("li");
        mli.classList.add("taskLi");
        mli.appendChild(document.createTextNode(minput.value));
        const makeBtn = document.createElement("button");
        const btnText = document.createTextNode("X");
        makeBtn.classList.add("deletebtn"); 
        makeBtn.appendChild(btnText);
        mli.appendChild(makeBtn);
        mul.appendChild(mli);
        minput.value = "";
    }
}
function deleteNode(e){
    e.preventDefault();
    if(e.target.classList.contains("deletebtn")){
        let li =  e.target.parentElement;
        mul.removeChild(li);
    }
}
search.addEventListener("keyup",searchTask);
function searchTask(e){
    e.preventDefault();
    let selectTxt = e.target.value;
    let lis = mul.getElementsByTagName("li");
    Array.from(lis).forEach(function(specificLi){
        let eachTask = specificLi.firstChild.textContent;
        //console.log(specificLi);
        if(eachTask.indexOf(selectTxt) != -1){
            specificLi.style.display = "flex";
        }else{
            specificLi.style.display = "none";
        }
        
    });
}
function dark(){
    navSection.classList.add("navbar-dark");
    search.classList.add("navbar-input-dark");
    aDark.classList.add("a-dark");
    darkMode.classList.add("dark-light-color");
    bdark.classList.add("body-dark");
    pdark.classList.add("p-dark");
    minput.classList.add("main-input-dark");
    mbtn.classList.add("main-btn-dark");
    mbtn.classList.add("main-btn-hov");
    mul.classList.add("li-dark");
    mdark.classList.add("moon-dark");
    mdark.classList.remove("moon-disable");
    sundis.classList.remove("sun-enable");
    sundis.classList.remove("sun");
    sundis.classList.add("sun-disable");
    localStorage.setItem("darkMode", "enabled");
}
function disable(){
    navSection.classList.remove("navbar-dark");
    search.classList.remove("navbar-input-dark");
    aDark.classList.remove("a-dark");
    darkMode.classList.remove("dark-light-color");
    bdark.classList.remove("body-dark");
    pdark.classList.remove("p-dark");
    minput.classList.remove("main-input-dark");
    mbtn.classList.remove("main-btn-dark");
    mbtn.classList.remove("main-btn-hov");
    listt.classList.remove("li-dark");
    sundis.classList.remove("sun-disable");
    mul.classList.remove("li-dark");
    sundis.classList.add("sun-enable");
    mdark.classList.add("moon-disable");
    mdark.classList.remove("moon-dark");
    mdark.classList.remove("moon");
    localStorage.setItem("darkMode",null);

}
if(DarkMode === "enabled"){
    dark();
}
function makeDark(e){
    DarkMode = localStorage.getItem("darkMode");
    if(DarkMode !== "enabled"){
        dark();
    }else{
        disable();
    } 
}
