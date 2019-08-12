export const environment = {
  production: true,
  apiUrl: 'https://throughlettersandcode.com',
  tokenWhitelistedDomains: [ /api.throughlettersandcode.com/ ],
  tokenBlacklistedRoutes: [ /\/oauth\/token/ ]
};
