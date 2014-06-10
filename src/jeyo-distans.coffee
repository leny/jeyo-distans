###
 * jeyo-distans
 * https://github.com/Leny/jeyo-distans
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

do (
    root = this,
    factory = ->
        oKindsOf = {}
        "Number String Boolean Function RegExp Array Date Error".split( " " ).forEach ( k ) ->
            oKindsOf[ "[object #{ k }]"] = k.toLowerCase()

        kindOf = ( value ) ->
            return String value unless value?
            oKindsOf[ oKindsOf.toString.call( value ) ] or "object"

        deg2rad = ( iDeg ) ->
            iDeg * ( Math.PI / 180 )

        iR = 6371.009 # Radius of the earth in km

        ( oPositionOne, oPositionTwo ) ->
            iPositionOneLatitude = if kindOf( oPositionOne ) is "array" then oPositionOne[ 0 ] else ( oPositionOne?.latitude or oPositionOne?.lat )
            iPositionOneLongitude = if kindOf( oPositionOne ) is "array" then oPositionOne[ 1 ] else ( oPositionOne?.longitude or oPositionOne?.lng )
            throw new Error( "NO_FIRST_VALID_POSITION" ) unless !!iPositionOneLatitude and !!iPositionOneLongitude

            iPositionTwoLatitude = if kindOf( oPositionTwo ) is "array" then oPositionTwo[ 0 ] else ( oPositionTwo?.latitude or oPositionTwo?.lat )
            iPositionTwoLongitude = if kindOf( oPositionTwo ) is "array" then oPositionTwo[ 1 ] else ( oPositionTwo?.longitude or oPositionTwo?.lng )
            throw new Error( "NO_SECOND_VALID_POSITION" ) unless !!iPositionTwoLatitude and !!iPositionTwoLongitude

            iDiffLat = deg2rad iPositionTwoLatitude - iPositionOneLatitude
            iDiffLng = deg2rad iPositionTwoLongitude - iPositionOneLongitude
            iA = Math.sin( iDiffLat / 2 ) * Math.sin( iDiffLat / 2 ) + Math.cos( deg2rad( iPositionOneLatitude ) ) * Math.cos( deg2rad( iPositionTwoLatitude ) ) * Math.sin( iDiffLng / 2 ) * Math.sin( iDiffLng / 2 )
            iC = 2 * Math.atan2( Math.sqrt( iA ), Math.sqrt( 1 - iA ) )
            ( iR * iC ).toFixed 3
) ->
    if typeof define is "function" and define.amd
        define [], factory
    else if typeof exports is "object"
        module.exports = factory()
    else
        root.jeyoDistans = factory()
    return
