//Importation de toutes les gammes définies dans ./Gammes.js
import { modeIonien, modeIonien1,modeIonien2,modeIonien3,
        modeLydien, modeLydien1, modeLydien2, modeLydien3,
        modeDorien ,modeDorien1, modeDorien2, modeDorien3,
        modePhrygien, modePhrygien1,modePhrygien2, modePhrygien3,
        modeMixolydien, modeMixolydien1, modeMixolydien2, modeMixolydien3,
        modeAeolien, modeAeolien1, modeAeolien2, modeAeolien3,
        modeLocrien, modeLocrien1, modeLocrien2, modeLocrien3,
        modeMineurMelodique, modeMineurMelodique1, modeMineurMelodique2,
        modeDorienb2, modeDorienb21, modeDorienb22,
        modeLydienDiese5, modeLydienDiese51, modeLydienDiese52,
        modeLydienb7, modeLydienb71, modeLydienb72,
        modeMixolydienb6, modeMixolydienb61, modeMixolydienb62,
        modeLocrienBecarre2, modeLocrienBecarre21, modeLocrienBecarre22,
        modeSuperlocrien, modeSuperlocrien1, modeSuperlocrien2,
        modeMineurHarmonique, modeMineurHarmonique1, modeMineurHarmonique2,
        modeLocrien6, modeLocrien61, modeLocrien62,
        modeIonienDiese5, modeIonienDiese51, modeIonienDiese52,
        modeDorienDiese4, modeDorienDiese41, modeDorienDiese42,
        modeSuperphrygien, modeSuperphrygien1, modeSuperphrygien2,
        modeLydienDiese2, modeLydienDiese21, modeLydienDiese22,
        modeSuperlocrienDiminue, modeSuperlocrienDiminue1, modeSuperlocrienDiminue2,
        modePelog,
        modeHirajoshi, modeKumoi, modeBeBop,
        gammeParTon, gammeParTon1, gammeParTon2,
        gammeDiminueeDemiTonTon,
        gammeDiminueeTonDemiTon, gammeDiminueeTonDemiTon1, gammeDiminueeTonDemiTon2,
        gammeHarmoniqueDouble, pentaMineure,
        pentaMajeure} from './Gammes';

//Chaque type d'accord est défini dans un objet de la façon suivante:
export const accordMajeur = {
  nom: 'Accord Majeur',
  //les modes Jouables depuis ce type d'accord sont dans un Array de Gammes.
  modesJouables: [modeIonien,
     modeLydien,
     modeMixolydien,
     modeLydienDiese2,
     modeLydienb7,
     modeMixolydienb6,
     modeSuperphrygien,
     modePhrygien,
     pentaMajeure]
};

export const accordM7 = {
  nom: 'Accord M7',
  modesJouables: [modeIonien,
    modeLydien,
    modeLydienDiese2,
    pentaMajeure]
};

export const accordMineur = {
  nom: 'Accord mineur',
  modesJouables: [modeDorien,
    modeAeolien,
    modePhrygien,
    modeDorienb2,
    modeDorienDiese4,
    modeMineurMelodique,
    modeMineurHarmonique,
    modePelog, modeHirajoshi, modeKumoi,
    pentaMineure]
};

export const accordMoins7 = {
  nom: 'Accord -7',
  modesJouables: [modeDorien,
    modeAeolien,
    modePhrygien,
    modeDorienb2,
    modeDorienDiese4,
    modePelog, modeHirajoshi,
    modeKumoi, pentaMineure]
};

export const accord7 = {
  nom: 'Accord 7',
  modesJouables: [modeMixolydien,
    modeBeBop,
    modeLydienb7,
    modeMixolydienb6,
    modeSuperphrygien,
    modePhrygien,
    pentaMajeure]
};

export const accord7alt = {
  nom: 'Accord 7alt',
  modesJouables: [modeSuperlocrien,
    modeMixolydienb6,
    modeSuperphrygien,
    gammeParTon, gammeDiminueeDemiTonTon,
    modeLydienb7,
    pentaMajeure]
};

export const accordMoins7b5 = {
  nom: 'Accord -7b5',
  modesJouables: [modeLocrien,
    modeLocrienBecarre2,
    modeLocrien6,
    modeSuperlocrien,
    gammeDiminueeDemiTonTon,
    modeDorienDiese4, pentaMineure]
};

export const accord7barre = {
  nom: 'Accord 7̶',
  modesJouables: [modeSuperlocrienDiminue,
    gammeDiminueeDemiTonTon,
    gammeDiminueeTonDemiTon,
    modeSuperlocrien,
    modeLocrien61]
};

export const accord7sus4 = {
  nom: 'Accord 7sus4',
  modesJouables: [modeMixolydien,
    modeDorien,
    modeIonien,
    modePhrygien,
    modeHirajoshi, modeKumoi, pentaMajeure]
};

export const accordMoinsM7 = {
  nom: 'Accord -M7',
  modesJouables: [modeMineurMelodique,
    modeMineurHarmonique,
    modeHirajoshi,
    modeKumoi, pentaMineure]
};

export const accordM7Diese11 = {
  nom: 'Accord M7#11',
  modesJouables: [modeLydien,
    modeLydienDiese5,
    modeLydienDiese2,
    modePelog,
  pentaMajeure]
};

export const accordPlusM7 = {
  nom: 'Accord +M7',
  modesJouables: [modeLydienDiese5,
    modeIonienDiese5,
    gammeHarmoniqueDouble]

};
