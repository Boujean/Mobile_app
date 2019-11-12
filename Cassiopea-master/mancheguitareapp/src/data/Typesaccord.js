//Importation de toutes les gammes définies dans ./Gammes.js
import { modeIonien1 } from './Gammes';

//Chaque type d'accord est défini dans un objet de la façon suivante:
export const accordMajeur = {
  nom: 'Accord Majeur',
  //les modes Jouables depuis ce type d'accord sont dans un Array de Gammes.
  modesJouables: [modeIonien1]
};
