'use strict';

class Airport {
  constructor() {
    this._hangar = []
  }

  hangar() {
    return this._hangar;
  };

  clearForLanding(plane) {
    this._hangar.push(plane);
  };
};
