FROM nginx:latest as dev

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /etc/nginx/ssl

COPY *.pem /etc/nginx/ssl
COPY *.crt /etc/nginx/ssl

#RUN chmod 777 key.pem cert.crt

COPY ./www /usr/share/nginx/html

#CMD [ "/bin/bash" ]



# Run all: npm run build && sudo docker compose -f docker-compose.json build && sudo docker compose -f docker-compose.json up

