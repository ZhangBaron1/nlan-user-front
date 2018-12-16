FROM mynet1314/base_nlan_user_front as builder

WORKDIR /nlan-user-front
RUN git pull -f origin master
RUN npm run build
ENTRYPOINT ["top"]

FROM nginx:1.15.7-alpine
COPY --from=builder /nlan-user-front/dist /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
