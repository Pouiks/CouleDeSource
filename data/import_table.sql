BEGIN;

--avant de créer les tables, par sécurité, on les supprime
--DROP TABLE IF EXISTS "category", "item_category", "item", "user";

--Utiliser cette requête si les bonnes tables ont déjà étés insérées
DROP TABLE IF EXISTS "category", "product", "user", "shipping_infos", "billing_infos", "order", "order_line";


CREATE TABLE "category" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  PRIMARY KEY ("id")
);




CREATE TABLE "product" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "price_ht" DECIMAL NOT NULL,
  "price_no_rebate" DECIMAL NOT NULL,
  "brand" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL,
  "product_reference" TEXT NOT NULL,
  "ean" INTEGER NOT NULL,
  "color" TEXT NOT NULL,
  "matter" TEXT NOT NULL,
  "size" TEXT NOT NULL,
  "size_unit" TEXT,
  "weight" DECIMAL,
  "weight_unit" TEXT,
  "category_id" INTEGER REFERENCES "category"("id"),
  PRIMARY KEY ("id")
);

CREATE TABLE "user" (
  "id" SERIAL NOT NULL,
  "firstname" TEXT NOT NULL,
  "lastname" TEXT NOT NULL,
  "date_of_birth" DATE NOT NULL,
  "age" INTEGER NOT NULL,
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "adress" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "postal_code" INTEGER NOT NULL,
  "created_at" DATE NOT NULL,
  "role" TEXT NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TABLE "shipping_infos" (
  "id" SERIAL NOT NULL,
  "shipping_adress" TEXT NOT NULL,
  "shipping_city" TEXT NOT NULL,
  "shipping_postal_code" INTEGER NOT NULL,
  "user_id" INTEGER REFERENCES "user"("id"),
  PRIMARY KEY ("id")
);

CREATE TABLE "billing_infos" (
  "id" SERIAL NOT NULL,
  "billing_adress" TEXT NOT NULL,
  "billing_city" TEXT NOT NULL,
  "billing_postal_code" INTEGER NOT NULL,
  "user_id" INTEGER REFERENCES "user"("id"),
  PRIMARY KEY ("id")
);

CREATE TABLE "order" (
  "id" SERIAL NOT NULL,
  "reference" TEXT NOT NULL,
  "created_at" DATE NOT NULL,
  "updated_at" DATE NOT NULL,
  "status" TEXT NOT NULL,
  "total_price" DECIMAL NOT NULL,
  "user_id" INTEGER REFERENCES "user"("id"),
  PRIMARY KEY ("id")
);

CREATE TABLE "order_line" (
  "id" SERIAL NOT NULL,
  "line_order" INTEGER NOT NULL,
  "price_unit" DECIMAL NOT NULL,
  "quantity" INTEGER NOT NULL,
  "order_id" INTEGER REFERENCES "order"("id"),
  "product_id" INTEGER REFERENCES "product"("id"),
  PRIMARY KEY ("id")
);

COMMIT;