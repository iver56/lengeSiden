lengeSidenApp.service('DateTimeService', function() {
  /**
   * Returns a list of dates from today
   * @param numDates number of dates to list
   * @returns {Array}
   */
  this.getDates = function(numDates) {
    var dates = [];
    for (var d = 0; d < numDates; d++) {
      var date = Date.today().add(d).days();
      var isoString = date.toISOString();
      var text = date.toString('dddd d. MMM');
      dates.push({
        key: isoString,
        text: text
      });
    }
    return dates
  };

  /**
   * Takes a custom object with separate date and time properties and converts it to one Date object
   * @param customDateTimeObject with date and time properties
   * @returns { Date object }
   */
  this.getDateObject = function(customDateTimeObject) {
    if (!customDateTimeObject) {
      return null
    } else if (null === customDateTimeObject.date || null === customDateTimeObject.time) {
      return null;
    }

    var hours = parseInt(customDateTimeObject.time.split(".")[0]),
      minutes = parseInt(customDateTimeObject.time.split(".")[1]);
    return new Date(customDateTimeObject.date)
      .add(hours).hours()
      .add(minutes).minutes();
  };

  /**
   * Tomorrow
   * @returns {string}
   */
  this.getDefaultDate = function() {
    return Date.now().add(1).day().clearTime().toISOString();
  };
});
