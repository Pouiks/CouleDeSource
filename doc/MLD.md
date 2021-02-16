# MLD SwimTools

PRODUCT (
    id SERIAL,
    name TEXT,
    color TEXT,
    size DECIMAL,
    size_unit VARCHAR(8),
    weight DECIMAL,
    brand TEXT,
    description TEXT,
    matter TEXT,
    price_ht DECIMAL,
    price_no_rebate DECIMAL,
    in_stock TEXT,
    quantity INTEGER,
    ean INTEGER,
    product_reference TEXT,
    #category_id INTEGER
    )

USER (
    id SERIAL,
    firstname TEXT,
    lastname TEXT,
    date_of_birth DATETIME,
    age INTEGER ,
    email TEXT,
    password TEXT,
    adress TEXT,
    city TEXT,
    country TEXT,
    billing_adress TEXT,
    shipping_adress TEXT,
    created DATETIME,
    updated DATETIME,
    role TEXT
    )

CATEGORY (
    #id SERIAL,
    name TEXT,
    description TEXT
    )

ORDER (
    #id SERIAL,
    reference TEXT,
    created DATETIME,
    updated DATETIME,
    status TEXT,
    total_price DECIMAL,
    #user_id INTEGER
    )

ORDER_LINE (
    #id SERIAL,
    line_fact INTEGER,
    price_unit DECIMAL,
    quantity INTEGER,
    total_price DECIMAL,
    #order_id INTEGER,
    #product_id INTEGER
)
