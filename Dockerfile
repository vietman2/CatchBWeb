# 1: Build the React App
FROM node:18.18.0 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --ignore-scripts
COPY . ./
RUN PROD=true yarn build

# 2: Serve the React App
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
