let cite = document.querySelector('p#sight')

let changeBG = document.querySelector("#nuitJour")

let colorsScheme = ['blue', 'red']

cite.style.width='fit-content'

changeBG.addEventListener('click', ()=>{    

    let i = 0;
    if(cite.style.background){
        if(cite.style.background == 'blue'){
            i=1;
        }
        else{
            i=0;
        }
    }
    else{
        i=0;
    }
    cite.style.background = colorsScheme[i]
})

