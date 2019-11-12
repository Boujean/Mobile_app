//On écrira pour chaque gamme un objet de la façon suivante:

export const modeIonien1 = {
  nomGamme: 'Mode Ionien ',
  positionGamme: 'Position 1',
  notesJouables: {
    //Pour chaque corde, on a un tableau
    //des positionGammes des notes du mode
    //relativement à la Tonique du mode.
    corde1: [0, 2, 4],
    corde2: [0, 2, 4],
    corde3: [1, 2, 4],
    corde4: [1, 2, 4],
    corde5: [2, 4, 5],
    corde6: [2, 4, 5]
  }
};
export const modeIonien2 = {
  nomGamme: 'Mode Ionien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2],
    corde2: [-1, 0, 2],
    corde3: [-1, 1, 2],
    corde4: [-1, 1, 2],
    corde5: [0, 2],
    corde6: [-1, 0, 2]
  }
};
export const modeIonien3 = {
  nomGamme: 'Mode Ionien ',
  positionGamme: 'Position3',
  notesJouables: {
    corde1: [0, 2, 4, 5],
    corde2: [2, 4, 6, 7],
    corde3: [4, 6, 7, 9],
    corde4: [6, 8, 9, 11],
    corde5: [9, 10, 12],
    corde6: [9, 10, 12]
  }
};


export const modeDorien1 = {
  nomGamme: 'Mode Dorien ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 2, 4],
    corde3: [0, 2, 4],
    corde4: [0, 2, 4],
    corde5: [2, 3, 5],
    corde6: [2, 3, 5]
  }
};

export const modeDorien2 = {
  nomGamme: 'Mode Dorien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 3, 5],
    corde2: [2, 4, 5, 7],
    corde3: [4, 5, 7],
    corde4: [4, 6, 7, 9],
    corde5: [7, 8, 10],
    corde6: [7, 9, 10, 12]
  }
};

export const modeDorien3 = {
  nomGamme: 'Mode Dorien ',
  positionGamme: 'Position3',
  notesJouables: {
    corde1: [0, 2],
    corde2: [-2, 0, 2],
    corde3: [-1, 0, 2],
    corde4: [-1, 0, 2],
    corde5: [0, 2],
    corde6: [-2, 0, 2]
  }
};

export const modePhrygien1 = {
  nomGamme: 'Mode Phrygien ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 2, 3],
    corde3: [0, 2, 3],
    corde4: [0, 2, 4],
    corde5: [1, 3, 5],
    corde6: [1, 3, 5]
  }
};

export const modePhrygien2 = {
  nomGamme: 'Mode Phrygien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 1],
    corde2: [-2, 0, 2],
    corde3: [-2, 0, 2],
    corde4: [-2, 0, 2],
    corde5: [0, 1],
    corde6: [-2, 0, 1]
  }
};
export const modePhrygien3 = {
  nomGamme: 'Mode Phrygien ',
  positionGamme: 'Position3',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 2, 3],
    corde3: [2, 3, 5],
    corde4: [2, 4, 5, 7],
    corde5: [5, 6, 8],
    corde6: [5, 7, 8, 10, 12]
  }
};

export const modeLydien1 = {
  nomGamme: 'Mode Lydien ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [1, 2, 4],
    corde3: [1, 2, 4],
    corde4: [1, 3, 4],
    corde5: [2, 4, 5],
    corde6: [2, 4, 6]
  }
};

export const modeLydien2 = {
  nomGamme: 'Mode Lydien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2],
    corde2: [-1, 1, 2],
    corde3: [-1, 1, 2],
    corde4: [-1, 1],
    corde5: [-1, 0, 2],
    corde6: [-1, 0, 2]
  }
};

export const modeLydien3 = {
  nomGamme: 'Mode Lydien ',
  positionGamme: 'Position3',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [1, 2, 4],
    corde3: [1, 2, 4],
    corde4: [1, 3, 4, 6],
    corde5: [ 4, 5, 7],
    corde6: [ 4, 6, 7, 9, 11, 12]
  }
};

export const modeMixolydien1 = {
  nomGamme: 'Mode Mixolydien ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [0, 2, 4],
    corde3: [0, 2, 4],
    corde4: [1, 2, 4],
    corde5: [2, 3, 5],
    corde6: [2, 4, 5]
  }
};

export const modeMixolydien2 = {
  nomGamme: 'Mode Mixolydien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [ 0, 2],
    corde2: [-1, 0, 2],
    corde3: [-1, 0, 2],
    corde4: [-1, 1, 2],
    corde5: [ 0, 2],
    corde6: [-2, 0]
  }
};

