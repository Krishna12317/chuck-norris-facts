describe('Chuck Norris Fact Web Application', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the logo', () => {
        cy.get('img[src="/chuck-norris-logo.png"]').should('be.visible');
    });

    it('should have a dropdown and a button in the header to toggle theme', () => {
        cy.get('header').within(() => {
            cy.get('select').should('be.visible');
            cy.get('button').contains('Dark Mode').should('be.visible');
        });
    });

    it('should have a locale dropdown with the correct options', () => {
        cy.get('header').within(() => {
            cy.get('select').should('be.visible').as('localeDropdown');
        });

        cy.get('@localeDropdown').find('option').should(($options) => {
            const expectedLocales = ['en', 'ar'];
            const actualLocales = $options.map((_i, el) => Cypress.$(el).val()).get();

            expect(actualLocales).to.have.members(expectedLocales);
        });
    });

    it('should change the locale when a different option is selected', () => {
        cy.get('header').within(() => {
            cy.get('select').select('ar');
        });

        cy.get('button[name="search"]').should('contain.text', 'بحث');
        cy.get('input[name="queryInput"]').should('have.attr', 'placeholder', 'ابحث عن حقائق تشاك نوريس');
    });

    it('should toggle theme', () => {
        cy.get('button').contains('Dark Mode').should('be.visible').click();
        cy.get('body').should('have.class', 'dark-theme');
        cy.get('button').contains('Light Mode').should('be.visible').click();
        cy.get('body').should('have.class', 'light-theme');
    });

    it('should display "failed" in the paragraph when input is empty', () => {
        cy.get('input[name="queryInput"]').clear();
        cy.get('button').contains('Search').click();
        cy.get('div p').should('contain.text', 'Failed to fetch Chuck Norris facts. Please try again with at least 3 characters');
    });

    it('should display 821 facts when "kick" is entered in the input field', () => {
        cy.get('input[name="queryInput"]').type('kick');
        cy.get('button').contains('Search').click();
        cy.get('div p').should('contain.text', 'kick');
        cy.get('div p').should('contain.text', '821');
    });

    it('should navigate between facts using previous and next buttons', () => {
        cy.get('input[name="queryInput"]').type('kick');
        cy.get('button').contains('Search').click();
        cy.get('div p').should('contain.text', 'kick');

        cy.get('button').contains('Next').click();
        cy.get('div p').should('contain.text', '2');

        cy.get('button').contains('Previous').click();
        cy.get('div p').should('contain.text', '1');
    });

    it('should enter value into text box and press Enter key', () => {
        cy.get('input[name="queryInput"]').type('test');

        cy.get('input[name="queryInput"]').type('{enter}');

        cy.wait(1000);

        cy.get('div p').should('contain.text', 'Fact 1 of 156');
    });

    it('should navigate to next item on right arrow key press', () => {
        cy.get('input[name="queryInput"]').type('kick');
        cy.get('button').contains('Search').click();

        cy.wait(1000);
        cy.get('body').type('{rightarrow}');

        cy.get('div p').should('contain.text', 'Fact 2 of 821');
    });

    it('should navigate to previous item on left arrow key press', () => {
        cy.get('input[name="queryInput"]').type('kick');
        cy.get('button').contains('Search').click();

        cy.wait(1000);
        cy.get('body').type('{leftarrow}');

        cy.get('div p').should('contain.text', 'Fact 821 of 821');
    });

});
