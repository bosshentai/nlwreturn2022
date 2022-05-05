FROM node:18.1.0

WORKDIR /app

COPY  entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh


ADD . .

RUN npm install

ENTRYPOINT [ "/entrypoint.sh" ]

CMD ["npm","run","dev"]