FROM python:3.11.0rc2-alpine3.16

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN mkdir /app
COPY ./finnlands_backend/requirements.txt /app

# Install required package
RUN apk update && \
    apk add --no-cache --virtual .build-deps \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev \
    git bash

# Install requirements.txt
RUN pip3 install --upgrade pip
RUN pip3 install -r /app/requirements.txt

COPY ./finnlands_backend/ /app
WORKDIR /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:5000"]
