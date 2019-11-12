import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Accueil from './components/Accueil';
import TestManche from './components/TestManche';
import PositionView from './components/PositionView';
const RouterComponent = () =>
    <Router
      sceneStyle={styles.sceneStyle}
      titleStyle={styles.navTitle}
    >

      <Scene
        navigationBarStyle={styles.navBarAccueil}
        key="accueil"
        component={Accueil}
        title="Accueil"
        initial
      />
      <Scene
        navigationBarStyle={styles.navBarAccueil}
        key="PositionView"
        component={PositionView}
        title="Positions"
      />
      <Scene
        navigationBarStyle={styles.navBarManche}
        key="TestManche"
        component={TestManche}
        title="🎸 (EADGBE)"
      />


    </Router>
;


const styles = {
  navBarAccueil: {
    backgroundColor: '#F7F7F7'
  },
  navBarManche: {
    backgroundColor: '#DDDDDD',
    borderBottomWidth: 0
  },
  sceneStyle: {
    paddingTop: 65,
    justifyContent: 'center',
    flex: 1,
  },
  navTitle: {
    fontWeight: 'bold',
    fontSize: 20
  }
};

export default RouterComponent;
