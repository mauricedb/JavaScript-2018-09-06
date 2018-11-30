module.exports = {
  Search_using_Google: function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('div#search', 'Rembrandt van Rijn - Wikipedia')
      .end();
  },
  Show_top_movies: function(browser) {
    browser
      .url('https://top-movies-qhyuvdwmzt.now.sh/')
      .waitForElementVisible('.movie-card:first-of-type', 1000)
      .click('.movie-card button')
      .end();
  },
  Search_for_movies: function(browser) {
    browser
      .url('https://top-movies-qhyuvdwmzt.now.sh/')
      .waitForElementVisible('input[type=search]', 1000)
      .setValue('input[type=search]', ['brazil', browser.Keys.ENTER])
      .waitForElementVisible('.movie-card:first-of-type', 1000)
      .click('.movie-card button')
      .waitForElementVisible('input[type=text]', 10000)
      .assert.value('input[type=text]', '1985-02-20')
      .end();
  }
};
