FROM node:8

RUN cd /tmp && yarn add express

RUN mkdir -p /opt/app-root

RUN cp -a /tmp/node_modules /opt/app-root

WORKDIR /opt/app-root
COPY . .

EXPOSE 9000

CMD ["yarn", "run", "start-prod"]