#!/bin/bash
export APP=$1
export TAG=$2
export ENV=$3

if [ -z "$APP" ] || [ -z "$TAG" ] || [ -z "$ENV" ]; then
  echo "Usage: $0 <app_name> <tag> <env>"
  exit 1
fi

if [ -z "$NEXUS_URL" ] || [ -z "$NEXUS_USER" ] || [ -z "$NEXUS_PASS" ]; then
  echo "Usage: $0 <NEXUS_URL> <NEXUS_USER> <NEXUS_PASS>"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
export PROJECT_ROOT="$(cd "$SCRIPT_DIR/" && pwd)"
cd "$PROJECT_ROOT"

# docker-compose 파일 위치
COMPOSE_NGINX_FILE=./docker-compose.nginx.yml
COMPOSE_APP_FILE=./docker-compose.yml

# 로그인을 수행합니다.
echo $NEXUS_PASS | docker login http://${NEXUS_URL} -u $NEXUS_USER --password-stdin

DOCKER_IMAGE="$APP-$ENV"

echo "▶ 기존 컨테이너 정지 및 삭제"
docker compose \
  -f $COMPOSE_NGINX_FILE \
  -f $COMPOSE_APP_FILE \
  down

  echo "⬇ Docker 이미지 pull: $DOCKER_IMAGE"
docker pull $NEXUS_URL/$DOCKER_IMAGE:$TAG
if [ $? -ne 0 ]; then
  echo "❌ Failed to pull image: $DOCKER_IMAGE"
  exit 1
fi

echo "▶ docker-compose up 실행"
ENV=$ENV TAG=$TAG NEXUS_URL=$NEXUS_URL \
docker compose \
  -f $COMPOSE_NGINX_FILE \
  -f $COMPOSE_APP_FILE \
  up -d

# 로그아웃을 수행합니다.
docker logout http://$NEXUS_URL