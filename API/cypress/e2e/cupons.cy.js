/// <reference types="cypress" />

describe('Cupom - Teste da API de cupons', () => {

    it('Deve listar todos os cupons cadastrados', () => {
        cy.listarCupons().then((response) => {
            
            expect(response.status).to.equal(200)
            expect(response).to.not.be.null 
            expect(response.body[0].id).to.not.be.null
        })
    });

    it('Deve listar todos os cupons cadastrados buscando por ID do cupom', () => {
        var idCupom = 9912

        cy.listarCuponsId(idCupom).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(idCupom)

        })
    })

    it('Deve validar mesagem de erro ao listar produto com Id inválida', () => {

        cy.cuponsIdFalse(3).then((response) => {
            expect(response.status).to.equal(404)
            expect(response.body.message).to.equal('ID inválido.')
        })
    })

    it('Deve realizar o cadastramento de cupom', () => {
        let cupom = `Cupom de Desconto ${Math.floor(Math.random() * 100000)}`
        cy.cadastrarCupom(cupom, '20', 'teste20').then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.id).to.not.be.null
        });
    });
});