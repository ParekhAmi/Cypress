/// <reference types="cypress" />


it('TC_1_rentCar searchPage', function () {
    cy.visit('http://qalab.pl.tivixlabs.com')
    cy.get('#country').select('Germainy').should('have.value', '2')
    cy.get('#city').select('Berlin').should('have.value', '3')
    cy.get('#model').type('Mazda')
    cy.get('#pickup').type('2021-02-15')
    cy.get('#dropoff').type('2021-02-20')
    cy.get('.btn').click()

    cy.get('#search-results').should('be.visible')
})

it('TC_2_rentForm validInput', function () {

    //Using baseUrl of website from cypress.json file
    let url = Cypress.config().baseUrl
    cy.visit(url)

    cy.get('#country').select('Poland').should('have.value', '1')
    cy.get('#city').select('Wroclaw').should('have.value', '1')
    cy.get('#model').type('Toyota RAV 4')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()

    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/3').click()
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/3').click()

    cy.get('#name').type('Ami')
    cy.get('#last_name').type('Parekh')
    cy.get('#card_number').type('123456789')
    cy.get('#email').type('parekh65@gmail.com')
    cy.get('.btn').click()

    cy.get('#info').find('p').should('have.text', 'Ups cannot redirect to success url')
})

it('TC_3_rentForm emptyName', function () {

    //Using baseUrl of website from cypress.json file
    let url = Cypress.config().baseUrl
    cy.visit(url)

    cy.get('#country').select('France').should('have.value', '3')
    cy.get('#city').select('Paris').should('have.value', '4')
    cy.get('#model').type('Toyota Aygo')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()

    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/1').click()
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/1').click()

    cy.get('#name')
    cy.get('#last_name').type('Rommy')
    cy.get('#card_number').type('1234567')
    cy.get('#email').type('rommy89@gmail.com')
    cy.get('.btn').click()

    cy.get('.alert').should('have.text', 'Name is required')
})

it.only('TC_4_rentForm emptyLastName', function () {

    //Using baseUrl of website from cypress.json file
    let url = Cypress.config().baseUrl
    cy.visit(url)

    cy.get('#country').select('France').should('have.value', '3')
    cy.get('#city').select('Paris').should('have.value', '4')
    cy.get('#model').type('Toyota Aygo')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()

    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/1').click()
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/1').click()

    cy.get('#name').type("Joy")
    cy.get('#last_name')
    cy.get('#card_number').type('5678912')
    cy.get('#email').type('54joy@gmail.com')
    cy.get('.btn').click()

    cy.get('.alert').should('have.text', 'Last name is required')
})

it('TC_5_rentForm cardNumberLength', function () {

    //Using baseUrl of website from cypress.json file
    let url = Cypress.config().baseUrl
    cy.visit(url)

    cy.get('#country').select('France').should('have.value', '3')
    cy.get('#city').select('Paris').should('have.value', '4')
    cy.get('#model').type('Toyota Aygo')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()

    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/1').click()
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/1').click()

    cy.get('#name').should('have.length.lessThan', 50).type('Denial')
    cy.get('#last_name').should('have.length.lessThan', 50).type('Shetty')
    cy.get('#card_number').should('have.length.lessThan', 25).type('12345678911234567892123456')
    cy.get('#email').should('have.length.lessThan', 50).type('danial45@yahoo.com')
    cy.get('.btn').click()

    cy.get('.alert').should('have.text', 'Card number value is too long')
})

it('TC_6_rentCar DetailPage', function () {

    //Using baseUrl of website from cypress.json file
    let url = Cypress.config().baseUrl
    cy.visit(url)

    cy.get('#country').select('Poland').should('have.value', '1')
    cy.get('#city').select('Wroclaw').should('have.value', '1')
    cy.get('#model').type('Toyota RAV 4')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()

    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/3').click()

    cy.get('.card-title').should('have.text', 'Company: Charles-Alvarez')
})



