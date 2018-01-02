var wireless = require('wireless_pathloss');
wireless.Antenna(0, 0, 300);
wireless.SetFrequency(947);
console.log(wireless.GetPathLoss(0, 0, 0));
console.log(freespace(2400, 300));
console.log(freespace_k1k2k3(30, 2, 0, 100));