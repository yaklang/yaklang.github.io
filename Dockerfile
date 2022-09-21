FROM v1ll4n/api-server-base

COPY build/ /var/www/html/
RUN rm -f /var/www/html/CNAME

