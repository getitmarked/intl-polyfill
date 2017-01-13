describe('index', function() {

  it('loadIntlLocales', function() {

    var number = 3500;
    var date = new Date(Date.UTC(2017, 11, 27, 20, 0, 0));

    expect(new Intl.NumberFormat('en').format(number)).toBe('3,500');
    expect(new Intl.NumberFormat('ja').format(number)).toBe('3,500');
    expect(new Intl.NumberFormat('de-DE').format(number)).toBe('3,500');

    expect(new Intl.DateTimeFormat('en', {timeZone:'UTC'}).format(date)).toBe('12/27/2017');
    expect(new Intl.DateTimeFormat('ja', {timeZone:'UTC'}).format(date)).toBe('12/27/2017');
    expect(new Intl.DateTimeFormat('de-DE', {timeZone:'UTC'}).format(date)).toBe('12/27/2017');

    var loadIntlLocales = require('../index');
    loadIntlLocales(['ja', 'de-DE']);

    expect(new Intl.NumberFormat('en').format(number)).toBe('3,500');
    expect(new Intl.NumberFormat('ja').format(number)).toBe('3,500');
    expect(new Intl.NumberFormat('de-DE').format(number)).toBe('3.500');

    expect(new Intl.DateTimeFormat('en', {timeZone:'UTC'}).format(date)).toBe('12/27/2017');
    expect(new Intl.DateTimeFormat('ja', {timeZone:'UTC'}).format(date)).toBe('2017/12/27');
    expect(new Intl.DateTimeFormat('de-DE', {timeZone:'UTC'}).format(date)).toBe('27.12.2017');

  });

});