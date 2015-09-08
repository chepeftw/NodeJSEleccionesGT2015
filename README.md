# NodeJSEleccionesGT2015
Script en NodeJS para ir viendo la diferencia entre el partido UNE y Lider en las Elecciones 2015.

Para dicho script necesitas NodeJS con las siguientes dos librerias:

https://github.com/eeshi/node-scrapy

https://github.com/request/request

Ademas te puede enviar notificaciones a un canal de Slack, solo tienes que crear una integracion con un bot, y agregas tu token y listo.

Luego solo corre el script como:

node scrapeElecciones2015.js

Tomar en cuenta que por el momento hace un pull de la informacion cada 30 segundos.
