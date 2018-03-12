mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXNoZWs3NW0iLCJhIjoiY2pkeWlyZXc2MTY2YzJ6czZncXpodHRheiJ9.Mmzc78mQw-K27O8h8vHWmA';

var chapters = {

    'part-1': {
        center: [82.8, 23.88],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [77.16279,28.72583],
        zoom: 12.5,
        bearing: 40.00,
        pitch: 60.00,
    },
    'part-3': {
        center: [77.1024,28.9455],
        zoom: 12.5,
        bearing: 40.00,
        pitch: 60.00,
    }      
    
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/abhishek75m/cjdyirj3w8y4v2smosrcgttcd',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}