//-------on défini les variables-----------

//--------les boutons--------
const buttons = document.querySelectorAll(".btn-noir")


// -----------affichage du résultat--------------

const result = document.getElementById("result")


//------ pour que l'écran affiche le bouton cliqué -----------
buttons.forEach((button) =>{
    button.addEventListener('click',(e)=> {
        // "+=" pour que les s'ajoutent a la suite et ne s'effacent pas
        result.textContent += (e.target.id);

    })
})

//---- pour que JS calcule ce qui est entré---
equal.addEventListener('click',() => {
    result.textContent = eval(result.textContent)
})

//----pour effacer ce qui est à l'écran----

Clear.addEventListener('click',()=>{
    result.textContent = "";
})
