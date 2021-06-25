const quotes = [
  {
    quote: 'El romanticismo está hecho para los que tienen el corazón roto.',
    author: 'Elvira Sastre',
  },
  {
    quote: `Sé que me haces feliz
    porque mi tristeza no te reconoce.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Que tus intentos de quebrarme el paso
    sólo consiguieron hacerme pisar más fuerte,
    y cuanto más lejos te colocas
    más cerca estoy de mí misma.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Me pregunto si habrá respuestas en sus ojos,
    si acaso piensa en quién es,
    si sabrá que en su mirada
    está mi vida completa.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Odio el frío:
    solo es una excusa
    para llamar a tu abrazo.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `No sé quién soy
    ni en qué baso lo que hago,
    pero habría tasado tu risa en una eternidad.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Posees una risa capaz de rescatar al país
    y la mirada de quien sabe soñar con los ojos abiertos.`,
    author: 'Elvira Sastre',
  },
  {
    quote: 'Huir significa ir a buscarte.',
    author: 'Elvira Sastre',
  },
  {
    quote: `Ni todos los lugares de los que uno se va
    se pausan
    ni todas las personas que uno abandona
    se quedan.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Y que te mire.
    Y que no seas tú.
    Y suspire de alivio`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Pero es que te miro
    y no eres tú.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Debo reconocer que no tengo miedo:
    solo heridas.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Así funcionan los recuerdos:
    cuando más lejos están,
    más queman.
    Y cuando uno se da cuenta,
    el mundo entero ya está en llamas.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Soy igual de débil e igual de fuerte
    que una flor en medio de un campo en ruinas.`,
    author: 'Elvira Sastre',
  },
  {
    quote: `Recuerda esto: no hay peor cicatriz
    que la quiere abrirse
    ni peor secreto
    que el que se puede revelar.`,
    author: 'Elvira Sastre',
  },
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  document.querySelector('#quote').innerText = quotes[random].quote;
  document.querySelector('#author').innerText = quotes[random].author;
}

newQuote();
