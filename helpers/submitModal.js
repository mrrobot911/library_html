export const submitModal = (e) => {  
    e.preventDefault()
    const formData = new FormData(e.target);
    e.target.reset();
    formData.has('email') && localStorage.setItem(formData.get('email'), formData.get('password'));
    document.querySelector('.close').click();
}