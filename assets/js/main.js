const questions = [
  {
    question: 'Quel est le surnom du tractopelle au Québec ?',
    type: 'direct',
    answer: 'test',
    name: 'pseudo',
  },
  {
    question: 'Quel est le fabricant qui ne produit pas de tractopelle ?',
    type: 'direct',
    answer: 'test',
    name: 'fabricant',
  },
  {
    question: 'De quel pays vient le tractopelle ?',
    type: 'direct',
    answer: 'test',
    name: 'awesome',
  },
  {
    question: 'Tractopelle, un engin de chantier [...]',
    type: 'direct',
    answer: 'test',
    name: 'polyvalent',
  },
  {
    question: 'En quelle année a été inventé le tractopelle ?',
    type: 'direct',
    answer: 'test',
    name: 'year',
  },
];

// let acceuil = document.getElementById('acceuil');
// acceuil.addEventListener('click', () => {
//   div.innerHTML = `<button class="rounded-xl p-6 bg-purple-700 text-white flex justify-center hover:border-b-2 hover:bg-lime-400 hover:ease-in-out duration-300" id="btnQuizzAcceuil">Commencer le quizz</button>`;
//   let btnQuizzAcceuil = document.getElementById('btnQuizzAcceuil');
//   btnQuizzAcceuil.addEventListener('click', () => {
//     div.innerHTML = markup;
//   });
// });

let markup = `<h2 class="text-4xl font-bold pb-5 text-lime-400">El famoso retroexcaratractoupel</h2>
<form  id="myForm" class="mt-6">
${questions
  .map((question) => {
    return ` <p class="pt-4 font-normal">${question.question}</p>
  <input class="w-full mt-2 rounded-xl p-2" id="results" name="${question.name}"></input>
  `;
  })
  .join('')} 

<button id="btnSubmito" type="submit" class="bg-purple-700 text-white rounded-xl flex justify-center mt-6 ml-12 p-6 hover:border-b-2 hover:bg-lime-400 hover:ease-in-out duration-300 cursor-pointer">Soumettre</button>
</form>
`;

const quizz = document.getElementById('btnQuizz');
let div = document.getElementById('yamete');

quizz.addEventListener('click', () => {
  div.innerHTML = markup;
  let form = document.getElementById('myForm');
  form.addEventListener('submit', function () {
    response();
  });
});

function response() {
  let compteur = 0;
  let input = document.querySelectorAll('input');
  for (let res of input) {
    let valeur = res.value;
    let nom = res.name;
    questions.map((interrogation) => {
      if (interrogation.answer == valeur && interrogation.name == nom) {
        compteur++;
        console.log(compteur);
      }
    });
  }
  div.innerHTML = score(compteur);
  let quizzReturn = document.getElementById('btnQuizzReturn');
  quizzReturn.addEventListener('click', () => {
    div.innerHTML = markup;
    let form = document.getElementById('myForm');
    form.addEventListener('submit', function () {
      response();
      // c'est BON !
    });
  });
}

let score = (resultat) => `
  <h2 class="text-4xl font-bold pb-5 text-black">Votre score est : </h2>
  <p class="text-8xl font-bold p-10 text-lime-400">${resultat}/5</p>
  <button class="bg-purple-700 text-white rounded-xl flex justify-center mt-6 ml-12 p-6 hover:border-b-2 hover:bg-lime-400 hover:ease-in-out duration-300 cursor-pointer" id="btnQuizzReturn">Recommencer</button>
  `;
