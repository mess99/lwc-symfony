C:\wamp64\www\my-api-rest-project>composer require api

C:\wamp64\www\my-api-rest-project>php bin/console make:entity

 Class name of the entity to create or update (e.g. FiercePopsicle):
 > Book

 Mark this class as an API Platform resource (expose a CRUD API for it) (yes/no) [no]:
 > yes

 created: src/Entity/Book.php
 created: src/Repository/BookRepository.php
 
 Entity generated! Now let's add some fields!
 You can always add more fields later manually or by re-running this command.

 New property name (press <return> to stop adding fields):
 > title

 Field type (enter ? to see all types) [string]:
 >

 Field length [255]:
 >

 Can this field be null in the database (nullable) (yes/no) [no]:
 >

 updated: src/Entity/Book.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 > author

 Field type (enter ? to see all types) [string]:
 >

 Field length [255]:
 >

 Can this field be null in the database (nullable) (yes/no) [no]:
 >

 updated: src/Entity/Book.php

 Add another property? Enter the property name (or press <return> to stop adding fields):
 >

  Success! 


 Next: When you're ready, create a migration with php bin/console make:migration

C:\wamp64\www\my-api-rest-project>php bin/console doctrine:database:create
Created database `my_rest_api_platform_db` for connection named default

C:\wamp64\www\my-api-rest-project>php bin/console make:migration          


C:\wamp64\www\my-api-rest-project>php bin/console doctrine:migrations:migrate

 WARNING! You are about to execute a migration in database "my_rest_api_platform_db" that could result in schema changes and data loss. Are you sure you wish to continue? (yes/no) [yes]:
 > yes

# Alimenter la table book

# tester : http://localhost:8000/api
C:\wamp64\www\my-api-rest-project>