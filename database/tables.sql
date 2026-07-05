/** 
create table bikeconnect_bike(id serial primary key, brand text, model text, frame_size text, frame_material text, color text, updated timestamp);
create table bikeconnect_user(email text primary key, password text, name text, mobile text, photo BYTEA, photo_mime_type text, updated timestamp);
create table bikeconnect_user_bike(bike_id int, email text, primary key (bike_id, email));
*/

create table bikeconnect_user(email text primary key, last_name text, first_name text, city text, state text, postal_code int, auth_key text, created timestamp, updated timestamp, locked boolean, last_login timestamp);
create table bikeconnect_catalog(id serial primary key, email text, created timestamp, updated timestamp, description text, pickup boolean, ship boolean, zip int, city text, state text, status text);
