const users = require('../data.json'); // Exports the users data from the JSON file

module.exports = {
    beforeEach(browser) {
        browser
            .deleteCookies()
            .url('https://kgtravel438504128.wordpress.com/')
            .assert.elementPresent('.site-content')
            .pause(3000)
    },

    'Filling up a form': function(browser) {
        const timeOpenerSelector = '#g15-time';
        const timeValueSelector = 'option[value="' + users.User3.time + '"]'; //You can change the value to select here
        const partyOpenerSelector = '#g15-partysize';
        const partyValueSelector = 'option[value="' + users.User2.party + '"]'; //You can change the value to select here

        browser
            .assert.elementPresent('input[name="g15-name"]')
            .setValue('input[name="g15-name"]', users.User2.name)
            .assert.elementPresent('input[name="g15-email"]')
            .setValue('input[name="g15-email"]', users.User2.email)
            .assert.elementPresent('input[name="g15-phone"]')
            .setValue('input[name="g15-phone"]', users.User2.phone)
            .assert.elementPresent('input[name="g15-date"')
            .setValue('input[name="g15-date"]', users.User4.date)
            .click(timeOpenerSelector)
            .click(timeValueSelector)
            .click(partyOpenerSelector)
            .click(partyValueSelector)
            .assert.elementPresent('textarea[name="g15-specialrequests"]')
            .setValue('textarea[name="g15-specialrequests"]', users.User1.request)
            .pause(3000)
            .click('.pushbutton-wide', function(result) {
                this.assert.strictEqual(result.status, 0);
            })
            .pause(3000)
            .saveScreenshot('automation/outputs/form-filled.png');
    },

    'Subscribe': function(browser) {
        browser
            .assert.elementPresent('#subscribe-field')
            .setValue('#subscribe-field', users.User1.name)
            .saveScreenshot('automation/outputs/subscribe.png')
            .click('#subscribe-submit', function(result) {
                this.assert.strictEqual(result.status, 0);
            });
    },

    afterEach(browser) {
        browser.end();
    }
};

