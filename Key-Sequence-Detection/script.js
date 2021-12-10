window.addEventListener('keydown', myFunc);

const password = "sarang";
const key = [];
function myFunc(e){
    key.push(e.key);
    if(key.slice(-password.length,key.length).join("") === password){
        console.log("Password is correct");
        cornify_add();
    }
    console.log(key)
}