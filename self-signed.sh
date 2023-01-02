#!/bin/sh
mkdir -p ./certs
mkdir -p ./keys
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./keys/key.pem -out ./certs/cert.pem
