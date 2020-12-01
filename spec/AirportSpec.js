'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('has a hangar with no planes by default', function() {
    expect(airport.hangar()).toEqual([]);
  });
  it('can clear plane for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.hangar()).toEqual([plane]);
  });
});
