#!/bin/bash

role='postgres'
user_name=$(whoami)
database_name='baltimore911'
file_path='./dbexport.pgsql'
host_name='localhost'

set -e
set -x

psql ${role} -U ${user_name} -h ${host_name} -c "create database ${database_name};"
psql -U ${user_name} -h ${host_name} -d ${database_name} -f ${file_path}