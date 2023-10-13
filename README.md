# Crunchytest
![image](https://github.com/reanimatedmanx/crunchytest/assets/32410574/fb252dcf-532d-4757-a363-9ee18eedeaae)

A simple technical challenge to test my skills. This application is client/server CRUD application written in Typescript, React, RxJS, MobX and Nestj, for a possibility to embark on a journey with Crunchyroll.

## Prerequisites

Make sure you have the following:

- [nvm](https://github.com/nvm-sh/nvm#install--update-script)
- [pnpm](https://pnpm.io/installation)

## Getting up & running

### Bare metal (Linux / Windows (WSL) / MacOS)

#### Align Nodejs version

Make sure the runtime version is identical (to avoid unexpected shenenigans)

```bash
nvm use
```

#### Install dependencies

```bash
pnpm i
```

#### Initialize DB

Initialize & seed the database

```bash
pnpm i
```

**Run 🤘**
```bash
pnpm dev
```

### With Docker / Podman

`TBD`

## Architecture

A brief, simplified overview of the architecture.

### Application / Services

The `client` and `media-service-api` are encapsulated in this tiny monorepo with `pnpm`

![image](https://github.com/reanimatedmanx/crunchytest/assets/32410574/42df8270-6fcc-4ec2-a346-e73b0b75662d)

### Communication
![image](https://github.com/reanimatedmanx/crunchytest/assets/32410574/797ac20f-e5de-41e3-bc98-9b91dbca1993)
 
