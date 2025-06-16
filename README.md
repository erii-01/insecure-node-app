[![Security Test Pipeline](https://github.com/erii-01/insecure-node-app/actions/workflows/main.yml/badge.svg)](https://github.com/erii-01/insecure-node-app/actions/workflows/main.yml)
<div align="center">
<h1> Insecure Node app </h1>
</div>

Este proyecto contiene una aplicación backend hecha en Node.js con Express,
intencionalmente insegura y mal estructurada.
El objetivo del trabajo se encuentra en la sección [Objetivo](#objetivo)

## Requerimientos

* Node.js 22.16.x
* npm 10.9.x
* nvm
* (Opcional) [Direnv](https://direnv.net/)

## Modo de uso

### Instalar la versión de Node.js requerida:
```bash
nvm use
node -v # Para comprobar que se ha instalado la versión deseada
```

### Instalar las dependencias:
```bash
npm i
```

### Iniciar la aplicación:

En caso de usar *direnv*, se debe generar el archivo `.envrc` y ejecutar:
```bash
direnv allow
```

Se deja como ejemplo el archivo [.envrc.sample](.envrc.sample)

```bash
npm run start
```
### Ejecutar tests
```bash
npm run test
```

### Ejecutar linter:
```bash
npm run lint
```


## Objetivo

1. Crear un pipeline que:
- Ejecute tests automatizados
- Analice las dependencias en busca de vulnerabilidades y genere un reporte de las
mismas
- Analice el código en busca de secretos expuestos
- Ejecute un linter verificando el estilo y buenas prácticas

2. Generar un PR/MR corrigiendo al menos uno de los errores y verificar el
cambio en el pipeline

3. Agregar un badge con el estado del pipeline
