if (!LOLherojs) var LOLherojs = {
    champion: {}
};
LOLherojs.champion.Cassiopeia = {
    "data": {
        "id": "Cassiopeia",
        "key": "69",
        "name": "\u9b54\u86c7\u4e4b\u62e5",
        "title": "\u5361\u897f\u5965\u4f69\u5a05",
        "tags": ["Mage"],
        "image": {
            "full": "Cassiopeia.png",
            "sprite": "champion0.png",
            "group": "champion",
            "x": 288,
            "y": 48,
            "w": 48,
            "h": 48
        },
        "skins": [{
            "id": "69000",
            "num": 0,
            "name": "default",
            "chromas": true
        }, {
            "id": "69001",
            "num": 1,
            "name": "\u8352\u6f20\u4e4b\u54ac \u5361\u897f\u5965\u4f69\u5a05",
            "chromas": false
        }, {
            "id": "69002",
            "num": 2,
            "name": "\u6df1\u6d77\u5996\u59ec \u5361\u897f\u5965\u4f69\u5a05",
            "chromas": false
        }, {
            "id": "69003",
            "num": 3,
            "name": "\u86c7\u53d1\u5973\u5996 \u5361\u897f\u5965\u4f69\u5a05",
            "chromas": false
        }, {
            "id": "69004",
            "num": 4,
            "name": "\u78a7\u7389\u4e4b\u7259 \u5361\u897f\u5965\u4f69\u5a05",
            "chromas": false
        }, {
            "id": "69008",
            "num": 8,
            "name": "\u4e0a\u53e4\u9b54\u86c7 \u5361\u897f\u5965\u4f69\u5a05",
            "chromas": false
        }],
        "info": {
            "attack": 2,
            "defense": 3,
            "magic": 9,
            "difficulty": 10
        },
        "spells": [{
            "id": "CassiopeiaQ",
            "name": "\u761f\u6bd2\u7206\u70b8",
            "description": "\u5728\u77ed\u6682\u7684\u5ef6\u8fdf\u540e\uff0c\u5361\u897f\u5965\u4f69\u5a05\u7528\u6bd2\u7d20\u5f15\u7206\u4e00\u7247\u533a\u57df\uff0c\u5e76\u4e14\u5982\u679c\u547d\u4e2d\u4e86\u4e00\u540d\u654c\u65b9\u82f1\u96c4\uff0c\u5c31\u4f1a\u83b7\u5f97\u79fb\u52a8\u901f\u5ea6\u52a0\u6210\u3002",
            "image": {
                "full": "CassiopeiaQ.png",
                "sprite": "spell2.png",
                "group": "spell",
                "x": 288,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tooltip": "\u7528<span class=\"color32CD32\">\u761f\u6bd2<\/span>\u5f15\u7206\u4e00\u7247\u533a\u57df\u5185\u7684\u654c\u4eba\u3002\u5982\u679c\u547d\u4e2d\u4e86\u4e00\u540d\u654c\u65b9\u82f1\u96c4\uff0c\u5361\u897f\u5965\u4f69\u5a05\u4f1a\u83b7\u5f9730\/35\/40\/45\/50%\u79fb\u52a8\u901f\u5ea6\uff0c\u52a0\u901f\u6548\u679c\u4f1a\u57283\u79d2\u91cc\u6301\u7eed\u8870\u51cf\u3002<br \/><br \/><span class=\"color32CD32\">\u761f\u6bd2<\/span>\u57283\u79d2\u91cc\u6301\u7eed\u9020\u6210\u517175\/110\/145\/180\/215<scaleAP>(+0.9)<\/scaleAP>\u9b54\u6cd5\u4f24\u5bb3\u3002",
            "leveltip": {
                "label": ["\u4f24\u5bb3", "\u79fb\u52a8\u901f\u5ea6", "@AbilityResourceName@\u6d88\u8017"],
                "effect": ["75\/110\/145\/180\/215", "30\/35\/40\/45\/50%", "50\/60\/70\/80\/90"]
            },
            "resource": "50\/60\/70\/80\/90 "
        }, {
            "id": "CassiopeiaW",
            "name": "\u5267\u6bd2\u8ff7\u96fe",
            "description": "\u5361\u897f\u5965\u4f69\u5a05\u91ca\u653e\u51fa\u82e5\u5e72\u56e2\u6bd2\u4e91\uff0c\u5bf9\u7ecf\u8fc7\u6bd2\u4e91\u7684\u654c\u4eba\u9020\u6210\u51cf\u901f\u6548\u679c\u3001\u7f1a\u5730\u6548\u679c\u548c\u8f7b\u91cf\u4f24\u5bb3\u3002\u88ab\u7f1a\u5730\u7684\u654c\u4eba\u65e0\u6cd5\u4f7f\u7528\u4f4d\u79fb\u6280\u80fd\u3002",
            "image": {
                "full": "CassiopeiaW.png",
                "sprite": "spell2.png",
                "group": "spell",
                "x": 336,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tooltip": "\u5361\u897f\u5965\u4f69\u5a05\u5448\u5f27\u5ea6\u55b7\u51fa\u6bd2\u6db2\uff0c\u7559\u4e0b\u6301\u7eed5\u79d2\u7684\u6bd2\u4e91\u3002<br \/><br \/>\u5728\u6bd2\u4e91\u5185\u7684\u654c\u4eba\u4f1a\u6301\u7eed\u53d7\u5230<span class=\"color32CD32\">\u8870\u5f31\u4e4b\u6bd2<\/span>\uff0c\u548c\u4e00\u4e2a\u6301\u7eed\u8870\u51cf\u768440\/50\/60\/70\/80%\u51cf\u901f\u6548\u679c\uff0c\u5e76\u53d7\u5230\u7f1a\u5730\u6548\u679c\u800c\u7981\u6b62\u4f7f\u7528\u4f4d\u79fb\u6280\u80fd\u3002\u6bd2\u4e91\u5185\u7684\u654c\u4eba\u4e5f\u4f1a\u6bcf\u79d2\u53d7\u523020\/25\/30\/35\/40 <scaleAP>(+0.15)<\/scaleAP>\u9b54\u6cd5\u4f24\u5bb3\u3002<br \/><br \/>\u8fd9\u4e2a\u6280\u80fd\u6709\u6700\u5c0f\u65bd\u653e\u8ddd\u79bb\u3002",
            "leveltip": {
                "label": ["\u4f24\u5bb3", "\u51cf\u901f", "\u51b7\u5374\u65f6\u95f4",
                    "@AbilityResourceName@\u6d88\u8017"],
                "effect": ["20\/25\/30\/35\/40", "40\/50\/60\/70\/80%", "18\/17.5\/17\/16.5\/16",
                    "70\/80\/90\/100\/110"]
            },
            "resource": "70\/80\/90\/100\/110 "
        }, {
            "id": "CassiopeiaE",
            "name": "\u53cc\u751f\u6bd2\u7259",
            "description": "\u5361\u897f\u5965\u4f69\u5a05\u91ca\u653e\u4e00\u6b21\u653b\u51fb\uff0c\u53ef\u5bf9\u4e2d\u6bd2\u7684\u76ee\u6807\u9020\u6210\u989d\u5916\u4f24\u5bb3\u5e76\u4e14\u57fa\u4e8e\u5b9e\u9645\u4f24\u5bb3\u503c\u4e3a\u5979\u63d0\u4f9b\u6cbb\u7597\u6548\u679c\u3002\u5982\u679c\u76ee\u6807\u6b7b\u4e8e\u8fd9\u6b21\u653b\u51fb\uff0c\u5361\u897f\u5965\u4f69\u5a05\u4f1a\u56de\u590d\u6cd5\u529b\u503c\u3002",
            "image": {
                "full": "CassiopeiaE.png",
                "sprite": "spell2.png",
                "group": "spell",
                "x": 384,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tooltip": "\u5bf9\u76ee\u6807\u9020\u6210<scaleLevel>0.55<\/scaleLevel> <scaleAP>(+0.1)<\/scaleAP>\u9b54\u6cd5\u4f24\u5bb3\u3002\u5982\u679c\u76ee\u6807\u88ab\u3010E\u53cc\u751f\u6bd2\u7259\u3011\u6240\u6740\uff0c\u6216\u5728\u6b64\u6280\u80fd\u5f39\u9053\u7684\u98de\u884c\u671f\u95f4\u9635\u4ea1\uff0c\u5361\u897f\u5965\u4f69\u5a05\u83b7\u5f9740\/45\/50\/55\/60\u6cd5\u529b\u503c\u3002<br \/><br \/>\u5982\u679c\u3010E\u53cc\u751f\u6bd2\u7259\u3011\u547d\u4e2d\u4e86<span class=\"color32CD32\">\u4e2d\u6bd2\u7684<\/span>\u76ee\u6807\uff0c\u90a3\u4e48\u5b83\u4f1a\u9020\u621010\/30\/50\/70\/90 <scaleAP>(+0.6)<\/scaleAP>\u989d\u5916\u9b54\u6cd5\u4f24\u5bb3\u5e76\u4e3a\u5361\u897f\u5965\u4f69\u5a05\u6cbb\u7597<scaleLevel><\/scaleLevel> <scaleAP>(+)<\/scaleAP>\u751f\u547d\u503c\u3002",
            "leveltip": {
                "label": ["\u989d\u5916\u6bd2\u6027\u4f24\u5bb3", "@AbilityResourceName@\u6d88\u8017"],
                "effect": ["10\/30\/50\/70\/90", "40\/45\/50\/55\/60"]
            },
            "resource": "40\/45\/50\/55\/60 "
        }, {
            "id": "CassiopeiaR",
            "name": "\u77f3\u5316\u51dd\u89c6",
            "description": "\u5361\u897f\u5965\u4f69\u5a05\u4ece\u773c\u4e2d\u653e\u51fa\u4e00\u56e2\u9b54\u6cd5\u80fd\u91cf\uff0c\u5bf9\u5979\u524d\u65b9\u7684\u4efb\u4f55\u9762\u5bf9\u5979\u7684\u654c\u4eba\u9020\u6210\u6655\u7729\u6548\u679c\u5e76\u5bf9\u5176\u5b83\u80cc\u5bf9\u5979\u7684\u654c\u4eba\u9020\u6210\u51cf\u901f\u6548\u679c\u3002",
            "image": {
                "full": "CassiopeiaR.png",
                "sprite": "spell2.png",
                "group": "spell",
                "x": 432,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tooltip": "\u5361\u897f\u5965\u4f69\u5a05\u5bf9\u9762\u524d\u7684\u6240\u6709\u654c\u4eba\u9020\u6210150\/250\/350 <scaleAP>(+0.5)<\/scaleAP>\u9b54\u6cd5\u4f24\u5bb3\u3002\u9762\u5bf9\u5979\u7684\u654c\u4eba\u4f1a\u56e0\u77f3\u5316\u800c\u88ab\u6655\u77292\u79d2\uff0c\u800c\u80cc\u671d\u5979\u7684\u654c\u4eba\u4f1a\u88ab\u51cf\u901f40%\u3002",
            "leveltip": {
                "label": ["\u4f24\u5bb3", "\u51b7\u5374\u65f6\u95f4"],
                "effect": ["150\/250\/350", "120\/100\/80"]
            },
            "resource": "100 "
        }],
        "passive": {
            "name": "\u4f18\u96c5\u86c7\u884c",
            "description": "\u5361\u897f\u5965\u4f69\u5a05\u968f\u7b49\u7ea7\u83b7\u5f97\u79fb\u52a8\u901f\u5ea6\uff0c\u4f46\u5979\u65e0\u6cd5\u8d2d\u4e70\u978b\u5b50\u7c7b\u88c5\u5907\u3002",
            "image": {
                "full": "Cassiopeia_Passive.png",
                "sprite": "passive0.png",
                "group": "passive",
                "x": 288,
                "y": 48,
                "w": 48,
                "h": 48
            }
        },
        "lore": "\u5361\u897f\u5965\u4f69\u5a05\u662f\u4e2a\u593a\u547d\u7684\u751f\u7269\uff0c\u51b3\u5fc3\u8981\u64cd\u7eb5\u5176\u4ed6\u4eba\u5c48\u670d\u4e8e\u81ea\u5df1\u7684\u9634\u9669\u610f\u5fd7\u4e4b\u4e0b\u3002\u8eab\u4e3a\u8bfa\u514b\u8428\u65af\u8d35\u65cf\u675c\u00b7\u514b\u5361\u5965\u5bb6\u65cf\u7684\u6700\u5e74\u8f7b\u3001\u6700\u6f02\u4eae\u7684\u5973\u513f\uff0c\u5979\u5192\u9669\u6df1\u5165\u6055\u745e\u739b\u53e4\u4ee3\u5893\u7a74\u627e\u5bfb\u8fdc\u53e4\u7684\u529b\u91cf\u3002\u5728\u5893\u7a74\u4e2d\uff0c\u5979\u88ab\u6050\u6016\u7684\u5893\u7a74\u5b88\u536b\u54ac\u4e2d\uff0c\u5728\u6bd2\u6db2\u7684\u4f5c\u7528\u4e0b\u53d8\u6210\u4e86\u6bd2\u86c7\u5916\u5f62\u7684\u63a0\u98df\u8005\u3002\u72e1\u733e\u800c\u654f\u6377\u7684\u5361\u897f\u5965\u4f69\u5a05\u5982\u4eca\u5728\u591c\u5e55\u7684\u63a9\u62a4\u4e0b\u873f\u8712\u6ed1\u884c\uff0c\u7528\u9634\u68ee\u7684\u51dd\u89c6\u8ba9\u654c\u4eba\u77f3\u5316\u3002",
        "blurb": "\u5361\u897f\u5965\u4f69\u5a05\u662f\u4e2a\u593a\u547d\u7684\u751f\u7269\uff0c\u51b3\u5fc3\u8981\u64cd\u7eb5\u5176\u4ed6\u4eba\u5c48\u670d\u4e8e\u81ea\u5df1\u7684\u9634\u9669\u610f\u5fd7\u4e4b\u4e0b\u3002\u8eab\u4e3a\u8bfa\u514b\u8428\u65af\u8d35\u65cf\u675c\u00b7\u514b\u5361\u5965\u5bb6\u65cf\u7684\u6700\u5e74\u8f7b\u3001\u6700\u6f02\u4eae\u7684\u5973\u513f\uff0c\u5979\u5192\u9669\u6df1\u5165\u6055\u745e\u739b\u53e4\u4ee3\u5893\u7a74\u627e\u5bfb\u8fdc\u53e4\u7684\u529b\u91cf\u3002\u5728\u5893\u7a74\u4e2d\uff0c\u5979\u88ab\u6050\u6016\u7684\u5893\u7a74\u5b88\u536b\u54ac\u4e2d\uff0c\u5728\u6bd2\u6db2\u7684\u4f5c\u7528\u4e0b\u53d8\u6210\u4e86\u6bd2\u86c7\u5916\u5f62\u7684\u63a0\u98df\u8005\u3002\u72e1\u733e\u800c\u654f\u6377\u7684\u5361\u897f\u5965\u4f69\u5a05\u5982\u4eca\u5728\u591c\u5e55\u7684\u63a9\u62a4\u4e0b\u873f\u8712\u6ed1\u884c\uff0c\u7528\u9634\u68ee\u7684\u51dd\u89c6\u8ba9\u654c\u4eba\u77f3\u5316\u3002",
        "allytips": [
            "- \u5bf9\u88ab\u77f3\u5316\u51dd\u89c6\u7729\u6655\u7684\u91ce\u602a\u548c\u5355\u4f4d\u65bd\u653e\u53cc\u751f\u6bd2\u7259\uff0c\u53ef\u4ee5\u8fbe\u5230\u6700\u5927\u4f24\u5bb3\u6548\u679c\u3002",
            "- \u5728\u65bd\u653e\u761f\u6bd2\u7206\u70b8\u65f6\u8981\u6ce8\u610f\u9884\u6d4b\u654c\u4eba\u7684\u8d70\u4f4d\uff0c\u8fd9\u6837\u624d\u4e0d\u4f1a\u653e\u7a7a\u3002"
            ],
        "enemytips": [
            "- \u5f53\u4f60\u5df2\u7ecf\u4e2d\u4e86\u5361\u897f\u5965\u4f69\u5a05\u7684\u6bd2\u65f6\uff0c\u8981\u5c0f\u5fc3\u5979\u7684\u53cc\u751f\u6bd2\u7259\u3002",
            "- \u5f53\u5979\u65bd\u653e\u77f3\u5316\u51dd\u89c6\u65f6\uff0c\u4f60\u8981\u80cc\u5bf9\u5979\uff0c\u8fd9\u6837\u53ea\u4f1a\u88ab\u51cf\u901f\u800c\u4e0d\u4f1a\u88ab\u6655\u7729\u3002"
            ],
        "blocks": [{
            "map": "12",
            "mode": "ARAM",
            "recommended": [{
                "type": "starting",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3073",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "1027",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "2003",
                    "count": 4,
                    "hideCount": false
                }]
            }, {
                "type": "essential",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3007",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3029",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3089",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "offensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3135",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3151",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3907",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "defensive",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3116",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3157",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3165",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "consumables",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "2003",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "2139",
                    "count": 1,
                    "hideCount": false
                }]
            }]
        }, {
            "map": "1",
            "mode": "CLASSIC",
            "recommended": [{
                "type": "starting",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "1056",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "2003",
                    "count": 2,
                    "hideCount": false
                }, {
                    "id": "3340",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "early",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3070",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3073",
                    "count": 1,
                    "hidecount": false
                }, {
                    "id": "3802",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "1026",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "essential",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3116",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3003",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3007",
                    "count": 1,
                    "hidecount": false
                }, {
                    "id": "3151",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "standard",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3135",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3907",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3089",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "situational",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "3157",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3165",
                    "count": 1,
                    "hideCount": false
                }, {
                    "id": "3102",
                    "count": 1,
                    "hideCount": false
                }]
            }, {
                "type": "consumables",
                "recMath": false,
                "recSteps": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "appendAfterSection": "",
                "visibleWithAllOf": [""],
                "hiddenWithAnyOf": [""],
                "items": [{
                    "id": "2003",
                    "count": 1,
                    "hideCount": true
                }, {
                    "id": "2139",
                    "count": 1,
                    "hideCount": true
                }]
            }]
        }]
    },
    "version": "9.8.1",
    "updated": "2019-04-18"
};