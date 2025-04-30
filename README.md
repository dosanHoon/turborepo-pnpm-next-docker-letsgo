# turborepo-pnpm-next-docker-template

- turporepo
- pnpm
- next.js - turbopack
- tailwind.css
- eslint
- typescript

## vscose extensions

- eslint
- prettier

turborepo + pnpm + next + docker 렛츠고

## Apps

- `client`: client
- `admin`: admin
- `storybook`: ui 재사용을 위한 storybook

## Packages

- `@on/ui`: 공통 UI
- `@on/eslint-config`: 공통 `eslint` configurations
- `@on/tailwind-config`: 공통 `tailwind.config` configurations
- `@on/typescript-config`: 공통 `tsconfig.json` configurations

# CI/CD

- 서버마다 nginx을 설치하고 실행하기 시쩌
- docker-compose로 nginx와 next.js app 서버를 구동
- ssl 파일, 도커 레지스트리, .env next auth key 등 민감한 정도는 jenkins(CI)에서 주입하도록 한다.

# jenkins script (예시)

```sh

sudo cat $CERT_FILE > ./deploy/nginx/cert.pem
sudo cat $KEY_FILE > ./deploy/nginx/key.pem
sudo cat $PEM_PASS_FILE > ./deploy/nginx/pem_pass

export NEXUS_URL=$NEXUS_URL
export NEXUS_USER=$NEXUS_USER
export NEXUS_PASS=$NEXUS_PASS

echo 'start client-dev deploy'

touch .env
echo "NEXT_PUBLIC_API_HOST=${NEXT_PUBLIC_API_HOST}" >> .env
echo "NEXTAUTH_SECRET=${NEXTAUTH_SECRET}" >> .env
echo "NEXTAUTH_URL=${NEXTAUTH_URL}" >> .env

mv .env ./apps/client/

sudo sh ./deploy/dockerbuild.sh client $BUILD_ID dev
echo 'complete client-dev'

sudo scp -i ssh.pem ./deploy/dockerpull.sh ./deploy/docker-compose.nginx.yml ./apps/oaal-client/docker-compose.yml {원격서버}:/workspace/client
sudo ssh -i ssh.pem {원격서버} /workspace/client/

dockerpull.sh client $BUILD_ID dev
```
