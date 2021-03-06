'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can land at an airport', function(){
    plane.land(airport);
    expect(airport.hangar()).toContain(plane)
  })
})
