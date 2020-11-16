# Git Commands


### **conseil: ne jamais travailler sur la branche master** 

Cette commande crée une structure de branches pour votre projet:

     git flow init

**Important**

Toujours inclure un .gitignore dans son projet git:
1 seule solution : copier coller angular gitignore master 

[alt](https://raw.githubusercontent.com/angular/angular/master/.gitignore)

## Commit

Enregistre l'état des fichiers sur la branche active

### Options

- m : commentary 
- a : add 

## switch

Permet de changer ou de créer une branche 

## checkout

hash: code du commit | branch
Checkout permet de se replacer en fonction du repère donnée

    git checkout hash|branch

## log

git log renvoie l'historique des commandes entrées

## branch

Crée une branche

## status 

Renvoie le status actuel de git: branch, commit , added files 

## merge 

- git checkout workingbranch
- git merge 