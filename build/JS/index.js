let elForm = document.querySelector('.form');
let elInputWrapper = document.querySelector('.inputWrapper');
let elNameInput = document.querySelector('.nameInput') ;

let warning = (evt) => {
        evt.preventDefault();
        let warningText = document.createElement('p');
        elInputWrapper.appendChild(warningText);
        warningText.className = 'pl-5 mt-1 text-[#ff00009e] text-[12px] redText';
        elNameInput.classList.add('placeholder:text-red-500');
        elNameInput.classList.add('border-b-red-500')
        
        
        if(elNameInput.value.trim() == ''){
                warningText.textContent = 'This field can’t be empty';
                
        }else {
                warningText.textContent = ''; 
        }
}

elForm.addEventListener('submit', warning);
