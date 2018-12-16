FROM mynet1314/base_nlan_user_front as builder
ARG BACKEND_URL
ENV BACKEND_URL=$BACKEND_URL
RUN env
WORKDIR /nlan-user-front
RUN git reset --hard HEAD && \
	git pull -f origin master && \
	npm run build
ENTRYPOINT ["top"]

FROM nginx:1.15.7-alpine
COPY --from=builder /nlan-user-front/dist /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
