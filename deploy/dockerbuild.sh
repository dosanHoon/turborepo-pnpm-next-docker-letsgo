
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
export PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

DOCKER_IMAGE="$APP-$ENV:$TAG"

COMPOSE_NGINX_FILE=$PROJECT_ROOT/deploy/docker-compose.nginx.yml
COMPOSE_APP_FILE=$PROJECT_ROOT/apps/$APP/docker-compose.yml

echo "docker build start $DOCKER_IMAGE"
# 빌드
docker compose \
  -f $COMPOSE_NGINX_FILE \
  -f $COMPOSE_APP_FILE \
  build

echo "docker build complete $DOCKER_IMAGE"

echo $NEXUS_PASS | docker login http://${NEXUS_URL} -u $NEXUS_USER --password-stdin

echo "docker push start $DOCKER_IMAGE"
# Docker Hub 또는 사내 레지스트리에 push
docker push $NEXUS_URL/$DOCKER_IMAGE
docker push $NEXUS_URL/nginx-${ENV}:latest
echo "docker push complete $DOCKER_IMAGE"

