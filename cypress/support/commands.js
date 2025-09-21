Cypress.Commands.add('login', (username = 'Admin', password = 'admin123') => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
  cy.get('.oxd-button').click()
})

// Cypress.Commands.add('PunchInOut', () => {
//   cy.
// })