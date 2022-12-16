const precioTotal = (precio, check, membresia) => {
    let price = Number(precio);
    let {
        onlineService,
        checkBoxStorage,
        customizableProfile
    } = check
    if(onlineService && membresia==="monthly"){
        price+=1;
        // eslint-disable-next-line no-unused-expressions
        checkBoxStorage ? price+=2: ""
        // eslint-disable-next-line no-unused-expressions
        customizableProfile ? price+=2: ""
    } else if(onlineService && membresia==="yearly"){
        price+=10;
        // eslint-disable-next-line no-unused-expressions
        checkBoxStorage ? price+=20: ""
        // eslint-disable-next-line no-unused-expressions
        customizableProfile ? price+=20: ""
    } 

    return price
}

export default precioTotal