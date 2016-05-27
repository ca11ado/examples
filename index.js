'use strict';
require('babel-register');
var _ = require('lodash');

// --harmony_destructuring

let firstCollection = [
  { city: 'Moscow', items: [{ address: 'Lenina 1' }, { address: 'Lenina 2' }] },
  { city: 'Piter', items: [{ address: 'Marks 1' }, { address: 'Marks 2' }] }
];

let secondCollection = [
  { city: 'Moscow', items: [{ address: 'Lenina 3' }, { address: 'Lenina 4' }] },
  { city: 'Piter', items: [{ address: 'Marks 3' }, { address: 'Marks 4' }] }
];
let thirdCollection = [
  { city: 'Moscow', items: [{ address: 'Lenina 5' }, { address: 'Lenina 6' }] },
  { city: 'Piter', items: [{ address: 'Marks 5' }, { address: 'Marks 6' }] },
  { city: 'Himki', items: [{ address: 'Stalina 1' }, { address: 'Stalina 2' }] }
];

let merge = _.merge(firstCollection, secondCollection);

let combine = _.chain(thirdCollection)
  .reduce((accum, group) => {
    let tt;
    if (tt = _.find(accum, { city: group.city })) {
      tt.items = [...tt.items, ...group.items];
    } else {
      accum.push(group);
    }
    return accum;
  }, firstCollection)
  .value();



let response = (citiesArr) => {
  let groups = _.map(citiesArr, ({ cityName, addressesCount }, index) => {
    let items = _.fill(new Array(addressesCount), 'templaste');
    console.log(_.size(items));
    items = _.map(items, (items, indexIn) => {
      return {
        id: '76328437623932',
        building: {
          id: '1267273050395491',
          city: `${cityName}-${index}`,
          street: `Street-${indexIn}`,
          number: `${indexIn}`
        },
        internet_technology: ["ethernet", "adsl", "adsl2", "docsis", "plc", "pon", "4g", "3g", "fttp", "fttb"],
        available_services: ["internet", "phone", "digital_tv", "cable_tv"]
      };
    });
    return {
      city: `CityName-${index}`,
      items
    };
  });

  return {
    status: { code: 200 },
    content: {
      result: {
        group: groups
      }
    }
  };
};

let responseAPI = response([{ cityName: 'Москва', addressesCount: 10 }, { cityName: 'Питер', addressCount: 10 }]);
console.log(responseAPI.content.result.group[0].items);