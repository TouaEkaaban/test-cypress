import { defineConfig } from "cypress";
// import webpackPreprocessor from "@cypress/webpack-preprocessor";
// import cucumber from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.flashscore.fr",
    viewportWidth: 1000,
    viewportHeight: 660,
    pageLoadTimeout: 120000, // 2 minutes
    defaultCommandTimeout: 8000,
    retries: 2,
    video: true,
    screenshotOnRunFailure: true,
    supportFile: false,   // désactive le support file
    // specPattern: "**/*.feature",
  },
  env : {
    userEmail: "audrey@gmail.com",
    userPassword: "monMotDePasse123"
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //   cucumber.addCucumberPreprocessorPlugin(on, config);
      //   on("file:preprocessor", webpackPreprocessor({}));
      //   return config;
      // },
    }
});


