context('Realizando o Login do usuário', () => {
  beforeEach(() => {
    //Arrange Configurações do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  it('Login com usuário registrado.', () => {
    //Act Ações a serem validadas
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    // Assert é feito a validação do resultado. Neste caso esperamos o redirecionamento para a pagina principal.
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })
  it('Login com usuário invalido.', () => {
    //Act
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Failuser')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    //Assert
    cy.get('.oxd-alert-content').should('be.visible')
  })
  it('Login com a senha invalida.', () => {
    //Act
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('wrongpassword')
    cy.get('.oxd-button').click()

    //Assert
    cy.get('.oxd-alert-content').should('be.visible')
  })

  it('Recadastrar a senha', () => {
    //Act
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    
    //Assert
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  })
})