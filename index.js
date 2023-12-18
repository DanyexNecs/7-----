const inputs = document.querySelectorAll('input');//выбирает коллекцию селекторов тега input

const patterns = {
    phone: /^[+]?[7|8]?\d{11}$/,
    name:/^[а-яА-ЯёЁ]+$/,
    surname:/^[а-яА-ЯёЁ]+$/,
    email:/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,
    password:/^([A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
   
}

function validate(field, regex){
 
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
  

}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})



