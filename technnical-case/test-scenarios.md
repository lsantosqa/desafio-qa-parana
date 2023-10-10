Imagina que você iniciou em uma equipe com um projeto do Zero. A proposta do projeto é a criação de uma solução
para realizar compra de imóveis através de sistemas que facilitarão a comunicação de imobiliárias, clientes e bancos. A
arquitetura está sendo desenhada a partir de solução de microsserviços e WebSites, está sendo mapeado integrações
com sistemas externos, espera-se volume alto de operação uma vez que o sistema irá operar em todo o território
Brasileiro, o cliente está bem próximo do projeto para levantamento de requisitos.

>**Inicio:**

Dado que existirá comunicação com serviços externos, é necessário pensar em uma abordagem que garanta a correta integração com esses serviços, assim como, a performance aceitável diante dos serviços externos utilizados. É importante estudar o aspecto de usabilidade, assim como executar esse tipo de teste, dada a utilização do sistema em todo o Brasil.

A abordagem mais comum em novos projeto é a pirâmide de testes, mas nesse caso podemos adotar uma abordagem mais personalizada, avaliando tanto aspectos funcionais quanto não funcionais. Sendo assim executar os seguintes tipos de testes, em seus respectivos níveis:

>### Integration

- Unit
- Integration
- Contract

>### Delivery

- End-to-End
- Acceptance
- Performance

>### Deployment

- Smoke
- Monitoring
- Alert

Desta forma conseguiriamos distribuir os testes, colocando no começo da esteira, primeiro os testes que nos dão um feedback mais rápido, para sempre validarmos a menor porção de alterações possível, e saber se tal alteração casou algum problema, o quanto antes.


>### Ferramentas:
Obs: Prefiro escolher ferramentas que usem linguagem de programação equivalente a `stack` do time.

- Unit - `Jest`
- Integration - `Jest`
- Contract - `Cypress`

- End-to-End - `Cypress`, `Postman`, ...
- Acceptance - `Cypress`
- Performance - `Jmeter` ou `K6`

- Smoke - `Cypress`
- Monitoring - `New Relic`
- Alert - `New Relic`


Trabalhando nesse time, imagino que o esforço inicial seria coletar o máximo de informação possível sobre o negócio e quais as expectativas do cliente, para definir objetivos de qualidade o quanto antes. Entender qual a maturidade do time em relação a agilidade e qualidade, para ajudar o time a definir um processo minímo inicial que já entregue qualidade nas primeiras versões.


>### Cenários de testes

- Validar autenticação com sucesso
- Validar a pesquisa de um imóvel (Sem filtro)
- Validar a pesquisa de um imóvel (Utilizando filtro)
- Validar a simulação de um financiamento para compra de um imóvel
- Validar a simulação de um financiamento para compra de um imóvel com restrição no CPF
- Validar a compra de um imóvel com sucesso
- Validar contato com uma imobiliária através do chat
- Validar pesquisa de um imóvel (50k usuários simultaneamente)
- Validar pesquisa de um imóvel (100k usuários simultaneamente)