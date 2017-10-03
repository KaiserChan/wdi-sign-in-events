document.addEventListener("DOMContentLoaded", function() {

  var signIn = document.querySelector('.signin');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var input = document.querySelectorAll('input');
  var form = document.querySelector('.getstarted');
  var modal = document.querySelector('.modal');
  var body = document.querySelector('body');
  var password = document.querySelector('#pass')
  var user = document.querySelector('#user')

  signIn.addEventListener('click', clickSignIn);
  close.addEventListener('click', clickClose);
  submit.addEventListener('click', clickSubmit);
  user.addEventListener('mouseover', hoverUser);
  password.addEventListener('mouseover', hoverPassword);
  // modal.addEventListener('click', clickModal);

  function clickSignIn() {
    modal.style.display = 'block';
  }

  function clickClose() {
    modal.style.display = 'none';
  }

  // function clickModal() {
  //   modal.style.display = 'none';
  // }

  function clickSubmit() {
    password.setAttribute('class', 'error');
    user.setAttribute('class', 'error');
  }

  function hoverUser() {
    user.removeAttribute('class');
  }

  function hoverPassword() {
    password.removeAttribute('class');
  }
});
