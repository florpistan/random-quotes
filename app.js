const quotes = [
  {
    quote: 'El romanticismo está hecho para los que tienen el corazón roto.',
    author: 'Elvira Sastre',
  },
  {
    quote: 'Sé que me haces feliz porque mi tristeza no te reconoce.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'Que tus intentos de quebrarme el paso sólo consiguieron hacerme pisar más fuerte, y cuanto más lejos te colocas más cerca estoy de mí misma.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'Me pregunto si abrá respuestas en sus ojos, si acaso piensa en quién es, si sabrá que en su mirada está mi vida completa.',
    author: 'Elvira Sastre',
  },
  {
    quote: 'Odio el frío: solo es una excusa para llamar a tu abrazo.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'No sé quién soy ni en qué baso lo que hago, pero habría tasado tu risa en una eternidad.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'Cualquiera diría al verte que los catastrofistas fallaron: no era el fin del mundo lo que venía, eras tú.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'Posees una risa capaz de rescatar al país y la mirada de quien sabe soñar con los ojos abiertos.',
    author: 'Elvira Sastre',
  },
  {
    quote: 'Huir significa ir a buscarte.',
    author: 'Elvira Sastre',
  },
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  document.querySelector('#quote').innerText = quotes[random].quote;
  document.querySelector('#author').innerText = quotes[random].author;
}

newQuote();
