const precioTotal = (precio, check, membresia) => {
    let price = Number(precio);
    let {
        onlineService,
        checkBoxStorage,
        customizableProfile
    } = check
    //arreglar si estan mas de uno hablitados
    if(onlineService && membresia==="monthly"){
        price+=1;
    } else if(onlineService && membresia==="yearly"){
        price+=10;
    } else if(checkBoxStorage && membresia==="monthly"){
        price+=2;
    } else if(checkBoxStorage && membresia==="yearly"){
        price+=20;
    } else if(customizableProfile && membresia==="monthly"){
        price+=2;
    } else if(customizableProfile && membresia==="yearly"){
        price+=20;
    } 

    return price
}

export default precioTotal