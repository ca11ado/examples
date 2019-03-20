function formula(x, x1, x2, y, y1, y2) {
  return ( ( y1 < y  &&  y2 >= y ) || ( y2 < y  &&  y1 >= y ) ) && ( x1 + ( y - y1 ) / ( y2 - y1 ) * ( x2 - x1 ) < x );
}

export function insidePolygon2(pos, poly) {
  const coords = poly.coords;
  const x = pos.x;
  const y = pos.y;
  return coords.reduce((isInside, currentPos, index) => {
    const xy1 = coords[index - 1] || coords[coords.length - 1];
    const y1 = xy1.y
    const x1 = xy1.x;
    const y2 = currentPos.y;
    const x2 = currentPos.x;
    return formula(x, x1, x2, y, y1, y2) ? !isInside : isInside;
  }, false);
}

export function insidePolygon(pos, poly) {
    var x = pos.x, y = pos.y, coords = poly.coords, inside = false;
    var v = coords[coords.length-1], x1 = v.x, y1 = v.y;
    for( var i = -1;  v = coords[++i]; ) {
        var x2 = v.x, y2 = v.y;
        if( ( y1 < y  &&  y2 >= y ) || ( y2 < y  &&  y1 >= y ) )
            if ( x1 + ( y - y1 ) / ( y2 - y1 ) * ( x2 - x1 ) < x )
                inside = ! inside;
        x1 = x2, y1 = y2;
    }
    return inside;
}

export const shapes = [
    { id: "cat", coords: [{ x:55, y:90 },{x:67,y:54},{x:72,y:89},
           {x:99,y:88},{x:106,y:54},{x:115,y:91},{x:123,y:106},
           {x:100,y:134},{x:88,y:130},{x:80,y:134},{x:48,y:108}]},
    { id: "dog", coords: [{x:171,y:58},{x:154,y:80},{x:156,y:120},
           {x:166,y:110},{x:166,y:82},{x:183,y:130},{x:202,y:127},
           {x:221,y:78},{x:225,y:111},{x:237,y:119},{x:231,y:59},
           {x:211,y:66},{x:195,y:60},{x:180,y:72}]}
]
