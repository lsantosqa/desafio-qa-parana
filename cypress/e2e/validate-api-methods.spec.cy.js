/// <reference types="Cypress"/>

describe('Validate api methods', function() {
    it('GET method', function() {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.validateJSONSchema('get-user-schema', response.body)
        })
    })

    it('POST method', function() {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1,
              },
        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.validateJSONSchema('post-put-users-schema', response.body)
        })
    })
    it('PUT method', function() {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: JSON.stringify({
                id: 1,
                title: 'foooo',
                body: 'bar',
                userId: 1
            }),
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.validateJSONSchema('post-put-users-schema', response.body)
        })
    })

    it('DELETE method', function() {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})