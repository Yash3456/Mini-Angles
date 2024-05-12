#!/bin/bash

# yum list | grep sqlite

# yum install -y mysql
pip3 install --upgrade pip

yum install -y sqlite-devel

pip3 install --upgrade --force-reinstall -r requirements.txt

# sed -i 's/.*_sqlite3.*//g' /python312/lib/python3.12/sqlite3/dbapi2.py

python3 manage.py makemigrations --noinput

python3 manage.py migrate --noinput
