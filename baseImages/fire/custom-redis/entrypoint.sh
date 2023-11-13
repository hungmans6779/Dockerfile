#!/bin/sh
echo "config path = $1"
echo "announce ip command = $2"
echo "announce ip = $3"
echo "template path = $4"
echo "redis root path = $5"
cp $4 $1
echo $CODE | openssl aes-256-cbc -d -k $OPEN_CODE -base64  -md sha512 -pbkdf2 -iter 100000 -out $5/dec.txt
final_code=$( cat $5/dec.txt )
echo "masterauth $final_code" >> $1
echo "requirepass $final_code" >> $1
redis-server $1 $2 $3
EXIST=1
while [ $EXIST -ne 0 ]
do
  redis-cli -a $final_code ping
  EXIST=$?
done
echo "#####################################################################"
echo
echo "                          check redis exist SUCCESS                  "
echo
echo "#####################################################################"
rm $5/dec.txt
tail -f $5/log/redis-server.log