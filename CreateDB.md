# Use the following statements to create the database and table in MYSQL.
______________________________________________________________________________________________________________________________________________________________________________________
CREATE DATABASE users;

USE users;

CREATE TABLE usersInfo (username VARCHAR(20), upass VARCHAR(50));

INSERT INTO usersInfo VALUES ('admin', '$2b$15$Rtche7/Hfpmxhc.6CWedpuwLoAuufyUs49SgMkjZevmyLKUaAuEL6');

INSERT INTO usersInfo VALUES ('manager','$2b$15$MV.3E.rJ7YG/giLvaCFe1eYZmK6BLIXU3hNmtaWw8Y7/teR1uxmiu');

INSERT INTO usersInfo VALUES ('programmer', '$2b$15$tTMfy.RzsrS/bIZfxLIDKemHJAPsIFTjGdG7bxi0pgaF7kuauAJtC');

INSERT INTO usersInfo VALUES ('developer', '$2b$15$Wqc7mo36K/vO3Ib372tj2u8WC.IWmZsqad2ThcStjjW2IqXVhSeXy');

INSERT INTO usersInfo VALUES ('user', '$2b$15$WHwT.V.Q7cUHrYzmDwCP9eQ2KZ8VKezQS.tzr1pgc1BVVpVGHFFxK');

NOTE: The passwords are hashed-> And are admin123, manager123, programmer123, developer123, and user123 respectively
