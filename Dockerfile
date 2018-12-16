FROM mynet1314/base_nlan_user_front

RUN git clone https://github.com/mynet1314/nlan-user-front.git && \
	cp postcss.config.js  node_modules/element-ui/lib/theme-chalk/ &&
	cp postcss.config.js /src/styles/ && 
	cp postcss.config.js  node_modules/
WORKDIR nlan-user-front
RUN npm build
ENTRYPOINT ["top"]



