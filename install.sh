docker stop dronetest
docker rm dronetest
docker rmi doowb/dronetest
docker build -t doowb/dronetest .
docker run -d -t -p 8042:80 -name="dronetest" doowb/dronetest
