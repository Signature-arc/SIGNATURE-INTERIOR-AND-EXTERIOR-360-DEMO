var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-",
      "name": "FRONT ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.010646699673053206,
        "pitch": -0.15241071649844962,
        "fov": 1.011473186890716
      },
      "linkHotspots": [
        {
          "yaw": -0.7047787375127097,
          "pitch": -0.0162662302708263,
          "rotation": 9.42477796076938,
          "target": "1-angle-"
        },
        {
          "yaw": -0.21520816741381665,
          "pitch": 0.07604390362440405,
          "rotation": 9.42477796076938,
          "target": "2-sitout-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-angle-",
      "name": "ANGLE ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0056018963012149925,
        "pitch": -0.07496131823640972,
        "fov": 0.788534042691457
      },
      "linkHotspots": [
        {
          "yaw": 0.39961881115782383,
          "pitch": 0.03099728899958798,
          "rotation": 9.42477796076938,
          "target": "0-front-"
        },
        {
          "yaw": 0.16946311776825596,
          "pitch": 0.08398030203621154,
          "rotation": 3.141592653589793,
          "target": "2-sitout-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sitout-",
      "name": "SITOUT ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.025534939686984615,
        "pitch": -0.006594941904115359,
        "fov": 0.657768808060821
      },
      "linkHotspots": [
        {
          "yaw": -1.4260576072521758,
          "pitch": 0.0454141416476741,
          "rotation": 9.42477796076938,
          "target": "1-angle-"
        },
        {
          "yaw": 0.9222706259112687,
          "pitch": 0.03596049933325851,
          "rotation": 3.141592653589793,
          "target": "0-front-"
        },
        {
          "yaw": 0.13243759459147597,
          "pitch": 0.030390018703862154,
          "rotation": 0,
          "target": "3-foyer-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-foyer-",
      "name": "FOYER ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.11219973762818825,
        "pitch": 0.01752114493533341,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.49584811314943344,
          "pitch": 0.1480180974683325,
          "rotation": 3.141592653589793,
          "target": "4-passege-"
        },
        {
          "yaw": -0.30995804273223726,
          "pitch": 0.028732457274706746,
          "rotation": 10.995574287564278,
          "target": "7-kitchen"
        },
        {
          "yaw": 1.2906112599898911,
          "pitch": 0.11060400924829317,
          "rotation": 3.141592653589793,
          "target": "5-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-passege-",
      "name": "PASSEGE ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.007123792865286305,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.1040260143082925,
          "pitch": 0.05272421926362725,
          "rotation": 1.5707963267948966,
          "target": "8-bedroom-1"
        },
        {
          "yaw": -0.15922712025381358,
          "pitch": 0.0522422054976559,
          "rotation": 4.71238898038469,
          "target": "10-bedroom-2-"
        },
        {
          "yaw": -1.5417213931756404,
          "pitch": 0.2236540985154427,
          "rotation": 3.141592653589793,
          "target": "6-dining-"
        },
        {
          "yaw": -2.824823624039432,
          "pitch": 0.05739046746397847,
          "rotation": 15.707963267948973,
          "target": "7-kitchen"
        },
        {
          "yaw": -1.3790640706796253,
          "pitch": -0.5765590101713034,
          "rotation": 0,
          "target": "11-first-floor-"
        },
        {
          "yaw": -1.5442542183470653,
          "pitch": 0.05896118307617115,
          "rotation": 0,
          "target": "12-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.014247585730579715,
        "pitch": 0.020024165640352365,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.881527162670844,
          "pitch": 0.03812441421548307,
          "rotation": 3.141592653589793,
          "target": "3-foyer-"
        },
        {
          "yaw": 2.5537363930836596,
          "pitch": -0.08869211571626323,
          "rotation": 4.71238898038469,
          "target": "7-kitchen"
        },
        {
          "yaw": 3.015296840986192,
          "pitch": 0.005823307340527606,
          "rotation": 3.141592653589793,
          "target": "6-dining-"
        },
        {
          "yaw": 2.6459393207938833,
          "pitch": 0.24124728922667948,
          "rotation": 3.141592653589793,
          "target": "4-passege-"
        },
        {
          "yaw": -2.439078377330045,
          "pitch": 0.02594756608118587,
          "rotation": 0,
          "target": "10-bedroom-2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-",
      "name": "DINING ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5376930133479725,
        "pitch": 0.004679607114926654,
        "fov": 1.2607341812745336
      },
      "linkHotspots": [
        {
          "yaw": -0.1214350391492065,
          "pitch": 0.10384382023855387,
          "rotation": 0,
          "target": "12-patio"
        },
        {
          "yaw": -1.655528007125822,
          "pitch": -0.028153847742277804,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -2.5754275796344768,
          "pitch": 0.03021773926186455,
          "rotation": 3.141592653589793,
          "target": "3-foyer-"
        },
        {
          "yaw": 2.98255920865787,
          "pitch": 0.09060173434841445,
          "rotation": 3.141592653589793,
          "target": "5-living"
        },
        {
          "yaw": 2.121445454289052,
          "pitch": 0.0233697553657084,
          "rotation": 7.853981633974483,
          "target": "8-bedroom-1"
        },
        {
          "yaw": -0.1625561922657468,
          "pitch": -1.0618231814442147,
          "rotation": 0,
          "target": "11-first-floor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.0049594880992849255,
        "pitch": 0.002340977433100022,
        "fov": 1.1484881807277594
      },
      "linkHotspots": [
        {
          "yaw": 2.503969730682906,
          "pitch": 0.15002411572763918,
          "rotation": 3.141592653589793,
          "target": "6-dining-"
        },
        {
          "yaw": 2.1902598225703516,
          "pitch": 0.04329548977895037,
          "rotation": 0,
          "target": "12-patio"
        },
        {
          "yaw": -2.8930592161972335,
          "pitch": -0.010748817585142234,
          "rotation": 1.5707963267948966,
          "target": "8-bedroom-1"
        },
        {
          "yaw": -2.4927265477340015,
          "pitch": 0.021076728145327905,
          "rotation": 3.141592653589793,
          "target": "5-living"
        },
        {
          "yaw": -1.8346680491297356,
          "pitch": 0.04120275057848133,
          "rotation": 3.141592653589793,
          "target": "3-foyer-"
        },
        {
          "yaw": 2.6461929622687155,
          "pitch": -0.51331122142002,
          "rotation": 0,
          "target": "11-first-floor-"
        },
        {
          "yaw": -2.911599677793312,
          "pitch": 0.16946882787621576,
          "rotation": 3.141592653589793,
          "target": "4-passege-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.37394163818525783,
        "pitch": 0.010012082820189505,
        "fov": 1.2608783943378252
      },
      "linkHotspots": [
        {
          "yaw": 0.5169750095981449,
          "pitch": 0.1820067443893123,
          "rotation": 1.5707963267948966,
          "target": "9-study-area"
        },
        {
          "yaw": -2.325188276187042,
          "pitch": 0.08186178368244512,
          "rotation": 0,
          "target": "4-passege-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-study-area",
      "name": "STUDY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.036825031405630426,
        "pitch": -0.0001755479021845474,
        "fov": 0.9898564832605449
      },
      "linkHotspots": [
        {
          "yaw": 0.35173847955134185,
          "pitch": 0.09380486379250463,
          "rotation": 3.141592653589793,
          "target": "8-bedroom-1"
        },
        {
          "yaw": 0.5109537881252422,
          "pitch": 0.016697000612946766,
          "rotation": 1.5707963267948966,
          "target": "4-passege-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-2-",
      "name": "BEDROOM 2 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0566991298139321,
        "pitch": 0.07514719640396805,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.103566468456453,
          "pitch": -0.0017357311312267143,
          "rotation": 7.853981633974483,
          "target": "4-passege-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-first-floor-",
      "name": "FIRST FLOOR ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.00785466704226323,
        "pitch": 0.014820437280873122,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.004543315234174727,
          "pitch": 0.55206432268578,
          "rotation": 3.141592653589793,
          "target": "6-dining-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-patio",
      "name": "PATIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.028490179531257098,
        "pitch": 0.037545310575691104,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.0604144171957977,
          "pitch": 0.17984026161147781,
          "rotation": 3.141592653589793,
          "target": "13-patio-2-"
        },
        {
          "yaw": 1.6891794634760675,
          "pitch": -0.05971692441235277,
          "rotation": 1.5707963267948966,
          "target": "6-dining-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-patio-2-",
      "name": "PATIO 2 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.012322350529846204,
        "pitch": 0.04703228490044964,
        "fov": 1.1484881807277594
      },
      "linkHotspots": [
        {
          "yaw": -0.11110564579190552,
          "pitch": 0.3518818691883041,
          "rotation": 3.141592653589793,
          "target": "12-patio"
        },
        {
          "yaw": 0.49574707228389947,
          "pitch": -0.06380050310583485,
          "rotation": 1.5707963267948966,
          "target": "6-dining-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SIGNATURE BUILDERS AND INTERIORS 360 DEMO .",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
