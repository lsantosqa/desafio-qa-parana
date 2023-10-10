import Ajv from "ajv"
const ajv = new Ajv({allErrors: true, verbose: true})

Cypress.Commands.add('clickOnAllButtons', function(button) {
    if(button === 'edit'){
        for(let i=0; i<20; i++){
            let edit = i++;
            cy.get('tr > td > a:eq(' + edit + ')').should('have.text', button).click()
        }
    } else {
        for(let i=1; i<20; i++){
            let del = i++;
            cy.get('tr > td > a:eq(' + del + ')').should('have.text', button).click()
        }
    }
})

Cypress.Commands.add('validateJSONSchema', function(schemaJSON, body) {
    cy.fixture(schemaJSON).then((schema) => {
        const validate = ajv.compile(schema)
        const valid = validate(body)
        if (!valid) cy.log(validate.errors).then(() => {
            throw new Error('Contract definitions failed')
        })
    })
})
