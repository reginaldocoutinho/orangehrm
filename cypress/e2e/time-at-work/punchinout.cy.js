context('Realizar apontamento de inicio e fim de expediente.', () => {
   beforeEach(() => {
    //  cy.session('loginSession', ()=> {
        cy.login() 
    //  })    
    })
    it('Realizar apontamento de entrada', () => {
        //act
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-date-input > .oxd-input').clear()
        cy.get('.oxd-date-input > .oxd-input').type('2025-25-09')
        cy.get('.oxd-time-input > .oxd-input').clear()
        cy.get('.oxd-time-input > .oxd-input').type('01:00 PM')
        cy.get('.orangehrm-card-container').click()
        cy.get('.oxd-textarea').focus()
        cy.get('.oxd-textarea').type('Teste de apontamento de entrada 09/21/2025')
        cy.get('.oxd-button').click()

        //Assert
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Punch Out');

        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchOut')

        
    }),
    it.only('Realizar o apontamento de saida', () => {
        cy.pathPunch()
        cy.get('.orangehrm-card-container > .oxd-text--h6').then(($el) => {const texto = $el.text()  
            // pega o texto do elemento

        if (texto.includes('Punch In')) {
            cy.log('O status atual é Punch In')
            cy.punchIn()
            cy.get('.oxd-date-input > .oxd-input').should('be.visible')
            cy.get('.oxd-date-input > .oxd-input').clear()
            cy.get('.oxd-date-input > .oxd-input').type('2025-27-09')
            cy.get('.oxd-time-input > .oxd-input').clear()
            cy.get('.oxd-time-input > .oxd-input').type('05:00 PM')
            cy.get('.orangehrm-card-container').click()
            cy.get('.oxd-textarea').focus()
            cy.get('.oxd-textarea').type('Teste de apontamento de saida 09/26/2025')
            cy.wait(3000)
            cy.get('.oxd-button').click()
        } else if (texto.includes('Punch Out')) {
            cy.log('O status atual é Punch Out')
            cy.get('.oxd-date-input > .oxd-input').should('be.visible')
            cy.get('.oxd-date-input > .oxd-input').clear()
            cy.get('.oxd-date-input > .oxd-input').type('2025-27-09')
            cy.get('.oxd-time-input > .oxd-input').clear()
            cy.get('.oxd-time-input > .oxd-input').type('05:00 PM')
            cy.get('.orangehrm-card-container').click()
            cy.get('.oxd-textarea').focus()
            cy.get('.oxd-textarea').type('Teste de apontamento de saida 09/26/2025')
            cy.wait(3000)
            cy.get('.oxd-button').click()
        } else {
            cy.log('Nenhum dos dois status encontrados')
        }
        })

})
})