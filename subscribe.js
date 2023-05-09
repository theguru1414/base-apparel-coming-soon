const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = /^\S+@\S+\.\S+$/;
  const email = emailInput.value;
  if (regex.test(email)) {
    error.style.display = 'none';
    form.reset();
    alert('Thank you for subscribing!');
  } else {
    error.style.display = 'block';
  }
});
