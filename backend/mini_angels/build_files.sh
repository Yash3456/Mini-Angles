#!/bin/bash

apt-get install -y libsqlite3-dev

pip3 install -r requirements.txt --user

python3 manage.py makemigrations --noinput

python3 manage.py migrate --noinput
