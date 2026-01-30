remotedbconnect:

clean:
	rm -rf server/dist
	
taillogs:
	heroku logs --tail --app bikeconnect

build:
	cd server && npm run build
	cd client && npm run build

runbuild:
	make build
	cd server/dist && node server.js

runserver:
	cd server && npm run dev

runclient:
	cd client && npm run dev