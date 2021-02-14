
window.onload = () => {
    // const button = document.querySelector('button[data-action="change"]');
    // button.innerText = '﹖';

    console.log("TESTT ETSTETSE")
    console.log(models)

    // let places = staticLoadPlaces();
    // renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                // decomment the following and add coordinates:
                // lat: <your-latitude>,
                // lng: <your-longitude>,
            },
        },
    ];
}

var models = [
    {
        url: 'https://cdn.glitch.com/66cc1dd3-0219-4ba9-aa32-7577fafb303d%2Fmech_drone.glb?v=1613252486218',
        scale: '0.5 0.5 0.5',
        info: 'Magnemite, Lv. 5, HP 10/10',
        rotation: '0 180 0',
    },
    {
        url: 'https://cdn.glitch.com/66cc1dd3-0219-4ba9-aa32-7577fafb303d%2FUFO_Empty.glb?v=1613252105747',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Articuno, Lv. 80, HP 100/100',
    },
    {
        url: 'https://cdn.glitch.com/66cc1dd3-0219-4ba9-aa32-7577fafb303d%2Fpolice.glb?v=1613251204856',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        info: 'Dragonite, Lv. 99, HP 150/150',
    },
    {
        url: 'https://cdn.glitch.com/66cc1dd3-0219-4ba9-aa32-7577fafb303d%2Fmariokart.glb?v=1613250585561',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        info: 'Mario Kart',
    }
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}
