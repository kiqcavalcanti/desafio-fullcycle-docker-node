FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf


ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]