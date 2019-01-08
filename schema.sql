CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    username VARCHAR,
    user_password VARCHAR
);

CREATE TABLE product (
    product_number INTEGER,
    wifi_network VARCHAR,
    wifi_password VARCHAR,
    phone_number TEXT,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);