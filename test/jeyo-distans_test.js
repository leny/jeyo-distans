"use strict";

var jeyoDistans = require( "../lib/jeyo-distans.js" );

var oLiege = {
  latitude: 50.633,
  longitude: 5.567
};
var aLiege = [ 50.633, 5.567 ];

var oBruxelles = {
  latitude: 50.846686,
  longitude: 4.352425
};
var aBruxelles = [ 50.846686, 4.352425 ];

var oParis = {
  lat: 48.856578,
  lng: 2.351828
};
var aParis = [ 48.856578, 2.351828 ];

var oRioDeJaneiro = {
  lat: -22.909793,
  lng: -43.176251
};
var aRioDeJaneiro = [ -22.909793, -43.176251 ];

exports[ "Jeyo Distans" ] = {

  "errors": function( test ) {
    test.expect( 5 );

    test.throws( function() { jeyoDistans() }, Error );
    test.throws( function() { jeyoDistans( null, null ) }, Error );
    test.throws( function() { jeyoDistans( oLiege, null ) }, Error );
    test.throws( function() { jeyoDistans( null, oLiege ) }, Error );
    test.doesNotThrow( function() { jeyoDistans( oLiege, oBruxelles ) }, Error )

    test.done();
  },

  "plain objects": function ( test ) {
    test.expect( 3 );

    test.equal( jeyoDistans( oLiege, oLiege ), 0, "should be 0m." );
    test.equal( Math.round( jeyoDistans( oLiege, oBruxelles ) ), 88709, "should be 88709m." );
    test.equal( Math.round( jeyoDistans( oBruxelles, oLiege ) ), 88709, "should be 88709m." );

    test.done();
  },

  "short objects": function ( test ) {
    test.expect( 3 );

    test.equal( jeyoDistans( oParis, oParis ), 0, "should be 0m." );
    test.equal( Math.round( jeyoDistans( oParis, oRioDeJaneiro ) ), 9167866, "should be 9167866m." );
    test.equal( Math.round( jeyoDistans( oRioDeJaneiro, oParis ) ), 9167866, "should be 9167866m." );

    test.done();
  },

  "arrays": function ( test ) {
    test.expect( 3 );

    test.equal( jeyoDistans( aLiege, aLiege ), 0, "should be 0m." );
    test.equal( Math.round( jeyoDistans( aLiege, aBruxelles ) ), 88709, "should be 88709m." );
    test.equal( Math.round( jeyoDistans( aBruxelles, aLiege ) ), 88709, "should be 88709m." );

    test.done();
  },

  "mixed": function ( test ) {
    test.expect( 6 );

    test.equal( Math.round( jeyoDistans( oLiege, aBruxelles ) ), 88709, "should be 88709m." );
    test.equal( Math.round( jeyoDistans( oBruxelles, aLiege ) ), 88709, "should be 88709m." );

    test.equal( Math.round( jeyoDistans( oBruxelles, oParis ) ), 263686, "should be 263686m." );
    test.equal( Math.round( jeyoDistans( aBruxelles, oParis ) ), 263686, "should be 263686m." );

    test.equal( Math.round( jeyoDistans( oRioDeJaneiro, aLiege ) ), 9469697, "should be 9469697m." );

    test.equal( Math.round( jeyoDistans( aRioDeJaneiro, oBruxelles ) ), 9428070, "should be 9428070m." );

    test.done();
  },

};
