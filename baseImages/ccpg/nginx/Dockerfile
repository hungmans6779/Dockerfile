FROM nginx:1.25.3-alpine
ENV TZ=Asia/Taipei
ENV LANG=zh_TW.UTF-8
ENV LC_ALL=zh_TW.UTF-8
RUN apk update
RUN apk add --upgrade openssl
RUN apk update && apk upgrade
RUN ln -snf /usr/share/zoneInfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apk add --update ttf-dejavu fontconfig && rm -rf /var/cache/apk/*
RUN apk add --no-cache curl

# ======================================================================================
# 包版驗證用
# frontend 的 AP Images

# RUN mkdir -p /usr/share/nginx/coco/frontend
# COPY frontend /usr/share/nginx/coco/frontend/
# COPY nginx.conf /etc/nginx/
# RUN apk add --repositories-file=/dev/null --allow-untrusted --no-network --no-cache

# ======================================================================================