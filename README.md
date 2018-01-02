# freespace
NPM freespace propagation calculator

## Installation
```
npm install freespace
```

## Usage
```
var wireless = require('freespace');
wireless.Antenna(0, 0, 300);
wireless.SetFrequency(947);
console.log(wireless.GetPathLoss(0, 0, 0));
console.log(freespace(2400, 300));
console.log(freespace_k1k2k3(30, 2, 0, 100));
```

Output:
```
81.51942467445872
89.59664992862537
34
```

## Online Tool
You may also like [this tool: Free Space Path Loss Calculator with API](https://propagationtools.com/wireless/free-space-path-loss-calculator-with-api/).

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Author
freespace © justyy, Released under the MIT License.
Authored and maintained by sinchang with help from contributors (list).

* [@justyy](https://steemit.com/@justyy), 
    * Blog: [helloacm](https://helloacm.com)
    * Blog: [codingforspeed](https://codingforspeed.com)
    * Others: [weibomiaopai](https://weibomiaopai.com)
    * Others: [rot47](https://rot47.net)
    * Others: [uploadbeta](https://uploadbeta.com)
    * Others: [isvbscriptdead](https://isvbscriptdead.com)
    * Email: dr.zhihua.lai@gmail.com
    * Github: [github.com/doctorlai](https://github.com/doctorlai)
    * Twitter: [doctorzlai](https://twitter.com/doctorzlai)
