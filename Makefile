include .env

dev:
	chmod +x ../${NOTIFY_PATH}/wait-for-it.sh && \
	sudo docker-compose -f docker-compose.yaml up --build

build:
	chmod +x ../${NOTIFY_PATH}/wait-for-it.sh && \
	sudo docker-compose -f docker-compose.yaml build

up: 
	chmod +x ../${NOTIFY_PATH}/wait-for-it.sh && \
	sudo docker-compose -f docker-compose.yaml up 

down:
	chmod +x ../${NOTIFY_PATH}/wait-for-it.sh && \
	sudo docker-compose -f docker-compose.yaml down -v