• Pour installer/réinstaller le module native-react-sound (si nécessaire),
faire l'install manuelle, a priori pas sur que la commande react-native link
fasse le taf (pas sur… mais c'est possible)


• Pour ajouter un fichier son .mp3 en vue de le charger:


1. dans le Finder: copier le fichier .mp3 dans le répertoire 'sounds'

2. ouvrir le projet avec Xcode (open ios/nomprojet.xcodeproj)

3. glisser le fichier dans les fichiers du projet (colonne de gauche),
  sans faire de copie, c'est juste pour indiquer à Xcode quand il fera le build où est le fichier.

4. quand on charge le fichier avec new Sound('path'), pour iOS, path désigne
  simplement le nom du fichier, a priori si on a bien fait la manip avec Xcode
  il n'y a pas besoin de mettre un chemin (relatif ou absolu)

5. pour que ce nouveau fichier son soit pris en compte et puisse être chargé,
  il faut relancer le build depuis Xcode