export const modeMixolydien3 = {
  nomGamme: 'Mode Mixolydien ',
  positionGamme: 'Position3',
  notesJouables: {
    corde1: [ 0, 2, 4, 5],
    corde2: [ 2, 4, 5, 7],
    corde3: [ 4, 6, 7, 9],
    corde4: [ 6, 7, 9],
    corde5: [ 7, 9, 10, 12],
    corde6: [ 9, 10, 12]
  }
};

export const modeAeolien1 = {
  nomGamme: 'Mode Aéolien ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 2, 3],
    corde3: [0, 2, 4],
    corde4: [0, 2, 4],
    corde5: [1, 3, 5],
    corde6: [2, 3, 5]
  }
};

export const modeAeolien2 = {
  nomGamme: 'Mode Aéolien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2],
    corde2: [-2, 0, 2],
    corde3: [-2, 0, 2],
    corde4: [-1, 0, 2],
    corde5: [0, 1],
    corde6: [-2, 0]
  }
};

export const modeAeolien3 = {
  nomGamme: 'Mode Aéolien ',
  positionGamme: 'Position3',
  notesJouables: {
    corde1: [0, 2, 3, 5],
    corde2: [2, 3, 5, 7, 9, 10],
    corde3: [7, 9, 10],
    corde4: [7, 9, 11],
    corde5: [8, 10, 12],
    corde6: [8, 10, 12]
  }
};

export const modeLocrien1 = {
  nomGamme: 'Mode Locrien ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 1, 3],
    corde3: [0, 2, 3],
    corde4: [0, 2, 3],
    corde5: [1, 3, 5],
    corde6: [1, 3, 5]
  }
};

export const modeLocrien2 = {
  nomGamme: 'Mode Locrien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 1],
    corde2: [-2, 0, 1],
    corde3: [-2, 0, 2],
    corde4: [-2, 0, 2],
    corde5: [-1, 1],
    corde6: [-2, 0]
  }
};

export const modeLocrien3 = {
  nomGamme: 'Mode Locrien ',
  positionGamme: 'Position3',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 1, 3],
    corde3: [0, 2, 3, 5],
    corde4: [2, 3, 5],
    corde5: [3, 5, 6],
    corde6: [3, 5, 6, 8, 10, 12]
  }
};

export const modeMineurMelodique1 = {
  nomGamme: 'Mode Mineur Mélodique ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 2, 4],
    corde3: [1, 2, 4],
    corde4: [0, 2, 4],
    corde5: [2, 4, 5],
    corde6: [2, 3, 5]
  }
};

export const modeMineurMelodique2 = {
  nomGamme: 'Mode Mineur Mélodique ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 2, 4],
    corde3: [1, 2, 4, 5],
    corde4: [2, 4, 6],
    corde5: [4, 5, 7, 8],
    corde6: [5, 7]
  }
};

export const modeDorienb21 = {
  nomGamme: 'Mode Dorien b2 ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 2, 4],
    corde3: [0, 2, 3],
    corde4: [0, 2, 4],
    corde5: [2, 3, 5],
    corde6: [1, 3, 5]
  }
};

export const modeDorienb22 = {
  nomGamme: 'Mode Dorien b2 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 2, 4],
    corde3: [0, 2, 3, 5],
    corde4: [2, 4, 6],
    corde5: [3, 5, 6, 8],
    corde6: [5, 7]
  }
};

export const modeLydienDiese51 = {
  nomGamme: 'Mode Lydien aug #5 ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [1, 3, 4],
    corde3: [1, 2, 4],
    corde4: [1, 3, 5],
    corde5: [2, 4, 5],
    corde6: [2, 4, 6]
  }
};

export const modeLydienDiese52 = {
  nomGamme: 'Mode Lydien aug #5 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [1, 3, 4],
    corde3: [1, 2, 4],
    corde4: [3, 5, 6],
    corde5: [4, 5, 7],
    corde6: [6, 8]
  }
};

export const modeLydienb71 = {
  nomGamme: 'Mode Lydien b7 (bartok) ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [1, 2, 4],
    corde3: [0, 2, 4],
    corde4: [1, 3, 4],
    corde5: [2, 3, 5],
    corde6: [2, 4, 6]
  }
};

export const modeLydienb72 = {
  nomGamme: 'Mode Lydien b7 (bartok) ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [1, 2, 4],
    corde3: [0, 2, 4],
    corde4: [3, 4, 6],
    corde5: [3, 5, 7],
    corde6: [6, 7]
  }
};

