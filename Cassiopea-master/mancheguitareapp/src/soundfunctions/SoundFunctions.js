const Sound = require('react-native-sound');

Sound.setCategory('Ambient', true);

//export const loadSound

export const playSoundBundle = (numCorde, numCase) => {
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
