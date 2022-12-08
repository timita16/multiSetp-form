const errorForm = (form) => {
    let error = {};
    let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    //NAME
    if(!form.name) {
        error.name = "Field required"
    }else if(form.name.length <= 2) {
        error.name = "Name must have more two character"
    }
    //EMAIL
    if(!form.name) {
        error.email = "Field required"
    }else if(!expRegEmail.test(form.email)) {
        error.email = "Must be a email valid"
    }
    //NUMBER
    if(!form.number) {
        error.number = "Field required"
    } else{

    }
  return {
    error
  }
}

export default errorForm