const price = (plan, membresia) => {
    let precio = "";
    if(plan === "arcade" && membresia==="monthly"){
        precio="9"
    } else if(plan === "arcade" && membresia==="yearly"){
        precio="90"
    } else if(plan === "advanced" && membresia==="monthly"){
        precio="12"
    } else if(plan === "advanced" && membresia==="yearly"){
        precio="120"
    } else if(plan === "pro" && membresia==="monthly"){
        precio="15"
    } else if(plan === "pro" && membresia==="yearly"){
        precio="150"
    }

    return precio
}

export default price