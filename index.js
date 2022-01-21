// Import stylesheets
import './style.css';
import {
  Map,
  TileLayer,
  LayerGroup,
  Marker,
  Icon,
  Popup,
  GeoJSON,
  Title,
} from 'leaflet';
// Write Javascript code!
const map = new Map('map');

const amapLayer = new TileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  {
    id: 'mapbox/streets-v11',
  }
);

const baiduLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={x}&TILECOL={y}&tk=1c88ae8953b926918863dc4ec1d68d55',
  {}
);

//放到一个图层组中
const combineLayer = new LayerGroup([baiduLayer, amapLayer]);

amapLayer.addTo(map);

map.setView([30.29726893943521, 120.06622904484556], 17);

const items = document.getElementsByName('base');

items.forEach((item) => {
  item.onclick = (evt) => {
    switch (evt.target.value) {
      case 'amap':
        baiduLayer.removeFrom(map);
        amapLayer.addTo(map);
        break;
      case 'baidu':
        amapLayer.removeFrom(map);
        baiduLayer.addTo(map);
        break;
    }
  };
});

//阿里svg代码用到工程内
const svg =
  '<svg t="1642728394353" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2035" width="200" height="200"><path d="M188.177493 384H428.390827L349.62816 69.162667A21.333333 21.333333 0 0 1 370.36416 42.666667h130.133333a21.333333 21.333333 0 0 1 19.072 11.776L684.390827 384h234.666666a106.666667 106.666667 0 0 1 0 213.333333H190.01216L93.88416 677.717333a21.333333 21.333333 0 0 1-13.653333 4.949334H21.350827a21.333333 21.333333 0 0 1-20.394667-27.648L52.070827 490.666667 0.998827 326.314667A21.333333 21.333333 0 0 1 21.350827 298.666667h55.936a21.333333 21.333333 0 0 1 13.610666 4.906666L188.177493 384z m331.648 543.914667a21.333333 21.333333 0 0 1-18.517333 10.752H371.302827a21.333333 21.333333 0 0 1-20.48-27.178667L428.305493 640h256l-164.522666 287.914667z" fill="#1296db" p-id="2036"></path></svg>';

const svg2 =
  '<svg t="1642728425057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2834" width="200" height="200"><path d="M493.261217 958.708971c-185.996135 0-337.307306-98.152461-337.307306-218.794121s151.311171-218.793098 337.307306-218.793099 337.307306 98.152461 337.307306 218.794122-151.311171 218.793098-337.307306 218.793098z m0-401.121703c-165.875888 0-300.841789 81.789795-300.841789 182.327582s134.965901 182.327582 300.841789 182.327582 300.841789-81.789795 300.841789-182.327582-134.965901-182.327582-300.841789-182.327582z" fill="#885F44" p-id="2835"></path><path d="M486.634286 721.685673V83.537602L760.12617 247.632937l-255.258614 91.164302" fill="#E5CA03" p-id="2836"></path><path d="M486.637356 739.915873c-10.077519 0-18.23327-8.163937-18.23327-18.23327V83.534532a18.21485 18.21485 0 0 1 9.241478-15.864316 18.174941 18.174941 0 0 1 18.37551 0.231267L769.512958 231.996818c6.036483 3.623527 9.454326 10.416234 8.760525 17.432021s-5.377474 12.998035-12.018732 15.375176l-255.259638 91.164302a18.184151 18.184151 0 0 1-6.125511 1.068332v364.646978c0.001023 10.06831-8.153704 18.232247-18.232246 18.232246z m18.23327-624.179942v203.694215l212.81085-76.002998L504.870626 115.735931z" fill="#885F44" p-id="2837"></path></svg>';
// const marker = new Marker([30.29726893943521, 120.06622904484556], {
//   icon: new Icon({
//     //原始直接引用网页图片地址
//     // iconUrl:
//     //   'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
//     iconSize: [40, 60],
//     iconAnchor: [20, 40],
//     popupAnchor: [30.29726893943521, 120.06622904484556],
//     tooltipAnchor: [30.29726893943521, 120.06622904484556],
//   }),
//   opacity: 0.8, //透明度
//   draggable: true, //图标是否可以拖拽
//   autoPan: true,
//   // title: new Title({
//   //   '数智交院',
//   // }),
// });
// marker.bindPopup(popupContent).openPopup();

// const popup = new Popup({
//   maxWidth: 300,
//   maxHeight: 500,
// });

// marker.addTo(map); //这句别忘记

//杭州数据
const data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        NAME: '数智交院',
      },
      geometry: {
        type: 'Point',
        coordinates: [120.06611466407774, 30.29731431527723],
      },
    },
    {
      type: 'Feature',
      properties: {
        NAME: '湖滨银泰',
      },
      geometry: {
        type: 'Point',
        coordinates: [120.15774965286255, 30.25558271403543],
      },
    },
    {
      type: 'Feature',
      properties: {
        NAME: '萧山机场',
      },
      geometry: {
        type: 'Point',
        coordinates: [120.43058395385741, 30.236675352276695],
      },
    },
  ],
};

//宁波数据
const data2 = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        NAME: '庄桥机场',
        TYPE: '机场',
      },
      geometry: {
        type: 'Point',
        coordinates: [121.57333374023438, 29.920720633295886],
      },
    },
    {
      type: 'Feature',
      properties: {
        NAME: '栎社机场',
        TYPE: '机场',
      },
      geometry: {
        type: 'Point',
        coordinates: [121.46347045898438, 29.825752664242177],
      },
    },
    {
      type: 'Feature',
      properties: {
        NAME: '文化广场',
        TYPE: '广场',
      },
      geometry: {
        type: 'Point',
        coordinates: [121.6124939918518, 29.860055014492072],
      },
    },
  ],
};

const glayer1 = new GeoJSON(data, {
  pointToLayer: (geoJsonPoint, lating) => {
    return new Marker(lating, {
      icon: new Icon({
        //原始直接引用网页图片地址
        // iconUrl:
        //   'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
        iconSize: [40, 60],
        iconAnchor: [20, 40],
      }),
    });
  },
});

glayer1.addTo(map);

//事件监听
const check1 = document.getElementById('check1');
check1.onchange = (evt) => {
  if (evt.target.checked) {
    glayer1.addTo(map);
  } else {
    glayer1.removeFrom(map);
  }
};

const glayer2 = new GeoJSON(data2, {
  pointToLayer: (geoJsonPoint, lating) => {
    //leaflet-06
    switch (geoJsonPoint.properties['TYPE']) {
      case '机场':
        return new Marker(lating, {
          icon: new Icon({
            //原始直接引用网页图片地址
            // iconUrl:
            //   'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
            iconSize: [40, 60],
            iconAnchor: [20, 40],
          }),
        });
      case '广场':
        return new Marker(lating, {
          icon: new Icon({
            //原始直接引用网页图片地址
            // iconUrl:
            //   'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg2),
            iconSize: [40, 60],
            iconAnchor: [20, 40],
          }),
        });
    }
  },
}).bindPopup((item) => {
  //tooltip提示框方法加上鼠标悬浮之后名称显示，用.bindTooltip((item) =>
  return item.feature.properties['NAME'];
});

glayer2.addTo(map);

const check2 = document.getElementById('check2');
check2.onchange = (evt) => {
  if (evt.target.checked) {
    glayer2.addTo(map);
  } else {
    glayer2.removeFrom(map);
  }
};
