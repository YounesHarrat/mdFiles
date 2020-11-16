# Tuto Markdown

Le Markdown est un langage de balisage. Sa structure est très légère.

## Les titres

avec # vous pouvez indiquer des titres de différents niveaux ( comme h1  , h2 , etc)

    # Titre de niveau 1
    ## Titre de niveau 2
    etc

## Les Listes

On peut faire des listes de plusieurs niveaux avec "- "

### Liste de course:

      - tomates
          - 3 normales
          - une barquette de tomates cerise

- tomates
    - 3 normales
    - une barquette de tomates cerise
- mozzarella
- parmesan
- huile d'olive


## Les liens 

Pour créer un lien on utilise les crochets [] pour y mettre notre texte et les parenthèses pour indiquer le lien vers lequel il redirige

    [affichage](url_link)

## Les images 

On peut rajouter des images!

    ![alt text]( url "description")

![alt text](https://images.unsplash.com/photo-1605231482169-71b0aeccaa16?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max "photo de unsplash")

## Les tableaux

    | En-tête de colonne 1| En-tête de colonne2|
    |---------------------|--------------------|
    |element colonne1 ligne1 | element colonne 2 ligne 1|

| En-tête de colonne 1| En-tête de colonne2|
|---------------------|--------------------|
|element colonne1 ligne1 | element colonne 2 ligne 1|

## Les éléments de texte

    *italique*

On peut mettre des éléments de texte en *italique*

    **gras**

On peut mettre des élément de texte en **gras**

Il est possible d'insérer des lignes de code entre 3 backticks `` ou avec des tabulations

```html
    <div class="container">
        <h1>Jumbotron</h1>
    </div>
```

Le markdown n'interprète pas le retour à la ligne comme les autres langages:
On peut faire 
des 
retours 
à la ligne 
avec 2 espaces 