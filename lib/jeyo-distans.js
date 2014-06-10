
/*
 * jeyo-distans
 * https://github.com/Leny/jeyo-distans
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.jeyoDistans = factory();
  }
})(this, function() {
  var deg2rad, iR, kindOf, oKindsOf;
  oKindsOf = {};
  "Number String Boolean Function RegExp Array Date Error".split(" ").forEach(function(k) {
    return oKindsOf["[object " + k + "]"] = k.toLowerCase();
  });
  kindOf = function(value) {
    if (value == null) {
      return String(value);
    }
    return oKindsOf[oKindsOf.toString.call(value)] || "object";
  };
  deg2rad = function(iDeg) {
    return iDeg * (Math.PI / 180);
  };
  iR = 6371.009;
  return function(oPositionOne, oPositionTwo) {
    var iA, iC, iDiffLat, iDiffLng, iPositionOneLatitude, iPositionOneLongitude, iPositionTwoLatitude, iPositionTwoLongitude;
    iPositionOneLatitude = kindOf(oPositionOne) === "array" ? oPositionOne[0] : (oPositionOne != null ? oPositionOne.latitude : void 0) || (oPositionOne != null ? oPositionOne.lat : void 0);
    iPositionOneLongitude = kindOf(oPositionOne) === "array" ? oPositionOne[1] : (oPositionOne != null ? oPositionOne.longitude : void 0) || (oPositionOne != null ? oPositionOne.lng : void 0);
    if (!(!!iPositionOneLatitude && !!iPositionOneLongitude)) {
      throw new Error("NO_FIRST_VALID_POSITION");
    }
    iPositionTwoLatitude = kindOf(oPositionTwo) === "array" ? oPositionTwo[0] : (oPositionTwo != null ? oPositionTwo.latitude : void 0) || (oPositionTwo != null ? oPositionTwo.lat : void 0);
    iPositionTwoLongitude = kindOf(oPositionTwo) === "array" ? oPositionTwo[1] : (oPositionTwo != null ? oPositionTwo.longitude : void 0) || (oPositionTwo != null ? oPositionTwo.lng : void 0);
    if (!(!!iPositionTwoLatitude && !!iPositionTwoLongitude)) {
      throw new Error("NO_SECOND_VALID_POSITION");
    }
    iDiffLat = deg2rad(iPositionTwoLatitude - iPositionOneLatitude);
    iDiffLng = deg2rad(iPositionTwoLongitude - iPositionOneLongitude);
    iA = Math.sin(iDiffLat / 2) * Math.sin(iDiffLat / 2) + Math.cos(deg2rad(iPositionOneLatitude)) * Math.cos(deg2rad(iPositionTwoLatitude)) * Math.sin(iDiffLng / 2) * Math.sin(iDiffLng / 2);
    iC = 2 * Math.atan2(Math.sqrt(iA), Math.sqrt(1 - iA));
    return (iR * iC).toFixed(3);
  };
});
