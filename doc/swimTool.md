# Requête SQL pour créer un user admin

```sql
INSERT INTO "user" ("firstname", "lastname", "date_of_birth", "age", "email", "password", "adress", "city", "postal_code", "created_at", "role")  VALUES ('Kevin', 'BREBAN', to_date('13 Nov 1986', 'DD Mon YYYY'), 32, 'aa@bb.cc', '1234', 'quelque part', 'Springfield', 123456, NOW(), 'admin');
```
