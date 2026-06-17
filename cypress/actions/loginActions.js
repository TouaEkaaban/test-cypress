import {loginSelectors} from "../selectors/loginSelectors";

export function openHomePage() {
    cy.visit('https://www.flashscore.fr')
}

export function clickLoginButton() {
    cy.get('div#user-menu', { timeout: 20000 })
        .should('exist')
        .click({ force: true })
}

export function continueWithEmail() {
    cy.contains("Continuer avec l'e-mail", { timeout: 20000 })
        .should('exist')
        .click({ force: true })
}

export function rempliridentifiants(email,password) {
    cy.get(loginSelectors.emailInput).type(email)
    cy.get(loginSelectors.passwordInput).type(password)
}

export function submitLogin() {
    cy.contains('Se connecter', { timeout: 10000 })
        .should('not.be.disabled')
        .click()
}
