# deploy/nginx/Dockerfile
FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY cert.pem /etc/nginx/certs
COPY key.pem /etc/nginx/certs
COPY pem_pass /etc/nginx/certs