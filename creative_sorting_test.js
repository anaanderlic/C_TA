Feature('Creatives');

Scenario('Creative sorting', ({ I }) => {
    //1.
    I.amOnPage('/');

    //2. Confirm that the default sorting is set to "Last Modified Creative."
    I.waitForElement('$defaultListItem', 5);
    I.seeTextEquals('Last modified creative', '$defaultListItem');

    //3. Check and verify the sequence in which the creatives are displayed.
    let creatives = locate('.creative-variants-list--creatives');

    I.see('Expandable', creatives.find('.creative-variant').first());
    I.see('Interstitial', creatives.find('.creative-variant').at(2));
    I.see('Banner', creatives.find('.creative-variant').last());

    //4. Change the sorting to "Size" in descending order (from larger to smaller).
    I.click('$defaultListItem');
    I.click('$surface');

    //5. Verify the updated order of the creatives.
    creatives = locate('.creative-variants-list--creatives'); // is this necessary? test passes without updating

    I.see('Interstitial', creatives.find('.creative-variant').first());
    I.see('Banner', creatives.find('.creative-variant').at(2));
    I.see('Expandable', creatives.find('.creative-variant').last());
});