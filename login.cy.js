it("login page", () => {
  cy.visit("https://webapp-cypress.staging.k8s.wallex.ir/login");
  cy.title().should(
    "include",
    "ورود به پلتفرم معاملات ارزهای دیجیتال | صرافی والکس"
  );
  cy.get("#login-signup").click();
});

it("input", () => {
  cy.visit("https://webapp-cypress.staging.k8s.wallex.ir/login");
  const mobilenumber = "09938050312";
  const password = "Sahar1380";
  cy.get('input[name="userName"][type="text"]')
    .type(mobilenumber)
    .should("have.value", mobilenumber);
  cy.get('input[name="password"][type="password"]')
    .type(password)
    .should("have.value", password);
  cy.get("#login-submit").click();
});

describe("second test", () => {
  it("login page", () => {
    cy.visit("https://webapp-cypress.staging.k8s.wallex.ir/login");
    cy.title().should(
      "include",
      "ورود به پلتفرم معاملات ارزهای دیجیتال | صرافی والکس"
    );
    cy.get("#login-signup").click();
  });
});
