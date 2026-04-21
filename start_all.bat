@echo off

chcp 65001

echo Lancement de VSCode ...
start cmd /c "code ."

echo Lancement du backend...
cd ArgentBank-Backend
start cmd /k "npm run dev:server"

echo initialisation de la base de donnée avec 2 utilisateurs...
start cmd /k "npm run populate-db"

cd ..

echo Lancement du frontend...
cd ArgentBank-Frontend
start cmd /k "npm run dev"

cd ..

echo Tout est lancé !
pause