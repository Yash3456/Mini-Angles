#!/bin/bash

# yum list | grep sqlite

# yum install -y mysql
pip3 install --upgrade pip

pip3 install --upgrade -r requirements.txt --user

python3 manage.py makemigrations --noinput

python3 manage.py migrate --noinput
