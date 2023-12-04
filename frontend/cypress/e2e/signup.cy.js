// signUp.spec.js
 
describe('Sign Up', () => {
  beforeEach(() => {
    // Visit the Sign Up page before each test
    cy.visit('http://10.0.0.239:5173/sign-up');
  });
 
  it('should successfully sign up with valid credentials', () => {
    // Fill out the Sign Up form
    cy.get('[data-id=name]').type('Ann Array');
    cy.get('[data-id=email]').type('annray@gmail.com');
    cy.get('[data-id=password]').type('Password@123');
    cy.get('[data-id=confirmation]').type('Password@123');
 
    // Submit the form
    cy.intercept('POST', 'http://localhost:3000/auth/signup', {
      statusCode: 200,
      body: {
        name: 'Ann Array',
      },
    })
 
    // Submit the form
    cy.get('[data-id=sign-up]').click();
 
    cy.url().should('include', '/onboarding');
  });
});
 
describe('Onboarding', () => {
  beforeEach(() => {
    // Visit the Sign Up page before each test
    cy.visit('http://10.0.0.239:5173/onboarding');
  });
 
  it('should successfully onboard', () => {
    // Fill out the Sign Up form
 
    cy.url().should('include', '/onboarding');
 
    cy.get('[data-id=full-name]').type('Ann Array');
    cy.get('[data-id=display-name]').type('Ann');
 
    // Submit the form
    cy.get('[data-id=create-workspace]').click();
 
    cy.wait(1000)
 
    // second page question
    cy.get('[data-id=age]').click();
 
    cy.wait(1000)
 
    // third page question
    cy.get('[data-id=goal]').click();
 
    // cy.wait(1000)
 
    // fourth question
 
    cy.get('[data-id=body-type]').click();
 
    // cy.wait(1000)
 
    // Submit the form
    cy.intercept('POST', 'http://localhost:3000/profile/create', {
      statusCode: 200,
      body: {
        name: 'Ann Array',
      },
    })
 
    cy.get('[data-id=submit-data]').click();
 
    cy.wait(1000)
 
    // Logout
 
    cy.get('[data-id=logout]').click();
 
  });
 
});