export const modeMixolydienb61 = {
  nomGamme: 'Mode Mixolydien b6 ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [0, 2, 3],
    corde3: [0, 2, 4],
    corde4: [1, 2, 4],
    corde5: [1, 3, 5],
    corde6: [2, 4, 5]
  }
};

export const modeMixolydienb62 = {
  nomGamme: 'Mode Mixolydien b6 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [0, 2, 3],
    corde3: [0, 2, 4, 6],
    corde4: [2, 4, 5],
    corde5: [3, 5, 7],
    corde6: [5, 7, 8]
  }
};

export const modeLocrienBecarre21 = {
  nomGamme: 'Mode Locrien ♮2 ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 1, 3],
    corde3: [0, 2, 4],
    corde4: [0, 2, 3],
    corde5: [1, 3, 5],
    corde6: [2, 3, 5]
  }
};

export const modeLocrienBecarre22 = {
  nomGamme: 'Mode Locrien ♮2 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 1, 3],
    corde3: [0, 2, 4, 5],
    corde4: [2, 3, 5],
    corde5: [3, 5, 7, 8],
    corde6: [5, 6, 8]
  }
};

export const modeSuperlocrien1 = {
  nomGamme: 'Mode Superlocrien ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 1],
    corde2: [-2, -1, 1],
    corde3: [-2, 0, 2,],
    corde4: [-2, 0, 1],
    corde5: [-1, 1],
    corde6: [-2, 0, 1]
  }
};

export const modeSuperlocrien2 = {
  nomGamme: 'Mode Superlocrien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 1],
    corde2: [-2, -1, 1],
    corde3: [-2, 0, 2, 3],
    corde4: [0, 1, 3],
    corde5: [1, 3, 5, 6],
    corde6: [3, 4, 6]
  }
};

export const modeMineurHarmonique1 = {
  nomGamme: 'Mode Mineur Harmonique ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 2, 3],
    corde3: [1, 2, 4],
    corde4: [0, 2, 4],
    corde5: [1, 4, 5],
    corde6: [2, 3, 5]
  }
};

export const modeMineurHarmonique2 = {
  nomGamme: 'Mode Mineur Harmonique ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 2, 3],
    corde3: [1, 2, 4, 5],
    corde4: [2, 4, 5],
    corde5: [4, 5, 7, 8],
    corde6: [5, 7, 8]
  }
};

export const modeLocrien61 = {
  nomGamme: 'Mode Locrien 6 ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 1, 4],
    corde3: [0, 2, 3],
    corde4: [0, 2, 3],
    corde5: [2, 3, 5],
    corde6: [1, 3, 5]
  }
};

export const modeLocrien62 = {
  nomGamme: 'Mode Locrien 6 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [0, 1, 4],
    corde3: [0, 2, 3, 5],
    corde4: [2, 3, 6],
    corde5: [3, 5, 6, 8],
    corde6: [5, 6]
  }
};

export const modeIonienDiese51 = {
  nomGamme: 'Mode Ionien #5  ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [0, 3, 4],
    corde3: [1, 2, 4],
    corde4: [1, 2, 5],
    corde5: [2, 4, 5],
    corde6: [2, 4, 5]
  }
};

export const modeIonienDiese52 = {
  nomGamme: 'Mode Ionien #5 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [0, 3, 4],
    corde3: [1, 2, 4, 6],
    corde4: [2, 5, 6],
    corde5: [4, 5, 7],
    corde6: [5, 8]
  }
};

export const modeDorienDiese41 = {
  nomGamme: 'Mode Dorien #4 ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [1, 2, 4],
    corde3: [0, 2, 4],
    corde4: [0, 3, 4],
    corde5: [2, 3, 5],
    corde6: [2, 3, 6]
  }
};

export const modeDorienDiese42 = {
  nomGamme: 'Mode Dorien #4 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [1, 2, 4],
    corde3: [0, 2, 4, 5],
    corde4: [3, 4, 6],
    corde5: [3, 5, 7, 8],
    corde6: [6, 7]
  }
};

export const modeSuperphrygien1 = {
  nomGamme: 'Mode Superphrygie ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 1, 4],
    corde2: [0, 2, 3],
    corde3: [0, 2, 3],
    corde4: [1, 2, 4],
    corde5: [1, 3, 5],
    corde6: [1, 4, 5]
  }
};

