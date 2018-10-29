FROM nginx:1.15.5

ADD docker/vhost.conf /etc/nginx/conf.d/default.conf