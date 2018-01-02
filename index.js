'use strict';

const freespace_k1k2k3 = (k1, k2, k3, d) => {
	return k1 + k2 * Math.log10(d) + k3 * d;
}

const freespace = (MHz, m) => {
	return 32.45 + 20 * Math.log10(0.001 * m * MHz);
}

var wireless = (function(){
	// default WIFI 2.4 GHz
	var frequency = 2400;
	// default Antenna (0, 0, 0)
	var _x = 0;
	var _y = 0;
	var _z = 0;
	
	function setAntenna(ax, ay, az) {
		_x = ax;
		_y = ay;
		_z = az;
	}
	
	function setFreq(f) {
		frequency = f;
	}

	function getFreq() {
		return frequency;
	}

	function getDist(x1, y1, z1, x2, y2, z2) {
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) + (z1 - z2) * (z1 - z2));
	}

	var getPathLoss = function(x, y, z) {
		return freespace(frequency, getDist(x, y, z, _x, _y, _z));
	}

	return {
		Antenna: function(x, y, z) {
			setAntenna(x, y, z);
		},

		SetFrequency: function(f) {
			setFreq(f);
		},

		GetFrequency: function() {
			return getFreq();
		},

		GetDist: function(x, y, z) {
			return getDist(x, y, z, _x, _y, _z);
		},

		GetPathLoss: function(x, y, z) {
			return getPathLoss(x, y, z);
		}
	};
})();

module.exports = {
	freespace, freespace_k1k2k3, wireless
}
