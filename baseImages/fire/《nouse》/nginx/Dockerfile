FROM nginx:1.25.3-alpine
ENV TZ=Asia/Taipei
ENV LANG=zh_TW.UTF-8
ENV LC_ALL=zh_TW.UTF-8
RUN apk update && apk upgrade
RUN ln -snf /usr/share/zoneInfo/$TZ /etc/localtime && echo $TZ > /etc/timezone