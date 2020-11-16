let cite = document.querySelector('p#cite')

//let cite = document.getElementsByClassName('sight')


let colorsScheme = ['blue', 'red', 'green', 'violet', 'goldenrod','cyan','firebrick']

cite.style.width='fit-content'
let i ;

let changeBG = document.querySelector("#bgColor")
changeBG.addEventListener('click', ()=>{    
    if(cite.style.background){
        if(i == colorsScheme.length-1){
            i=0;
        }
        else{
            i++;
        }

    }
    else{
        i=0;
    }
    cite.style.background = colorsScheme[i]
})

let changeCLR = document.querySelector("#txtColor")
changeCLR.addEventListener('click', ()=>{    
    if(i == colorsScheme.length-1){
        i=0;
    }
    else{
        i++;
    }
    cite.style.color = colorsScheme[i]
})

let buttonClass = document.styleSheets.item(0).rules.item(3).cssText

let changeBTN = [];
changeBTN = document.querySelectorAll('.btn') 
let j=0;

changeBTN.forEach(button => {
    button.addEventListener('click', ()=>{
        if(j == colorsScheme.length-1) j=0;
        else{
            j++;
        }
        button.style.background = colorsScheme[j]
        console.log(j)
    })
})
