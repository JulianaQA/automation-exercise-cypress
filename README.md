# Automation Exercise – Testes E2E (Cypress)

Trabalho de Conclusão da disciplina **Automação de Testes na Camada de Interface (Web)** – PGATS.
Aplicação sob teste: https://automationexercise.com

## Casos de teste implementados
| Arquivo | Caso |
|---|---|
| `tc01-registrar-usuario.cy.js` | 1 – Register User |
| `tc02-login-valido.cy.js` | 2 – Login com e-mail e senha corretos |
| `tc03-login-invalido.cy.js` | 3 – Login com e-mail e senha incorretos |
| `tc04-logout.cy.js` | 4 – Logout |
| `tc05-registrar-email-existente.cy.js` | 5 – Register com e-mail existente |
| `tc08-produtos-e-detalhes.cy.js` | 8 – Todos os produtos e detalhe do produto |
| `tc09-pesquisar-produto.cy.js` | 9 – Search Product |
| `tc10-subscription-home.cy.js` | 10 – Subscription na home |
| `tc15-pedido-registrando-antes.cy.js` | 15 – Pedido registrando-se antes do checkout |
| `tc16-pedido-login-antes.cy.js` | 16 – Pedido fazendo login antes do checkout |

## Boas práticas adotadas
- **Page Object Model** em `cypress/support/pages` (specs só descrevem o fluxo).
- **Seletores estáveis**: prioriza `data-qa`, depois `id`/`href`; sem XPath ou classes frágeis.
- **Massa de dados dinâmica** (`@faker-js/faker`): e-mail único por execução, sem dependência entre testes.
- **Pré-condições e limpeza via API** (`createAccount`/`deleteAccount`) em `beforeEach`/`afterEach`, deixando a UI apenas para o que está sob teste.
- **Sem `cy.wait` fixo**: apenas asserções com retry automático do Cypress.
- Bloqueio de anúncios de terceiros (`cy.intercept`) para evitar flakiness.
- `retries` somente em modo `run` (CI).

## Como executar
```bash
npm install
npm run cy:open   # modo interativo
npm run cy:run    # headless + relatório
```

## Relatório
Gerado com **Mochawesome** (com gráficos e screenshots embutidos) em `cypress/reports/index.html`.

## GitHub Actions
O workflow `.github/workflows/cypress.yml` roda a cada push/PR (e manualmente em *Actions → Run workflow*).
O relatório HTML fica disponível como **artifact** (`relatorio-mochawesome`) ao final da execução.
