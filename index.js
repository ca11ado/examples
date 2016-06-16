'use strict';
require('babel-register');
var _ = require('lodash');
let url = require('url');

function validateWithUrl (value) {
  const PROTOCOL_REGEXP = /^https?:$/;
  const BODY_REGEXP = /^.+\..+$/;
  const SPACE_REGEXP = /\s+/;
  
    let { protocol, hostname, path } = url.parse(value);
    hostname = hostname ? hostname : path;
    let noSpaces = !SPACE_REGEXP.test(value);
  
    protocol = protocol ? PROTOCOL_REGEXP.test(protocol) : true;
    hostname = hostname ? BODY_REGEXP.test(hostname) : false;
  
    return noSpaces && protocol && hostname;
}

function validateWithRegExp (value) {
  const URL_REGEXP = /^(.+?\/\/)?(.+\..+)$/;
  const SPACE_REGEXP = /\s+/;
  const PROTOCOL_REGEXP = /^https?:\/\/$/;
  const BODY_REGEXP = /^(?!\/+?|\.+?|:+?).+\..+$/

  let parseLink = value.match(URL_REGEXP);
  if (!parseLink) {
    return false;
  }

  let [, protocol = '', body = ''] = parseLink;
  let noSpaces = !SPACE_REGEXP.test(value);
  
  protocol = protocol ? PROTOCOL_REGEXP.test(protocol) : true;
  body = body ? BODY_REGEXP.test(body) : false;
  
  return noSpaces && protocol && body;
}

function validWithoutRegExp (value) {
  let hostAndPath = value.replace(/^https?:\/\//, '');
  let hostEnd = hostAndPath.indexOf('/');
  let host = hostEnd < 0 ? hostAndPath : hostAndPath.substr(0, hostEnd);
  let path = hostEnd <= 0 ? null : hostAndPath.substr(hostEnd + 1);

  /*console.log(hostOk(host), portOk(host), pathOk(path));
  console.log(host);
  console.log(path);*/

  return hostOk(host) && portOk(host) && pathOk(path);

  function hostOk (host) {
    return host && _.includes(host, '.') && !_.includes(host, ' ');
  }


  function portOk (host) {
    if (_.includes(host, ':')) {
      let port = host.split(':')[1];
      if (!port || !_.isFinite(Number(port))) {
        return false;
      }
    }
    return true;
  }


  function pathOk (path) {
    return !_.includes(path, ' ');
  }
}

function validate (value) {
  return validWithoutRegExp(value);
}

function test () {
  console.log('1', validate('2gis.ru'));
  console.log('1.1', validate('http://2gis.ru'));
  console.log('2', validate('https://2gis.ru'));
  console.log('3', !validate('httx://2gis.ru'));
  console.log('4', !validate('http://localhost'));
  console.log('5', !validate('ыыы://smart.spb.ru/licenses/'));
  console.log('6', !validate('://2gis.ru'));
  console.log('7', !validate('//2gis.ru'));
  console.log('8', !validate(':smart.spb.ru/licenses/'));
  console.log('9', !validate('http:////////////2gis.ru'));
  console.log('10', !validate('2gis .ru'));
  console.log('11', !validate('http://2gis .ru'));
  console.log('12', !validate('http://'));
  console.log('13', !validate('http//2gis.ru'));
  console.log('14', validate('https://domain.com/my.license'));
  console.log('15', validate('domain.com/myLicense'));
  console.log('16', !validate('ht.tp//domain.com/myLicense'));
  console.log('17', !validate('/domain.com/myLicense'));
}

//let validated = validate('ht.tp//domain.com/myLicense');
test();