var wireless = require('wireless_pathloss');
wireless.wireless.Antenna(0, 0, 300);
wireless.wireless.SetFrequency(947);
console.log(wireless.wireless.GetPathLoss(0, 0, 0));
console.log(wireless.freespace(2400, 300));
console.log(wireless.freespace_k1k2k3(30, 2, 0, 100));