FROM alpine
WORKDIR .
COPY package.json .
RUN apk add --update npm && \
    npm install
COPY . ./
EXPOSE 4000
CMD ["node", "server.js"]
