context('Realizar apontamento de inicio e fim de expediente.', () => {
   beforeEach(() => {
     cy.login()     
    })
    it('Realizar apontamento de entrada', () => {
        //act
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-date-input > .oxd-input').clear()
        cy.get('.oxd-date-input > .oxd-input').type('2025-21-09')
        cy.get('.oxd-time-input > .oxd-input').clear()
        cy.get('.oxd-time-input > .oxd-input').type('11:41 AM')
        cy.get('.orangehrm-card-container').click()
        cy.get('.oxd-textarea').focus()
        cy.get('.oxd-textarea').type('Teste de apontamento de entrada 09/21/2025')
        cy.get('.oxd-button').click()

        //Assert
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Punch Out');

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchOut')

        
    })
})