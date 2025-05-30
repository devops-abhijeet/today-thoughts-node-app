
# Firstly use Below Docker Command for Mysql Container

docker run -d --name mysql \
  -e MYSQL_ROOT_PASSWORD=abhi \
  -e MYSQL_DATABASE=thoughts_db \
  -e MYSQL_USER=abhi \
  -e MYSQL_PASSWORD=abhi \
  --network nodeapp \
  2c849dee4ca9

# Create Table into database 

CREATE DATABASE IF NOT EXISTS thoughts_db;

USE thoughts_db;

CREATE TABLE IF NOT EXISTS thoughts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  thought TEXT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# Use Below Docker Command for Node app

docker run -d -p 80:3000 --name my-app \
  --network nodeapp \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=abhi \
  -e MYSQL_PASSWORD=abhi \
  -e MYSQL_DATABASE=thoughts_db \
  3cd03f93622e
