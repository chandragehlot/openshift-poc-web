FROM node:8

RUN cd /tmp && npm install express

RUN mkdir -p /opt/app-root

RUN cp -a /tmp/node_modules /opt/app-root

WORKDIR /opt/app-root
COPY . .

EXPOSE 8080

CMD ["npm", "run", "start-prod"]