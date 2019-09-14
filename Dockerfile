FROM nginx:alpine
EXPOSE 80
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/through-letters-and-code-ui/. /usr/share/nginx/html