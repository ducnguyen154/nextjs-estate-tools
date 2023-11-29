DROP TABLE IF EXISTS rents;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS landlords;

CREATE TABLE landlords (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'auto increment id',
  `name` VARCHAR(1000) NOT NULL COMMENT 'land lord name',
  mobile VARCHAR(20) NOT NULL COMMENT 'land lord mobile phone',
  email VARCHAR(300) NULL DEFAULT NULL COMMENT 'land lord email',
  note TEXT NULL DEFAULT NULL COMMENT 'notes about land lord',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'Land lord table';

CREATE TABLE properties (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'auto increment id',
  title VARCHAR(1000) NOT NULL COMMENT 'house title',
  `description` TEXT NULL DEFAULT NULL COMMENT 'description',
  `address` VARCHAR(1000) NOT NULL COMMENT 'property/apartment address',
  landlord_id INT(11) unsigned NOT NULL COMMENT 'refer to landlord table',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'house information table';

CREATE TABLE users (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'user id',
  `name` VARCHAR(1000) NOT NULL COMMENT 'renter/owner name',
  mobile VARCHAR(20) NOT NULL COMMENT "user mobile number",
  email VARCHAR(300) NULL DEFAULT NULL COMMENT "user email address",
  note TEXT NULL DEFAULT NULL COMMENT 'notes about user',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'user information table';

CREATE TABLE rents (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'auto increment id',
  user_id INT(11) unsigned NOT NULL COMMENT 'user id',
  property_id INT(11) unsigned NOT NULL COMMENT 'house id',
  price FLOAT NOT NULL COMMENT 'rent amount',
  `description` TEXT NULL DEFAULT NULL COMMENT 'rent description/note',
  `start_date` DATE NOT NULL COMMENT 'start rent date',
  end_date DATE NULL DEFAULT NULL COMMENT 'end rent date',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'rent information table';


ALTER TABLE rents
  ADD FOREIGN KEY (user_id)
    REFERENCES users (id)
    ON UPDATE RESTRICT
    ON DELETE RESTRICT,
  ADD FOREIGN KEY (property_id)
    REFERENCES properties (id)
    ON UPDATE RESTRICT
    ON DELETE RESTRICT;

ALTER TABLE properties
  ADD FOREIGN KEY (landlord_id)
    REFERENCES landlords (id)
    ON UPDATE RESTRICT
    ON DELETE RESTRICT;
