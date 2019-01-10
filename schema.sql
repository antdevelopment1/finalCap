CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    username VARCHAR,
    user_password VARCHAR
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    serial_number TEXT,
    phone_number TEXT,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);