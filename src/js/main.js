(function () {
  const doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');

  let greetings = 'Hello world!';
  document.querySelector('h1').innerHTML = greetings;
}());
