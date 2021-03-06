const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistanceTravelled, journey) => {
    return totalDistanceTravelled += journey.distance
  },0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  transportMethods = this.journeys.map((journey) => {
    return journey.transport
  })
  return [...new Set(transportMethods)]
};


module.exports = Traveller;
