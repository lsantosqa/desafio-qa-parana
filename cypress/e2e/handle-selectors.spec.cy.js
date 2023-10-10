/// <reference types="Cypress"/>

describe('Handle with selectors', function() {
  beforeEach( function(){
      cy.visit('https://the-internet.herokuapp.com/challenging_dom')
  })

  it('Click on screen`s mainly buttons', function(){
      cy.get('a.button:eq(0)').should('be.visible').click()
      cy.get('a.button:eq(1)').should('be.visible').click()
      cy.get('a.button:eq(2)').should('be.visible').click()
  })

  it('Click on all edit button', function(){
    cy.clickOnAllButtons('edit')
  })

  it('Click on all delete button', function(){
    cy.clickOnAllButtons('delete')
  })
})