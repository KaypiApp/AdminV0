# KaypiAdmin

Crear la imagen:
>> docker-compose build

Iniciar contenedor:
>> docker-compose up

Crear .tar:

>> docker build -t  kaypidocker .

>> docker save -o docker_admin.tar kaypidocker //Siendo kaypidocker el nombre de la imagen


Ejecutar el docker_admin.tar:

Ir al cmd, ubicarse en la carpeta donde esté el .tar descargado

>> docker load -i docker_admin.tar //Para crear la imagen

>> docker run -d --name kaypi_container kaypidocker //Para ejecutar siendo kaypidocker el nombre de la imagen creada y kaypi_container el nombre del contenedor que se está creando



Dockerizado: https://drive.google.com/drive/folders/133hn1W2FqdmPaGVLIxkgdu2UuNIbPfbS?usp=sharing


APK: https://drive.google.com/drive/folders/1Dj9Byd6t4OQrWB_S0X2_-83s-rrfq7M3?usp=drive_link
