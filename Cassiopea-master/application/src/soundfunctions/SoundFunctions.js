const Sound = require('react-native-sound');

Sound.setCategory('Ambient', true);

// const loadNote = (numCorde, numCase) => {
//   Sound.setCategory('Ambient', true);
//   const sound = new Sound(`corde${numCorde}case${numCase}.mp3`, Sound.MAIN_BUNDLE, (error) => {
//     console.log(`path of sound file to load: corde${numCorde}case${numCase}.mp3`);
//     if (error) {
//       console.log('failed to load the sound', error);
//       return;
//     }
//     sound.setSpeed(1);
//     console.log(`duration: ${sound.getDuration()}`);
//   });
//   return sound;
// };
//
// export const loadAllNotes = () => {
//   const allNotes = [
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//   ];
//   for (let numCorde = 0; numCorde < 6; numCorde++) {
//     for (let numCase = 0; numCase < 22; numCase++) {
//       allNotes[numCorde].push(loadNote(numCorde + 1, numCase + 1));
//     }
//   }
//   return allNotes;
// };
//
// export const playLoadedNote = (allNotes, numCorde, numCase) => {
//   allNotes[numCorde - 1][numCase - 1].play();
// };

export const loadAndPlayNote = (numCorde, numCase) => {
  Sound.setCategory('Ambient', true);
  const s = new Sound(`corde${numCorde}case${numCase}.mp3`, Sound.MAIN_BUNDLE, (error) => {
    console.log(`path of sound file to load: corde${numCorde}case${numCase}.mp3`);
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    s.setSpeed(1);
    console.log(`duration: ${s.getDuration()}`);
    s.play(() => s.release());
  });
};


//TODO:
/*
• importer une bibliothèque de fichiers de sons complète

• créer une fonction qui crée des objets s = new Sound(…) pour chaque objet et
les met dans un objet qui contient des array corde1, …, corde6, dans cet objet
on aura donc le son de chaque case de la guitare préchargé

• on appelera cette fonction au lancement de l'app pour charger tous les sons au lieu
de les charger chaque fois qu'on clique sur un bouton (lol)

• créer une fonction playsoundfor(numCase,numCorde) qui ira chercher dans
le tableau de sons le bon son (simplement avec ses coordonnées) et le jouera
avec un truc du style s.play(() => s.release())

• là on devrait être bon pour les sons :)

*/
