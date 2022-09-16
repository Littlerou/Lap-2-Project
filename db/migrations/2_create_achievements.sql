DROP TABLE IF EXISTS achievements;

CREATE TABLE achievements(
    id serial PRIMARY KEY,
    habits varchar(200) NOT NULL,
    user_id int
);
