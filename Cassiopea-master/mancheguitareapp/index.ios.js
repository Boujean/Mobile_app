import { AppRegistry } from 'react-native';
import renderMancheGuitare from './src/components/MancheGuitare';
import { modeIonien1, modeLydien1, modeDorien1, modePhrygien1,
        modeMixolydien1, modeAeolien1, modeLocrien1,
        modeMineurMelodique1, modeDorienb21, modeLydienDiese51,
        modeLydienb71, modeMixolydienb61, modeLocrienBecarre2,
        modeSuperlocrien1, modeMineurHarmonique1, modeLocrien61,
        modeIonienDiese51, modeDorienDiese41, modeSuperphrygien1,
        modeLydienDiese21, modeSuperlocrienDiminue1, gammeChromatique } from './src/data/Gammes';
import { doo, doDiese, re, miBemol, mi, fa, faDiese,
        sol, solDiese, la, siBemol, si } from './src/data/Notes';

const App = () => {
  return renderMancheGuitare(modeLocrien61, fa);
};


AppRegistry.registerComponent('mancheguitareapp', () => App);
