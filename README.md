# SwimTools

Projet de site e-commerce sur le thème des accessoires de piscine

## Le contexte

 Nous souhaitons mettre en ligne un site e-commerce sur le thème des accessoires de Piscine.
 Les visiteurs pourront consulter le catalogue du site avec tous les produits, les ajouter à leur panier et s'inscrire sur le site. Une fois inscrit il pourrons acheter, noter, commenter un produit il faudra obligatoirement s'enregistrer afin de rentrer les information nécessaire à une commande (nom, prénom....).
 Les personnes ayant acheter un article auront la possibilité de commenter et noter ce produit.
 Le site doit permettre à un admin de pouvoir ajouter/modifier/supprimer des produits en base.

## USERCASE

### VISITEUR

|#|En tant que ... | je veux ... | dans le but de ... |
|---|---|---|---|
|1|Visiteur(*)| acceder à tout le site | Voir les fonctionnalités du site|
|2|Visiteur(*)| Consulter le catalogue de produits | Obtenir les informations sur une famille ou un produit ciblé|
|3|Visiteur(*)| Ajouter/supprimer à mon panier| Vérifier les articles d'une commande |
|3|Visiteur(*)| Creer un compte| Créer mon espace personnel |

### UTILISATEUR CONNECTE

|#|En tant que ... | je veux ... | dans le but de ... |
|---|---|---|---|
|1|Utilisateur connecté(*)|passer une commande|d'acheter des articles|
|2|Utilisateur connecté(*)|consulter/modifier/supprimer mon profil utilisateur|de pouvoir gérer mes informations|

### ADMIN

|#|En tant que ... | je veux ... | dans le but de ... |
|---|---|---|---|
|1|Admin(*)| avoir accès à un BackOffice admin | pouvoir administrer le site|
|2|Admin(*)| pouvoir ajouter/modifier/supprimer des produits | Gérer la partie produit|
|3|Admin(*)| ajouter/modifier/supprimer des utilisateurs | Gérer la partie utilisateur|
|4|Admin(*)| ajouter/modifier/supprimer des catégories | Gérer la partie catégorie|

### Charte graphique

* blanc cassé: #f9f7f7 (background)
* bleu clair : #dbe2ef (header)
* Bleu intermediaire : #3f72af (site global)
* bleu foncé : #112d4e (footer)


### Commandes Importantes

Pour dump la base de données: 

```sql
pg_dump -h localhost -U swimtool swimtool --column-inserts > swimtool.sql
```