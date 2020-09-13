FROM ubuntu:20.04
RUN apt update && apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt install -y nodejs
COPY app /app
WORKDIR /app
RUN npm ci
CMD ["node", "index.js"]
