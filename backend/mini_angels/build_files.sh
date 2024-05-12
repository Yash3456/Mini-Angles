#!/bin/bash

# yum list | grep sqlite

# yum install -y mysql

yum remove -y python3.12

yum install -y wget

yum install gcc openssl-devel zlib-devel ncurses-devel readline-devel sqlite-devel \
    gdbm-devel libdb-devel libbz2-devel expat-devel libffi-devel xz-devel tk-devel


wget https://www.python.org/ftp/python/3.12.0/Python-3.12.0.tar.xz
./configure --enable-loadable-sqlite-extensions --enable-optimizations
make
make install

yum update

yum install -y python3-pip sqlite-devel

pip3 install --upgrade pip

pip3 install --upgrade --force-reinstall -r requirements.txt

# sed -i 's/.*_sqlite3.*//g' /python312/lib/python3.12/sqlite3/dbapi2.py

python3 manage.py makemigrations --noinput

python3 manage.py migrate --noinput
