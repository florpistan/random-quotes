const quotes = [
  {
    quote: 'El romanticismo está hecho para los que tienen el corazón roto.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'Pero mis ojos son también dos tristes idiotas. No se dan cuenta de que no eres tú la que tienes que marcharte para que ellos te dejen de ver. Son ellos los que tienen que dejar de mirarte para conseguir no verte más.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'Como el que lleva al mar a rastras en los ojos, el que camina hacia delante, acariciando espaldas, o el que besa parpados para soñar más tranquilo, te llevo en mi como en un accidente, hecho llanura, como una caricia que termina en poemas mientras tu duermes, como tiene el perdón grabado en el pecho el más culpable.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'No toques si duele, amor, que una herida de tu mano es como una primavera helada y este cuerpo tirita con un sólo roce.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'El aleteo de una mariposa en Vietnam puede causar un terremoto al otro lado del mundo. El casi imperceptible pestañeo de tus ojos es causa del fin de desastres de los míos.',
    author: 'Elvira Sastre',
  },
  {
    quote:
      'Que la vida puede durar un cruce de miradas en medio de una tormenta. Y os aseguro que eso es un regalo, eso es más que suficiente.',
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
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  document.querySelector('#quote').innerText = quotes[random].quote;
  document.querySelector('#author').innerText = quotes[random].author;
}

newQuote();
  