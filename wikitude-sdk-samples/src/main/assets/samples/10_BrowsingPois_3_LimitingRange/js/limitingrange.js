/*
    Information about server communication. This sample webservice is provided by Wikitude and returns random dummy
    places near given location.
 */

var buildingInfo = [
    "Information for Rec Center",
    "Information for WSL",
    "Information for DDH",
    "Information for Runner Cafe",
    "Information for Student Union",
    "Information for SRC",
    "Information for SHE",
    "Information for Icardo Center",
    "Information for Student Health Services",
    "Information for Physical Education",
    "Information for Fab Lab",
    "Information for Engineering Complex",
    "Information for NSME",
    "Information for BDC-A",
    "Information for BDC-B",
    "Information for BDC-C",
    "Information for BDC-D",
    "Information for BDC-E",
    "Information for Science 1",
    "Information for Science 2",
    "Information for science 3",
    "Information for Modular West",
    "Information for Children Center",
    "Information for Romberg Nursing Center",
    "Information for Runner Express",
    "Information for Education",
    "Information for Administration East",
    "Information for Administration West",
    "Information for Classroom Building",
    "Information for Humanities Office Building",
    "Information for Visual Arts",
    "Information for Dore Theatre",
    "Information for Music Building",
    "Information for Facilities",
    "Information for Modular East 3",
    "Information for Food Pantry",
    "Cesar's secret formula goes here."
];



var arr = [
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/rnc.jpg",
    "https://cs.csub.edu/~caleman/SenSem/Testing/img/sci2-sci1.jpg"
];

//var img = new Image();
//var div = document.getElementById('x');

var ServerInformation = {
    // POIDATA_SERVER: "https://www.cs.csub.edu/~rortiz/test/convertedData.json",
    // POIDATA_SERVER: "https://bigpapaburt.com/data/" ,
    //POIDATA_SERVER: "https://example.wikitude.com/GetSamplePois/",

    // C.A. 10/23/2019
    POIDATA_SERVER: "https://cs.csub.edu/~caleman/SenSem/testdata",
    POIDATA_SERVER_ARG_LAT: "lat",
    POIDATA_SERVER_ARG_LON: "lon",
    POIDATA_SERVER_ARG_NR_POIS: "nrPois"
};

//public LocationAssert hasAltitude(double altitude) {
// isNotNull();
// double actualAltitude = actual.getAltitude();
// assertThat(actualAltitude) //
//   .overridingErrorMessage("Expected altitude <%s> but was <%s>.", altitude, actualAltitude) //
//   .isEqualTo(altitude);
// return this;
//}

