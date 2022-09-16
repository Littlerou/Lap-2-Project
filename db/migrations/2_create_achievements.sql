DROP TABLE IF EXISTS achievements;

CREATE TABLE achievements(
    id serial PRIMARY KEY,
    habits varchar(200),
    user_id int
);
