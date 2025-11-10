function showSuccess() {
  const successMessage = document.getElementById('successMessage');
  // Esto lo hace visible:
  successMessage.style.opacity = '1';
  successMessage.style.visibility = 'visible';

  // Esto lo oculta después:
  setTimeout(() => {
    successMessage.style.opacity = '0';
    successMessage.style.visibility = 'hidden';
  }, 3000); 
}