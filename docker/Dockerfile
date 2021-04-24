FROM node

USER root

ENV npm_config_loglevel=warn
ENV npm_config_unsafe_perm=true
ENV PATH /tmp/node_modules/.bin:$PATH
ENV PATH /tmp/node_modules/:$PATH

RUN apt-get update && apt-get install -y \
    apt-utils \
    wget \
    gnupg \ 
    gnupg2 \ 
    gnupg1 \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb \
    git \
    libgtk-3-0 \
    libxtst6 \
    xauth

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
      echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
      apt-get update && \
      apt-get install -y dbus-x11 google-chrome-stable

COPY ./package.json ./package-lock.json /tmp/

RUN cd /tmp/ \
    && npm ci \
    && true

ENTRYPOINT ["/docker_bin/docker/docker_entrypoint.sh"]