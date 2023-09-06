DROP TABLE IF EXISTS rents;
DROP TABLE IF EXISTS houses;
DROP TABLE IF EXISTS users;

CREATE TABLE houses (
  id int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'auto increment id',
  title varchar(1000) NOT NULL COMMENT 'house title',
  `description` text NULL DEFAULT NULL COMMENT 'description',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'house information table';

CREATE TABLE users (
  id int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'user id',
  `name` varchar(1000) NOT NULL COMMENT 'renter/owner name',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
) COMMENT 'user information table';

CREATE TABLE rents (
  id int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'auto increment id',
  user_id int(11) unsigned NOT NULL COMMENT 'user id',
  house_id int(11) unsigned NOT NULL COMMENT 'house id',
  `start_date` date NOT NULL COMMENT 'start rent date',
  end_date date NOT NULL COMMENT 'end rent date',
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
  ADD FOREIGN KEY (house_id)
    REFERENCES houses (id)
    ON UPDATE RESTRICT
    ON DELETE RESTRICT;
