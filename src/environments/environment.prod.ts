export const environment = {
  production: true,
  apiUrl: 'https://api.throughlettersandcode.com',
  tokenWhitelistedDomains: [ new RegExp(/throughlettersandcode/) ],
  tokenBlacklistedRoutes: [ new RegExp(/\/oauth\/token/) ]
};
