import { openHomePage, clickLoginButton, continueWithEmail, rempliridentifiants, submitLogin } from '../actions/loginActions'
import { identifiants} from '../data/identifiants'

describe('Flashscore Login Test', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })
  it('Se connecte avec email et mot de passe', () => {
    openHomePage()
    clickLoginButton()
    continueWithEmail()
    rempliridentifiants(identifiants.email, identifiants.password)
    submitLogin()

    // bouton Se connecter qui devient actif après saisie
    cy.contains('Se connecter', { timeout: 10000 })
      .should('not.be.disabled')

    cy.get('#onetrust-accept-btn-handler', { timeout: 15000 })
      .should('be.visible')
      .click()

    cy.get('#onetrust-accept-btn-handler').should('not.be.visible')
  });

})
