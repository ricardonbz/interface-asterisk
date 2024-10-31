#!/bin/bash

# Construir a imagem e subir o container
docker build -t interface-asterisk-backend .
docker run -p 3000:3000 interface-asterisk-backend
