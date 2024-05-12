#!/bin/bash

pip3 install -r requirements.txt --user

python3 manage.py makemigrations --noinput

python3 manage.py migrate --noinput
