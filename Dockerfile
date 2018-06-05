FROM node:8.4.0-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app


CMD [ "npm", "run", "prod" ]


# npm run static-file &&
# docker build -t mrsunboss/test:live . &&
# docker push mrsunboss/test:live
# docker pull mrsunboss/test:live


# az container create --resource-group "test-group" --name rick1 --image "mrsunboss/test:live" --location eastus --ip-address public --ports 8080
# az container show --resource-group test-group --name rick1
# az container logs --resource-group test-group --name rick1
# az container delete --resource-group test-group --name rick1 --yes

# az container delete --resource-group rick-test2-group --name ricktest1 --yes




