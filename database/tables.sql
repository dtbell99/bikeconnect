create table bikeconnect_bike(id serial primary key, brand text, model text, frame_size text, frame_material text, color text, updated timestamp);
create table bikeconnect_user(email text primary key, password text, name text, mobile text, photo BYTEA, photo_mime_type text, updated timestamp);
create table bikeconnect_user_bike(bike_id int, email text, primary key (bike_id, email));