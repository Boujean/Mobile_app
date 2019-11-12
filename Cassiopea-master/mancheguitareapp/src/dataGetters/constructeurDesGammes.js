const constructGammeAbsolueFromNote = (gamme, note) => {
  const donneesGamme = {
    notesAAfficher: {
      corde1: [],
      corde2: [],
      corde3: [],
      corde4: [],
      corde5: [],
      corde6: [],
    }
  };
  const decalage = note.positionGraveCorde1;
  for (let i = 0; i < gamme.notesJouables.corde1.length; i++) {
    donneesGamme.notesAAfficher.corde1.push(gamme.notesJouables.corde1[i] + decalage);
  }
  for (let i = 0; i < gamme.notesJouables.corde2.length; i++) {
    donneesGamme.notesAAfficher.corde2.push(gamme.notesJouables.corde2[i] + decalage);
  }
  for (let i = 0; i < gamme.notesJouables.corde3.length; i++) {
    donneesGamme.notesAAfficher.corde3.push(gamme.notesJouables.corde3[i] + decalage);
  }
  for (let i = 0; i < gamme.notesJouables.corde4.length; i++) {
    donneesGamme.notesAAfficher.corde4.push(gamme.notesJouables.corde4[i] + decalage);
  }
  for (let i = 0; i < gamme.notesJouables.corde5.length; i++) {
    donneesGamme.notesAAfficher.corde5.push(gamme.notesJouables.corde5[i] + decalage);
  }
  for (let i = 0; i < gamme.notesJouables.corde6.length; i++) {
    donneesGamme.notesAAfficher.corde6.push(gamme.notesJouables.corde6[i] + decalage);
  }

  return donneesGamme;
};

export default constructGammeAbsolueFromNote;
