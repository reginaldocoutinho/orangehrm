context('Verificação dos componentes do DashBoard', () => {
   beforeEach(() => {
     
     cy.login()     
    })
    it('Time at Work', () => {
       
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Time at Work')
    })
    it('Quick Launch', () => {
        
        cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text', 'Quick Launch')
    })
    it('My Actions', () => {
        
        cy.get(':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text', 'My Actions')
    })
    it('Buzz Latest Posts', () => {
        
        cy.get(':nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text', 'Buzz Latest Posts')
    })
    it('Employees on Leave Today', () => {
        
        cy.get(':nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text', 'Employees on Leave Today')
    })
    it('Employee Distribution by Sub Unit', () => {
        
        cy.get(':nth-child(6) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Employee Distribution by Sub Unit')
    })
    it('Employee Distribution by Location', () => {
        
        cy.get(':nth-child(7) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Employee Distribution by Location')
    })
})

