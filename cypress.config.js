const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //usado para remover o aviso de site inseguro.
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    chromeWebSecurity: false,   // desabilita segurança do Chrome
    viewportWidth: 1280,
    viewportHeight: 720,
     experimentalModifyObstructiveThirdPartyCode: true
  },
});
