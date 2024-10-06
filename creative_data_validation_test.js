Feature('Creatives');

Scenario('Creative data validation', ({ I }) => {
    //1.
    I.amOnPage('/');

    //2. Verify that the text "Banner" is correctly displayed within the 300×250 – Universal Banner.
    I.waitForElement('$defaultListItem', 3);

    I.switchTo('(//iframe)[3]');
    I.switchTo('(//iframe)[2]');

    let locator = locate('#celtra-object-17');

    I.seeCssPropertiesOnElements(locator, { 'left': "0px" });
    I.seeCssPropertiesOnElements(locator, { 'top': "0px" });

    let banner = locate('.scroll-container').find('div').first();

    I.waitForVisible(banner);
    I.seeTextEquals('Banner', banner);
});