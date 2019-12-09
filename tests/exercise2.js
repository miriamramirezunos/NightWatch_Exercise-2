module.exports = {
    'Exercise 2 - Automation NightWatch JS' : function (browser) {
      browser
        .url('https://www.microsoft.com/en-us/')
        .waitForElementVisible("#shellmenu_1")
        .click("#shellmenu_1")
        .waitForElementVisible("#c-shellmenu_42")
        .click("#c-shellmenu_42")
        .assert.containsText('#c-shellmenu_43', 'How to get Windows 10')
        .assert.containsText('#c-shellmenu_46', 'Windows 7 end of support')
        .assert.containsText('#c-shellmenu_47', 'Windows 10 features')
        .waitForElementVisible("#c-shellmenu_47")
        .click("#c-shellmenu_43")
        .assert.containsText('h2', 'Want to get Windows 10?')
        .waitForElementVisible("#search")
        .click("#search")
        .setValue('#cli_shellHeaderSearchInput', 'Visual Studio Community')
        .waitForElementVisible("#search")
        .click("#search")
        .waitForElementVisible("#R1MarketRedirect-close")
        .click("#R1MarketRedirect-close")
        .waitForElementVisible("a[name='tab']")
        .saveScreenshot("./reports/nameofImage.png") 
      },

      'condition - results': function (browser) {
          browser
          .expect.elements("div[data-grid=col-10].f-result-item").count.to.equal(20)          
      }, 

      'click first 3 pages': function (browser) 
      {        
        for(i=1;i<=3;i++)
        {
          browser
          .waitForElementVisible("li.f-active + li", 2000, false, function(page)
          {
            if(page.value)
            {
              browser.click("li.f-active + li")
              .pause(2000)
            }
            else
            {
             console.log("button is not available anymore")
            } 
          })
        }
      },

      'end the test': function (browser) {
        browser
        .pause(2000)
        .end(); 
      }
  };