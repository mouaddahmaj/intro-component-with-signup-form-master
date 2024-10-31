//c'est une function pour verifier l'email si valide ou non
function verifierEmail(email,erreur){
    //l'expression de email valide
    let regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    if(!regex.test(email.value)){
        email.value=''
        email.placeholder="exemple@test.com"
        erreur.classList.add("error-msg")
        email.style.borderColor="hsl(0, 100%, 74%)"
    }
}
//function pour verifier les champs si vide
function verifier(champs){
    champs.forEach((e)=>{
        //on a recuperer l'element qui affiche l'erreur
        let erreur=e.nextElementSibling
        //pour verifier le champ si vide ou nom
        if(e.value.trim()===""){
            erreur.classList.add("error-msg")
            e.style.borderColor="hsl(0, 100%, 74%)"
        }
        else{
            erreur.classList.remove("error-msg")
            e.style.borderColor="hsl(246, 25%, 77%)"
        }
        // nous appellons la function verifierEmail pour verifier si l'email est correct ou non 
        if(e.type=='email'){
            verifierEmail(e,erreur)
        }
    })
}
document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    const inputs=document.querySelectorAll('input')
    verifier(inputs)
})