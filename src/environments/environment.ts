// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  microserviceLogin: 'http://localhost:8101/login',
  microserviceRegister: 'http://localhost:8102/hotel',
  microserviceEmail: 'http://localhost:8103/mail',
  RESERVAS_URL: 'http://143.198.166.83:8200/api',
  PARAMETRICAS_URL: 'http://143.198.166.83:8201/api',
  microserviceOcupation: 'http://localhost:8401/ocupation'
};
