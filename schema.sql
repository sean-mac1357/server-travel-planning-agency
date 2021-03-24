CREATE TABLE vacations (
    id serial PRIMARY KEY,
    guest_name varchar(200),
    v_name varchar(200),
    start_date varchar(200),
    end_date varchar(200),
    days integer,
    name_hotel varchar(200),
    address_hotel varchar(200),
);

CREATE TABLE activities(
    id serial PRIMARY KEY,
    breakfast varchar(200)
    morning_a varchar(200),
    lunch varchar(200),
    afternoon_a varchar(200),
    dinner varchar(200),
    evening_a varchar(200),
    activity_id integer REFERENCES vacations (id)
);