export const modeSuperphrygien2 = {
  nomGamme: 'Mode Superphrygien ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 1, 4],
    corde2: [0, 2, 3],
    corde3: [0, 2, 3, 5],
    corde4: [2, 4, 5],
    corde5: [3, 5, 6],
    corde6: [5, 7, 8]
  }
};

export const modeLydienDiese21 = {
  nomGamme: 'Mode Lydien #2 ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 3, 4],
    corde2: [1, 2, 4],
    corde3: [1, 2, 5],
    corde4: [1, 3, 4],
    corde5: [2, 4, 5],
    corde6: [3, 4, 6]
  }
};

export const modeLydienDiese22 = {
  nomGamme: 'Mode Lydien #2 ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 3, 4],
    corde2: [1, 2, 4],
    corde3: [1, 2, 5, 6],
    corde4: [3, 4, 6],
    corde5: [4, 5, 8],
    corde6: [6, 7]
  }
};

export const modeSuperlocrienDiminue1 = {
  nomGamme: 'Mode Superlocrien Diminué ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [-1, 1, 3],
    corde3: [-1, 2, 3],
    corde4: [0, 1, 3],
    corde5: [1, 2, 5],
    corde6: [1, 3, 4]
  }
};

export const modeSuperlocrienDiminue2 = {
  nomGamme: 'Mode Superlocrien Diminué ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [-1, 1, 3],
    corde3: [-1, 2, 3, 5],
    corde4: [1, 3, 5],
    corde5: [2, 5, 6, 8],
    corde6: [4, 6, 8]
  }
};

export const modePelog = {
  nomGamme: 'Mode Pelog (asiatique)',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [2, 3],
    corde3: [2, 3, 5],
    corde4: [4, 5],
    corde5: [5, 6, 8],
    corde6: [7, 8]
  }
};

export const modeHirajoshi = {
  nomGamme: 'Mode Hirajoshi (asiatique)',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [2, 3],
    corde3: [2, 4, 5],
    corde4: [4, 5],
    corde5: [5, 7, 8],
    corde6: [7, 8]
  }
};

export const modeKumoi = {
  nomGamme: 'Mode Kumoï (asiatique)',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [2, 4],
    corde3: [2, 4, 5],
    corde4: [4, 6],
    corde5: [5, 7, 8],
    corde6: [7]
  }
};

export const modeBeBop = {
  nomGamme: 'Be-Bop',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [0, 2, 4],
    corde3: [0, 1, 2, 4, 6],
    corde4: [2, 4, 6],
    corde5: [3, 4, 5, 7],
    corde6: [5, 7]
  }
};

export const gammeParTon1 = {
  nomGamme: 'Gamme par tons (T T) ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [1, 3, 5],
    corde3: [2, 4, 6],
    corde4: [3, 5, 7],
    corde5: [5, 7],
    corde6: [6]
  }
};

export const gammeParTon2 = {
  nomGamme: 'Gamme par tons (T T) ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 4],
    corde2: [-1, 1],
    corde3: [-2, 0],
    corde4: [-3, -1],
    corde5: [-3, -1],
    corde6: [-4, -2, 0]
  }
};

export const gammeDiminueeDemiTonTon = {
  nomGamme: 'Gamme diminuée (1/2T T)',
  notesJouables: {
    corde1: [0, 1, 3],
    corde2: [-1, 1, 2],
    corde3: [-1, 0, 2],
    corde4: [-2, 0, 1],
    corde5: [-1, 0, 2, 3],
    corde6: [0, 1, 3, 4]
  }
};

export const gammeDiminueeTonDemiTon1 = {
  nomGamme: 'Gamme diminuée (T 1/2T) ',
  positionGamme: 'Position 1',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 1, 3],
    corde3: [-1, 1, 2],
    corde4: [-1, 0, 2],
    corde5: [-1, 1, 2],
    corde6: [-1, 0, 2, 3]
  }
};

export const gammeDiminueeTonDemiTon2 = {
  nomGamme: 'Gamme diminuée (T 1/2T) ',
  positionGamme: 'Position 2',
  notesJouables: {
    corde1: [0, 2, 3],
    corde2: [0, 1, 3],
    corde3: [-1, 1, 2, 4, 5],
    corde4: [2, 3, 5],
    corde5: [2, 4, 5, 7, 8],
    corde6: [5, 6, 8]
  }
};

export const gammeHarmoniqueDouble = {
  nomGamme: 'Harmonique double (hispano-arabe)',
  notesJouables: {
    corde1: [0, 1, 4],
    corde2: [0, 2, 3],
    corde3: [1, 2, 3, 6],
    corde4: [2, 4, 5],
    corde5: [4, 5, 6],
    corde6: [5, 7]
  }
};

