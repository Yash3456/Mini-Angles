#!/bin/bash

# yum list | grep sqlite

# yum install -y mysql

yum remove -y python3.12

yum install -y wget tar

# yum install gcc openssl-devel zlib-devel ncurses-devel readline-devel sqlite-devel \
#     gdbm-devel libdb-devel libbz2-devel expat-devel libffi-devel xz-devel tk-devel


wget https://www.python.org/ftp/python/3.12.0/Python-3.12.0.tar.xz
tar -xvf Python-3.12.0.tgz
cd Python-3.12.0
./configure --enable-optimizations --with-ensurepip=install
make
make install
cd -

# yum update

yum install -y sqlite-devel

pip3 install --upgrade pip

pip3 install --upgrade --force-reinstall -r requirements.txt

# sed -i 's/.*_sqlite3.*//g' /python312/lib/python3.12/sqlite3/dbapi2.py

python3 manage.py makemigrations

python3 manage.py migrate
