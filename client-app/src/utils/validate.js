const validateHandler = (fields, checkInputValidity) => {
  if(!fields.length) {
    checkInputValidity({
      isValid: false,
      message: `Please provide valid input`
    })
    return;
  }
  for(let i = 0; i < fields.length; i++) {
    const valLength = fields[i].value.trim().length;
    if(!fields[i].value) {
      checkInputValidity({
        isValid: false,
        message: `Please provide valid input`
      })
      return;
    }

    if(fields[i].type === "text" && valLength > 100) {
      checkInputValidity({
        isValid: false,
        message: `Input length must be less than 100 characters`
      })
      return;
    }

    if(fields[i].type === "number" && isNaN(Number(fields[i].value))) {
      checkInputValidity({
        isValid: false,
        message: `Input number must be valid`
      })
      return;
    }

    if(fields[i].type === "number" && Number(fields[i].value) < 1) {
      checkInputValidity({
        isValid: false,
        message: `Input number must be greater than 0`
      })
      return;
    }
  }

  checkInputValidity({
    isValid: true,
    message: ``
  })
};

export default validateHandler;
