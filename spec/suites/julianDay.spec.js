describe("calendars.counts.julianDay", function() {

  var example = new Date(2012, 11, 21); // January = 0

  it("should exist as a well-formed class", function() {
    expect(calendars.counts.julianDay).toBeDefined();
    expect(calendars.counts.julianDay.prototype).toBeDefined();
    expect(new calendars.counts.julianDay().constructor.name).toEqual('julianDay');
  });

  it("should handle conversion from system datetime", function() {
    expect(calendars.counts.julianDay.from_Date).toBeDefined();
    var julianDay = calendars.counts.julianDay.from_Date(example);
    expect(julianDay.number).toEqual(2456283);
  });

  it("should show up correctly in new days", function() {
    var day = new calendars.day(example);
    expect(day.julianDay.constructor.name).toEqual('julianDay');
    expect(day.julianDay.number).toEqual(2456283);
  });

  it("should support addition", function() {
    var julianDay = new calendars.day(example).julianDay;
    var yearago = julianDay.plus(-366);
    expect(yearago.number).toEqual(julianDay.number - 366);
  });

  it("should have a nice toString()", function() {
    var julianDay = new calendars.day(example).julianDay;
    expect(julianDay.toString()).toEqual('2456283');
  });

});
