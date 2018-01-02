var should = require('chai').should(),
    wireless_pathloss = require('../index'),
    wireless = wireless_pathloss.wireless,
    freespace = wireless_pathloss.freespace,
    freespace_k1k2k3 = wireless_pathloss.freespace_k1k2k3;

describe('wireless', function() {
  it('wireless', function() {
    wireless.Antenna(0, 0, 300);
    wireless.SetFrequency(947);
    wireless.GetPathLoss(0, 0, 0).should.be.closeTo(81.5194, 1e-2);
  }); 
});

describe('freespace', function() {
  it('freespace', function() {
    freespace(2400, 300).should.be.closeTo(89.5966, 1e-2);
  });
});

describe('freespace_k1k2k3', function() {
  it('freespace_k1k2k3', function() {
    freespace_k1k2k3(30, 2, 0, 100).should.be.closeTo(34, 1e-2);
  });
});
