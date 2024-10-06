Feature('Creatives');

Scenario('Creative filtering', ({ I }) => {
    //1. 
    I.amOnPage('/');

    //2. Confirm that all three creatives are successfully loaded.
    I.waitNumberOfVisibleElements('.creative-variant', 3, 3); // define max acceptable wait time for loading

    //3. Apply the "Format" filter and choose "Universal Banner."
    I.click('.filter-new');
    I.click(locate('.filter-new__options--action').at(2))

    I.click('Universal Banner');
    I.click(locate('$dialog-button-container').first());

    //4. Ensure that only one creative is displayed.
    I.seeNumberOfElements('.creative-variant', 1);

    //5. Apply the "Size" filter and select "320x50."
    I.click('.filter-new');
    I.click(locate('.filter-new__options--action').at(4))
    I.click('$320x50');
    I.click(locate('$dialog-button-container').first());

    //6. Confirm that no creatives are displayed.
    I.dontSeeElement('.creative-variant');

    //7. Clear all filters.
    I.click('$remove-filter-chip-button');
    I.click('$remove-filter-chip-button');

    //8. Verify that all three creatives are visible once again.
    I.seeNumberOfElements('.creative-variant', 3);
});