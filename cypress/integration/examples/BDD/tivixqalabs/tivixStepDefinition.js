/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// TC_1_Open website URL
Given('I open Tivixrentcar search page', () => {

    cy.visit(Cypress.config().baseUrl)
})

// When Fill details of car with Pickup and dropoff dates
When('Fill details of car with pickup and dropoff dates', () => {
    cy.get('#country').select('Germainy').should('have.value', '2')
    cy.get('#city').select('Berlin').should('have.value', '3')
    cy.get('#model').type('Mazda')
    cy.get('#pickup').type('2021-02-15')
    cy.get('#dropoff').type('2021-02-20')
})

// And Click on Search button
And('Click on Search button', () => {
    cy.get('.btn').click()
})

// Then Verify list of car details
Then('Verify list of car details', () => {
    cy.get('#search-results').should('be.visible')
})

// TC_2_Open Website URL
Given('I open Tivixrentcar search page', () => {

    cy.visit(Cypress.config().baseUrl)
})
// When Fill details of car and click on search
When('Fill details of car and click on search', () => {
    cy.get('#country').select('Poland').should('have.value', '1')
    cy.get('#city').select('Wroclaw').should('have.value', '1')
    cy.get('#model').type('Toyota RAV 4')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()
})

// And List of car open and click on one car rent button
And('List of car open and click on one car rent button', () => {
    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/3').click()
})

// And Verify car details and again click on rent! button
And('Verify car details and again click on rent! button', () => {
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/3').click()
})

// And Give valid input in rent form 
And('Give valid input in rent form ', () => {
    cy.get('#name').type('Ami')
    cy.get('#last_name').type('Parekh')
    cy.get('#card_number').type('123456789')
    cy.get('#email').type('parekh65@gmail.com')
    cy.get('.btn').click()
})

// Then Verify with successful redirected page
Then('Verify with successful redirected page', () => {
    cy.get('#info').find('p').should('have.text', 'Ups cannot redirect to success url')
})

// TC_3_Open Website URL
Given('I open Tivixrentcar search page', () => {
    cy.visit(Cypress.config().baseUrl)
})

// When Fill details of car and click on search
When('Fill details of car and click on search', () => {
    cy.get('#country').select('France').should('have.value', '3')
    cy.get('#city').select('Paris').should('have.value', '4')
    cy.get('#model').type('Toyota Aygo')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()
})

// And List of car and verify and click on rent! button
And('List of car and verify and click on rent! button', () => {
    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/1').click()
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/1').click()
})

//And Keep name empty in rent form and fill other details
And('Keep name empty in rent form and fill other details', () => {
    cy.get('#name')
    cy.get('#last_name').type('Rommy')
    cy.get('#card_number').type('1234567')
    cy.get('#email').type('rommy89@gmail.com')
    cy.get('.btn').click()
})

//Then Verify with error validation
Then('Verify with error validation', () => {
    cy.get('.alert').should('have.text', 'Name is required')
})

// TC_4_Open Website URL
Given('I open Tivixrentcar search page', () => {
    cy.visit(Cypress.config().baseUrl)
})

// When Fill details of car and click on search
When('Fill details of car and click on search', () => {
    cy.get('#country').select('France').should('have.value', '3')
    cy.get('#city').select('Paris').should('have.value', '4')
    cy.get('#model').type('Toyota Aygo')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()
})

// And List of car and verify and click on rent! button
And('List of car and verify and click on rent! button', () => {
    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/1').click()
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/1').click()
})

//And Keep Lastname empty in rent form and fill other details
And('Keep Lastname empty in rent form and fill other details', () => {
    cy.get('#name').type("Joy")
    cy.get('#last_name')
    cy.get('#card_number').type('5678912')
    cy.get('#email').type('54joy@gmail.com')
    cy.get('.btn').click()

})

//Then Verify with error validation
Then('Verify with error validation', () => {
    cy.get('.alert').should('have.text', 'Last name is required')
})

// TC_5_Open Website URL
Given('I open Tivixrentcar search page', () => {
    cy.visit(Cypress.config().baseUrl)
})

// When Fill details of car and click on search
When('Fill details of car and click on search', () => {
    cy.get('#country').select('France').should('have.value', '3')
    cy.get('#city').select('Paris').should('have.value', '4')
    cy.get('#model').type('Toyota Aygo')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()
})

// And List of car and verify and click on rent! button
And('List of car and verify and click on rent! button', () => {
    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/1').click()
    cy.get('div').contains('Rent!').should('have.attr', 'href', '/rent/1').click()
})

//And Keep cardnumber length morethan required and fill other details
And('Keep cardnumber length morethan required and fill other details', () => {
    cy.get('#name').should('have.length.lessThan', 50).type('Denial')
    cy.get('#last_name').should('have.length.lessThan', 50).type('Shetty')
    cy.get('#card_number').should('have.length.lessThan', 25).type('12345678911234567892123456')
    cy.get('#email').should('have.length.lessThan', 50).type('danial45@yahoo.com')
    cy.get('.btn').click()
})

//Then Verify with error validation
Then('Verify with error validation', () => {
    cy.get('.alert').should('have.text', 'Card number value is too long')
})

// TC_6_Open Website URL
Given('I open Tivixrentcar search page', () => {
    cy.visit(Cypress.config().baseUrl)
})

// When Fill details of car and click on search
When('Fill details of car and click on search', () => {
    cy.get('#country').select('Poland').should('have.value', '1')
    cy.get('#city').select('Wroclaw').should('have.value', '1')
    cy.get('#model').type('Toyota RAV 4')
    cy.get('#pickup').type('2022-04-15')
    cy.get('#dropoff').type('2022-04-24')
    cy.get('.btn').click()
})

// And List of car and click on rent button
And('List of car and click on rent button', () => {
    cy.get('tr').contains('Rent').should('have.attr', 'href', '/details/3').click()
})

//Then Verify details of car on detail page
Then('Verify details of car on detail page', () => {
    cy.get('.card-title').should('have.text', 'Company: Charles-Alvarez')
})