/* Implementation of AR-Experience (aka "World"). */
var World = {


    /*
        User's latest known location, accessible via userLocation.latitude, userLocation.longitude,
         userLocation.altitude.
     */
    userLocation: null,

    /* You may request new data from server periodically, however: in this sample data is only requested once. */
    isRequestingData: false,

    /* True once data was fetched. */
    initiallyLoadedData: false,

    /* Different POI-Marker assets. */
    markerDrawableIdle: null,
    markerDrawableSelected: null,
    markerDrawableDirectionIndicator: null,

    /* List of AR.GeoObjects that are currently shown in the scene / World. */
    markerList: [],

    /* the last selected marker. */
    currentMarker: null,

    locationUpdateCounter: 0,
    updatePlacemarkDistancesEveryXLocationUpdates: 10,

    /* Called to inject new POI data. */
    loadPoisFromJsonData: function loadPoisFromJsonDataFn(poiData) {

        /* Destroys all existing AR-Objects (markers & radar). */
        AR.context.destroyAll();

        /* Show radar & set click-listener. */
        //PoiRadar.show();
        $('#radarContainer').unbind('click');
        $("#radarContainer").click(PoiRadar.clickedRadar);

        /* Empty list of visible markers. */
        World.markerList = [];

        /* Start loading marker assets. */
        World.markerDrawableIdle = new AR.ImageResource("assets/marker_idle.png", {
            onError: World.onError
        });
        World.markerDrawableSelected = new AR.ImageResource("assets/marker_selected.png", {
            onError: World.onError
        });
        World.markerDrawableDirectionIndicator = new AR.ImageResource("assets/indi.png", {
            onError: World.onError
        });

        /* Loop through POI-information and create an AR.GeoObject (=Marker) per POI. */
        for (var currentPlaceNr = 0; currentPlaceNr < poiData.length; currentPlaceNr++) {
            var singlePoi = {
                "id": poiData[currentPlaceNr].id,
                "latitude": parseFloat(poiData[currentPlaceNr].latitude),
                "longitude": parseFloat(poiData[currentPlaceNr].longitude),
                //"altitude": (World.userLocation.altitude + 15), //parseFloat(poiData[currentPlaceNr].altitude),
                "altitude": 95, //parseFloat(poiData[currentPlaceNr].altitude),
                "title": poiData[currentPlaceNr].name,
                "description": poiData[currentPlaceNr].description
            };

            World.markerList.push(new Marker(singlePoi));
        }

        /* Updates distance information of all placemarks. */
        World.updateDistanceToUserValues();

        World.updateStatusMessage(currentPlaceNr + ' places loaded');

        /* Set distance slider to 100%. */
        $("#panel-distance-range").val(50);
        $("#panel-distance-range").slider("refresh");
    },

    /*
        Sets/updates distances of all makers so they are available way faster than calling (time-consuming)
        distanceToUser() method all the time.
     */
    updateDistanceToUserValues: function updateDistanceToUserValuesFn() {
        for (var i = 0; i < World.markerList.length; i++) {
            World.markerList[i].distanceToUser = World.markerList[i].markerObject.locations[0].distanceToUser();
        }
    },

    /* Updates status message shown in small "i"-button aligned bottom center. */
    updateStatusMessage: function updateStatusMessageFn(message, isWarning) {

        var themeToUse = isWarning ? "e" : "c";
        var iconToUse = isWarning ? "alert" : "info";

        $("#status-message").html(message);
        $("#popupInfoButton").buttonMarkup({
            theme: themeToUse,
            icon: iconToUse
        });
    },

    /* Location updates, fired every time you call architectView.setLocation() in native environment. */
    locationChanged: function locationChangedFn(lat, lon, alt, acc) {

        /* Store user's current location in World.userLocation, so you always know where user is. */
        World.userLocation = {
            'latitude': lat,
            'longitude': lon,
            'altitude': alt,
            'accuracy': acc
        };


        /* Request data if not already present. */
        if (!World.initiallyLoadedData) {
            World.requestDataFromServer(lat, lon);
            World.initiallyLoadedData = true;
        } else if (World.locationUpdateCounter === 0) {
            /*
                Update placemark distance information frequently, you max also update distances only every 10m with
                some more effort.
             */
            World.updateDistanceToUserValues();
        }

        /* Helper used to update placemark information every now and then (e.g. every 10 location upadtes fired). */
        World.locationUpdateCounter =
            (++World.locationUpdateCounter % World.updatePlacemarkDistancesEveryXLocationUpdates);
    },

    /*
        POIs usually have a name and sometimes a quite long description.
        Depending on your content type you may e.g. display a marker with its name and cropped description but
        allow the user to get more information after selecting it.
    */

    /* Fired when user pressed maker in cam. */
    onMarkerSelected: function onMarkerSelectedFn(marker) {
        World.currentMarker = marker;

        /* Update panel values. */
        $("#poi-detail-title").html(marker.poiData.title);
        $("#poi-detail-description").html(marker.poiData.description);


        var concat = marker.poiData.id;
        $("#details").html(buildingInfo[concat]);

        alert(concat);
        var iterator = World.markerList.values();
        for (let elements of iterator) {
            console.log(elements);
        }


        var img = new Image();
        var div = document.getElementById('x');
        img.onload = function() {
            //div.innerHTML = '<a href="https://cs.csub.edu/~caleman/SenSem/Testing/img/sci3.jpg"> <img src="'+img.src+'" /> </a>';
            div.innerHTML = '<a href="'+arr[concat]+'"> <img src="'+img.src+'" /> Click Here for first floor rooms</a>';
        };
        img.src = arr[concat];
        //img.src = arr[0];



        /*
            It's ok for AR.Location subclass objects to return a distance of `undefined`. In case such a distance
            was calculated when all distances were queried in `updateDistanceToUserValues`, we recalculate this
            specific distance before we update the UI.
         */
        if (undefined === marker.distanceToUser) {
            marker.distanceToUser = marker.markerObject.locations[0].distanceToUser();
        }

        /*
            Distance and altitude are measured in meters by the SDK. You may convert them to miles / feet if
            required.
        */
        var distanceToUserValue = (marker.distanceToUser > 999) ?
            ((marker.distanceToUser / 1000).toFixed(2) + " km") :
            (Math.round(marker.distanceToUser) + " m");
        var altitudeYE = World.userLocation.altitude.toFixed(2) + "m";

        $("#poi-detail-altitude").html(altitudeYE)
        $("#poi-detail-distance").html(distanceToUserValue);

        /* Show panel. */
        $("#panel-poidetail").panel("open", 100);

        $(".ui-panel-dismiss").unbind("mousedown");

        /* Deselect AR-marker when user exits detail screen div. */
        $("#panel-poidetail").on("panelbeforeclose", function(event, ui) {
            World.currentMarker.setDeselected(World.currentMarker);
        });
    },

    /* Screen was clicked but no geo-object was hit. */
    onScreenClick: function onScreenClickFn() {
        /* You may handle clicks on empty AR space too. */
    },

    /* Returns distance in meters of placemark with maxdistance * 1.1. */
    getMaxDistance: function getMaxDistanceFn() {

        /* Sort places by distance so the first entry is the one with the maximum distance. */
        World.markerList.sort(World.sortByDistanceSortingDescending);

        /* Use distanceToUser to get max-distance. */
        var maxDistanceMeters = World.markerList[0].distanceToUser;

        /*
            Return maximum distance times some factor >1.0 so there is some room left and small movements of user
            don't cause places far away to disappear.
         */
        return maxDistanceMeters * 1.1;
    },

    /* Updates values show in "range panel". */
    updateRangeValues: function updateRangeValuesFn() {

        /* Get current slider value (0..100);. */
        var slider_value = $("#panel-distance-range").val();
        /* Max range relative to the maximum distance of all visible places. */
        var maxRangeMeters = Math.round(World.getMaxDistance() * (slider_value / 100));

        /* Range in meters including metric m/km. */
        var maxRangeValue = (maxRangeMeters > 999) ?
            ((maxRangeMeters / 1000).toFixed(2) + " km") :
            (Math.round(maxRangeMeters) + " m");

        /* Number of places within max-range. */
        var placesInRange = World.getNumberOfVisiblePlacesInRange(maxRangeMeters);

        /* Update UI labels accordingly. */
        $("#panel-distance-value").html(maxRangeValue);
        $("#panel-distance-places").html((placesInRange != 1) ?
            (placesInRange + " Places") : (placesInRange + " Place"));

        World.updateStatusMessage((placesInRange != 1) ?
            (placesInRange + " places loaded") : (placesInRange + " place loaded"));

        /* Update culling distance, so only places within given range are rendered. */
        AR.context.scene.cullingDistance = Math.max(maxRangeMeters, 1);

        /* Update radar's maxDistance so radius of radar is updated too. */
        PoiRadar.setMaxDistance(Math.max(maxRangeMeters, 1));
    },

    /* Returns number of places with same or lower distance than given range. */
    getNumberOfVisiblePlacesInRange: function getNumberOfVisiblePlacesInRangeFn(maxRangeMeters) {

        /* Sort markers by distance. */
        World.markerList.sort(World.sortByDistanceSorting);

        /* Loop through list and stop once a placemark is out of range ( -> very basic implementation ). */
        for (var i = 0; i < World.markerList.length; i++) {
            if (World.markerList[i].distanceToUser > maxRangeMeters) {
                return i;
            }
        }

        /* In case no placemark is out of range -> all are visible. */
        return World.markerList.length;
    },

    handlePanelMovements: function handlePanelMovementsFn() {

        $("#panel-distance").on("panelclose", function(event, ui) {
            $("#radarContainer").addClass("radarContainer_left");
            $("#radarContainer").removeClass("radarContainer_right");
            PoiRadar.updatePosition();
        });

        $("#panel-distance").on("panelopen", function(event, ui) {
            $("#radarContainer").removeClass("radarContainer_left");
            $("#radarContainer").addClass("radarContainer_right");
            PoiRadar.updatePosition();
        });
    },

    /* Display range slider. */
    showRange: function showRangeFn() {
        if (World.markerList.length > 0) {

            /* Update labels on every range movement. */
            $('#panel-distance-range').change(function() {
                World.updateRangeValues();
            });

            World.updateRangeValues();
            World.handlePanelMovements();

            /* Open panel. */
            $("#panel-distance").trigger("updatelayout");
            $("#panel-distance").panel("open", 123);
        } else {

            /* No places are visible, because the are not loaded yet. */
            World.updateStatusMessage('No places available yet', true);
        }
    },

    /*
        You may need to reload POI information because of user movements or manually for various reasons.
        In this example POIs are reloaded when user presses the refresh button.
        The button is defined in index.html and calls World.reloadPlaces() on click.
    */

    /* Reload places from content source. */
    reloadPlaces: function reloadPlacesFn() {
        if (!World.isRequestingData) {
            if (World.userLocation) {
                World.requestDataFromServer(World.userLocation.latitude, World.userLocation.longitude);
            } else {
                World.updateStatusMessage('Unknown user-location.', true);
            }
        } else {
            World.updateStatusMessage('Already requesing places...', true);
        }
    },

    /* Request POI data. */
    requestDataFromServer: function requestDataFromServerFn(lat, lon) {

        /* Set helper var to avoid requesting places while loading. */
        World.isRequestingData = true;
        World.updateStatusMessage('Requesting places from web-service');

        /* Server-url to JSON content provider. */
        var serverUrl = ServerInformation.POIDATA_SERVER + "?" + ServerInformation.POIDATA_SERVER_ARG_LAT + "=" +
            lat + "&" + ServerInformation.POIDATA_SERVER_ARG_LON + "=" +
            lon + "&" + ServerInformation.POIDATA_SERVER_ARG_NR_POIS + "=20";

        var jqxhr = $.getJSON(serverUrl, function(data) {
                World.loadPoisFromJsonData(data);
            })
            .error(function(err) {
                World.updateStatusMessage("Invalid web-service response.", true);
                World.isRequestingData = false;
            })
            .complete(function() {
                World.isRequestingData = false;
            });
    },

    /* Helper to sort places by distance. */
    sortByDistanceSorting: function sortByDistanceSortingFn(a, b) {
        return a.distanceToUser - b.distanceToUser;
    },

    /* Helper to sort places by distance, descending. */
    sortByDistanceSortingDescending: function sortByDistanceSortingDescendingFn(a, b) {
        return b.distanceToUser - a.distanceToUser;
    },

    onError: function onErrorFn(error) {
        alert(error);
    }
};

// -- Search Function -- //
var names = ["austin", "andrew", "cesar", "rodrigo"];
function search(){
  var searchedName = document.getElementById("search_input").value;
  /* Uncomment this and Comment the other section to verify actual
  var searchIndex = names.indexOf(searchedName);
  if(searchIndex !== -1)
    alert("Exists");
    else
    alert("Not Exists");
*/
//  var searchIndex = World.markerList.indexOf(searchedName);
//  if(searchIndex !== -1)
//    alert("Exists");
//  else
//    alert("Not Exists");
    for (var i = 0; i < World.markerList.length; i++){
      if (World.markerList[i].title == searchedName)
      //poiData[i].name
        alert("Exists");
      else
        // Show all the locations, debug purposes
        document.write('<h3>'+World.markerList[i].title+'</h3>');
         //alert("Not Exists");
    }
}
// -- //

/* Forward locationChanges to custom function. */
AR.context.onLocationChanged = World.locationChanged;

/* Forward clicks in empty area to World. */
AR.context.onScreenClick = World.onScreenClick;