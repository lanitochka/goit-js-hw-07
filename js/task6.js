

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }




const inputRef = document.querySelector('#validation-input');


// 1 метод

// inputRef.addEventListener('blur', event => {
//     const value = event.target.value;
//     const lenghtRef = event.target.getAttribute('data-length');
//     // console.log(event.target.getAttribute('data-length'));

//     event.target.removeAttribute('class'); 

//     value.length === +lenghtRef 
//         ? inputRef.classList.add('valid')        
//         : inputRef.classList.add('invalid');  
// })    



// 2 метод

inputRef.addEventListener('blur', () => {
    const validateRef = +inputRef.dataset.length;

    inputRef.removeAttribute('class'); 
 
     switch (inputRef.value.length) {
        case validateRef:
            inputRef.classList.add('valid');
            break;
        case 0:
            inputRef.removeAttribute('class');  
            break;        
        default:
            inputRef.classList.add('invalid');             
    }
})

