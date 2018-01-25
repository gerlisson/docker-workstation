FROM php:7.0.17-apache

RUN apt-get update
RUN apt-get install -y apt-utils vim curl sqlite3
RUN pecl install xdebug

# The base image does not have php.ini.
# Copy our own, with xdebug settings
ADD ./conf/php.ini /usr/local/etc/php/

EXPOSE 80
