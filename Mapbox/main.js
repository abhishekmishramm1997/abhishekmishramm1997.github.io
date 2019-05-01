mapboxgl.accessToken = 'pk.eyJ1IjoicnByYW5hdjIyIiwiYSI6ImNqZHlpcm0ycTBnYzgyd29lenMxMzd6ZjUifQ.7crSQksVFf_ruNMcSlCIeQ';

var chapters = {
    'part-1': {
        center: [100, 13],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    }, 
    'part-2': {
        center: [100.547370, 13.743688],
        zoom: 15,
        bearing: 30.0,
        pitch: 30.0, 
    },
    'part-3': {
        center: [100.535450, 13.748367],
        zoom: 16.76,
        bearing: 40.00,
        pitch: 60.00,
    },
    'part-4': {
        center: [100.516030, 13.726149],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-5': {
        center: [100.540070, 13.741034],
        zoom: 15.47,
        bearing: 15.00,
        pitch: 40.00,
    },
    'part-6': {
        center: [100.535355, 13.729197],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-7': {
        center: [100.530354, 13.730021],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-8': {
        center: [100.553841, 13.740903],
        zoom: 15.40,
        bearing: -30.00,
        pitch: 29.00,
    },
    'part-9': {
        center: [100.538618, 13.722952],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-1O': {
        center: [100.644533, 13.881591],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-11': {
        center: [100.533725, 13.755882],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-12': {
        center: [101.7119496, 3.1561671],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-13': {
        center: [101.712256, 3.153664],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-14': {
        center: [101.726281, 3.156279],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-15': {
        center: [101.7136885, 3.1582845],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-16': {
        center: [101.7135209, 3.1505706],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-17': {
        center: [101.70627, 3.15421],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-18': {
        center: [101.7092483, 3.1587534],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-19': {
        center: [101.6866446, 3.135911],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-2O': {
        center: [101.7040718, 3.1586786],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-21': {
        center: [101.714952, 3.1485861],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-22': {
        center: [103.8536272, 1.2832383],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-23': {
        center: [103.904574, 1.304903],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-24': {
        center: [103.8544685, 1.3126417],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-25': {
        center: [103.8583236, 1.290779],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-26': {
        center: [103.8526317, 1.3224789],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-27': {
        center: [103.9030944, 1.3049043],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },   
    'part-28': {
        center: [103.8528189, 1.2959559],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-29': {
        center: [103.8097962, 1.2577323],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-30': {
        center: [103.8419682, 1.2891213],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-31': {
        center: [103.8189046, 1.2577913],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    }
    
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/rpranav22/cjdyirrd58yb22ro2uw7u6nby',
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