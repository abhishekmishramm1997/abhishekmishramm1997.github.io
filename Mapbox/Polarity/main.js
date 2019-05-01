mapboxgl.accessToken = 'pk.eyJ1IjoicnByYW5hdjIyIiwiYSI6ImNqZHlpcm0ycTBnYzgyd29lenMxMzd6ZjUifQ.7crSQksVFf_ruNMcSlCIeQ';

var chapters = {
    'part-1': {
        center: [100, 13],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    }, 
    'part-2': {
        center: [100.516022, 13.7261452],
        zoom: 15,
        bearing: 30.0,
        pitch: 30.0, 
    },
    'part-3': {
        center: [100.5402006, 13.7409209],
        zoom: 16.76,
        bearing: 40.00,
        pitch: 60.00,
    },
    'part-4': {
        center: [100.5584981, 13.7419386],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-5': {
        center: [100.5302398, 13.7300836],
        zoom: 15.47,
        bearing: 15.00,
        pitch: 40.00,
    },
    'part-6': {
        center: [100.5370145, 13.7524077],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-7': {
        center: [100.572561, 13.7315335],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-8': {
        center: [100.5538514, 13.7412418],
        zoom: 15.40,
        bearing: -30.00,
        pitch: 29.00,
    },
    'part-9': {
        center: [100.5247838, 13.7259272],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-1O': {
        center: [100.551914, 13.739691],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-11': {
        center: [100.5471177, 13.743844],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-12': {
        center: [101.726281, 3.156279],
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
        center: [101.6866446, 3.135911],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-16': {
        center: [101.7082899, 3.1523205],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-17': {
        center: [101.714952, 3.1485861],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-18': {
        center: [101.713522, 3.150571],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-19': {
        center: [101.70627, 3.15421],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-2O': {
        center: [101.7055695, 3.1431698],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-21': {
        center: [101.7101226, 3.1536431],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-22': {
        center: [103.8526317, 1.3224789],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-23': {
        center: [103.8536272, 1.2832383],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-24': {
        center: [103.9030944, 1.3049043],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-25': {
        center: [103.904574, 1.304903],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-26': {
        center: [103.8051154, 1.287418],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-27': {
        center: [103.8238542, 1.2662198],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },   
    'part-28': {
        center: [103.8583236, 1.290779],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-29': {
        center: [103.8189046, 1.2577913],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-30': {
        center: [103.8528189, 1.2959559],
        zoom: 15.95,
        bearing: 30.00,
        pitch: 60.00,
    },
    'part-31': {
        center: [103.8097962, 1.2577323],
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