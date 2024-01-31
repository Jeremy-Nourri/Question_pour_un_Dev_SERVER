## Question pour un Dev - Back-end :
J'ai initié ce projet personnel afin de mettre en œuvre les compétences que j'ai acquises durant ma formation de développeur full stack JavasScript.  
La partie serveur API a été développée en utilisant l'environnement d'exécution JavaScript NodeJS et le framework express.  
J'ai appliqué le design pattern MVC pour séparer les responsabilités entre la logique métier et le traitement des requêtes. 
Le SGBD postgreSQL pour la base de données et Sequelize un ORM de type Data-Mapper pour gérer les requêtes.  
J'ai utilisé le SDK node de cloudinary pour gérer l'upload de avatars et leur stockage.
  
**Sécurisation :**  
La bibliothèque jsonwebtoken, créée par Auth0 pour sécuriser la communication entre l'interface utilisateur et l'API.  
Le token est inséré dans un cookie avec les attributs httpOnly: true, secure: true et une date d'expiration pour minimiser les attaques de type Cross-Site Scripting (XSS).  
J'ai utilisé le mécanisme CORS afin d'autoriser les requêtes provenant de ma partie client ce qui permet de limiter les attaques CSRF (Cross-Site Request Forgery).
Les mots de passe sont hashés avec l'aide de la bilbiothèque Bcrypt avant d'être inséré dans la base de données.

  ![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,postgres,sequelize)
