FROM nginx:alpine

# Copia todo el sitio estático
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
