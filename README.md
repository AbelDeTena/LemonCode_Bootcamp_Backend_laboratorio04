# Bootcamp Backend \[Documental] Laboratorio 4 🍋
![CI](https://github.com/AbelDeTena/LemonCode_Bootcamp_Backend_laboratorio04/actions/workflows/ci.yml/badge.svg)
# Backend Lab: Houses API

API REST en Node + Express con arquitectura por *pods* (houses), mappers Db→VM, mocks y tests mínimos con Vitest + Supertest.



## 🧰 Stack
- Node + Express
- TypeScript
- Vitest + Supertest
- Arquitectura por pods
- Middlewares 404 y error

## 🚀 Arranque
```bash
npm install
npm run dev        # desarrollo (ts-node-dev)
# http://localhost:3000
```

## 🐳 Docker (local)
Build:
```bash
docker build -t houses-api:dev .
```

## Docker image (GHCR)
```bash
docker pull ghcr.io/<usuario>/<repo>:latest
docker run --rm -p 3000:3000 ghcr.io/<usuario>/<repo>:latest
```