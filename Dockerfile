FROM nginx:latest as dev

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /etc/nginx/ssl

COPY *.pem /etc/nginx/ssl
COPY *.crt /etc/nginx/ssl

#RUN chmod 777 key.pem cert.crt

COPY ./www /usr/share/nginx/html

#CMD [ "/bin/bash" ]

