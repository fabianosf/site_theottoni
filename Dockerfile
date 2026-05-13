FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache ca-certificates && update-ca-certificates
COPY package.json package-lock.json ./
RUN npm config set fetch-retries 10 fetch-retry-mintimeout 20000 fetch-retry-maxtimeout 180000 \
  && npm ci --no-audit --no-fund

FROM node:20-alpine AS build
WORKDIR /app
ARG VITE_APP_PHONE_TEL=+5521979432464
ARG VITE_APP_PHONE_DISPLAY="(21) 97943-2464"
ARG VITE_APP_EMAIL_PRIMARY=contato@theottoni.com.br
ARG VITE_APP_EMAIL_COMERCIAL=comercial@theottoni.com.br
ENV VITE_APP_PHONE_TEL=$VITE_APP_PHONE_TEL
ENV VITE_APP_PHONE_DISPLAY=$VITE_APP_PHONE_DISPLAY
ENV VITE_APP_EMAIL_PRIMARY=$VITE_APP_EMAIL_PRIMARY
ENV VITE_APP_EMAIL_COMERCIAL=$VITE_APP_EMAIL_COMERCIAL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && rm -rf node_modules

FROM nginx:1.27-alpine AS runtime
RUN apk add --no-cache wget
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD wget -qO- http://127.0.0.1/health || exit 1
