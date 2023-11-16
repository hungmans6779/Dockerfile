FROM alpine:3.18.4
ARG USER=default
ENV HOME /home/$USER

RUN apk --update add openssl

# install sudo as root
RUN apk --update add sudo

# add new user
RUN adduser -D $USER \
        && echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER \
        && chmod 0440 /etc/sudoers.d/$USER

USER $USER
WORKDIR $HOME