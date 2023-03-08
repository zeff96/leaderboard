const sucess = document.querySelector('.alert-msg');

export const alertMsg = () => {
  sucess.classList.add('active');
};

export const removeMsg = () => {
  sucess.classList.remove('active');
};