export const pentaMineure = {
  nomGamme: 'Pentatonique Mineure',
  notesJouables: {
    corde1: [0, 3],
    corde2: [0, 2],
    corde3: [0, 2],
    corde4: [0, 2],
    corde5: [0],
    corde6: [0, 3]
  }
};

export const pentaMajeure = {
  nomGamme: 'Pentatonique Majeure',
  notesJouables: {
    corde1: [0, 2],
    corde2: [-1, 2],
    corde3: [-1, 2],
    corde4: [-1, 1],
    corde5: [0, 2],
    corde6: [0, 2]
  }
};

export const fnzio = {
  nomGamme: '',
  notesJouables: {
    corde1: [],
    corde2: [],
    corde3: [],
    corde4: [],
    corde5: [],
    corde6: []
  }
};

export const modeIonien = {
  nomGamme: 'modeIonien',
  modes: [modeIonien1, modeIonien2, modeIonien3]
};

export const modeDorien = {
  nomGamme: 'modeDorien',
  modes: [modeDorien1, modeDorien2, modeDorien3]
};

export const modePhrygien = {
  nomGamme: 'modePhrygien',
  modes: [modePhrygien1, modePhrygien2, modePhrygien3]
};

export const modeLydien = {
  nomGamme: 'modeLydien',
  modes: [modeLydien1, modeLydien2, modeLydien3]
};

export const modeMixolydien = {
  nomGamme: 'modeMixolydien',
  modes: [modeMixolydien1, modeMixolydien2, modeMixolydien3]
};

export const modeAeolien = {
  nomGamme: 'modeAeolien',
  modes: [modeAeolien1, modeAeolien2, modeAeolien3]
};

export const modeLocrien = {
  nomGamme:'modeLocrien',
  modes: [modeLocrien1, modeLocrien2, modeLocrien3]
};

export const modeMineurMelodique = {
  nomGamme:'modeMineurMelodique',
  modes: [modeMineurMelodique1, modeMineurMelodique2]
};

export const modeDorienb2  = {
  nomGamme:'modeDorienb2',
  modes: [modeDorienb21, modeDorienb22]
};
export const modeLydienDiese5 = {
  nomGamme: 'modeLydienDiese5',
  modes: [modeLydienDiese51, modeLydienDiese52]
};
export const modeLydienb7  = {
  nomGamme: 'modeLydienb7',
  modes: [modeLydienb71, modeLydienb72]
};
export const modeMixolydienb6  = {
  nomGamme:'modeMixolydienb6',
  modes: [modeMixolydienb61, modeMixolydienb62]
};
export const modeLocrienBecarre2 = {
  nomGamme:'modeLocrienBecarre2',
  modes: [modeLocrienBecarre21, modeLocrienBecarre22]
};
export const modeSuperlocrien  = {
  nomGamme:'modeSuperlocrien',
  modes: [modeSuperlocrien1, modeSuperlocrien2]
};
export const modeMineurHarmonique = {
  nomGamme:'modeMineurHarmonique',
  modes: [modeMineurHarmonique1, modeMineurHarmonique2]
};
export const modeLocrien6 = {
  nomGamme:'ModeLocrien6',
  modes: [modeLocrien61, modeLocrien62]
};
export const modeIonienDiese5 = {
  nomGamme:'ModeIonienDiese5',
  modes: [modeIonienDiese51, modeIonienDiese52]
};
export const modeDorienDiese4 = {
  nomGamme:'modeDorienDiese4',
  modes: [modeDorienDiese41, modeDorienDiese42]
};
export const modeSuperphrygien = {
  nomGamme:'modeSuperphrygien',
  modes: [modeSuperphrygien1, modeSuperphrygien2]
};
export const modeLydienDiese2 = {
  nomGamme:'modeLydienDiese2',
  modes: [modeLydienDiese21, modeLydienDiese22]
};
export const modeSuperlocrienDiminue = {
  nomGamme:'modeSuperlocrienDiminue',
  modes: [modeSuperlocrienDiminue1, modeSuperlocrienDiminue2]
};
export const gammeParTon = {
  nomGamme:'gammeParTon',
  modes: [gammeParTon1, gammeParTon2]
};
export const gammeDiminueeTonDemiTon = {
  nomGamme:'gammeDiminueeTonDemiTon',
  modes: [gammeDiminueeTonDemiTon1, gammeDiminueeTonDemiTon2]
};
