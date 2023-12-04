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