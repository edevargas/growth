describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a title", () => {
    cy.get("h1").contains("My Goals");
  });

  it("should have a list of goals", () => {
    cy.getEl("goal-list-container").children().should("have.length", 3);
  });

  it("should show goal details when clicking on a goal", () => {
    cy.getEl("goal-item").first().click();
    cy.getEl("goal-info").should("contain", "Simple description / SA");
  });

  it("should show goal details when clicking on a second goal", () => {
    cy.getEl("goal-item").eq(1).click();
    cy.getEl("goal-info").should("contain", "Simple description English");
  });

} );
