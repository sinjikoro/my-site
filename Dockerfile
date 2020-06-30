FROM node:10.19-alpine

ENV PROJECT_ROOTDIR /app/

WORKDIR ${PROJECT_ROOTDIR}

COPY package.json ${PROJECT_ROOTDIR}

RUN npm install
RUN npm install -g  gatsby-cli

COPY . ${PROJECT_ROOTDIR}

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
