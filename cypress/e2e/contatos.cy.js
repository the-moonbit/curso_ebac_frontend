/// <reference types="cypress" />

describe('Testes para a Agenda de Contatos', () => {
  
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluir um novo contato', () => {
    cy.get('input[type="text"]').type('Mariazinha da Silva')
    cy.get('input[type="email"]').type('mariazinha@teste.com')
    cy.get('input[type="tel"]').type('11988887777')
    cy.contains('Adicionar').click()
    cy.contains('Mariazinha da Silva').should('be.visible')
  })

  it('Deve alterar um contato existente', () => {
    cy.get('.edit').first().click()
    cy.get('input[type="text"]').clear().type('Mariazinha Alterada')
    cy.get('.alterar').click()
    cy.contains('Mariazinha Alterada').should('be.visible')
  })

  it('Deve remover um contato', () => {
    cy.get('.delete').first().click()
  })

})