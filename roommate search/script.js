document.querySelector(".signup").addEventListener("click",()=>{
    console.log("Sign up btn clicked !");
})
document.querySelector(".login").addEventListener("click",()=>{
    console.log("Log in btn clicked !");
})
let form = document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
})
document.querySelector(".search").addEventListener("click",()=>{
    console.log("Search btn clicked !");
})
document.querySelector(".contact").addEventListener("click",()=>{
    console.log("Contact us btn clicked !");
})
