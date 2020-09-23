import {
    NextLaunchDocument,
    RecentLaunchesIdsDocument,
    SingleLaunchDocument,
    AllLaunchesIdsDocument,
    Order,
    LaunchRange,
    HistoryDocument,
    RocketsDataShortDocument,
    LaunchDetailsDocument,
    RocketDetailsDocument,
} from './index';

export const mockedResponses = [
    {
        request: {
            query: NextLaunchDocument,
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 103,
                        "mission_name": "Starlink-12 (v1.0)",
                        "launch_date_unix": 1600366740,
                        "launch_site": {
                            "site_name_long": "Kennedy Space Center Historic Launch Complex 39A"
                        },
                        "links": {
                            "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                            "article_link": null,
                            "video_link": null
                        }
                    }
                ]
            }
        },
    },
    {
        request: {
            query: RecentLaunchesIdsDocument,
            variables: {
                count: 3
            },
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 101
                    },
                    {
                        "flight_number": 100
                    },
                    {
                        "flight_number": 99
                    }
                ]
            }
        }
    },
    {
        request: {
            query: AllLaunchesIdsDocument,
            variables: {
                order: Order.Asc,
            }
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 1
                    },
                    {
                        "flight_number": 2
                    },
                    {
                        "flight_number": 3
                    },
                    {
                        "flight_number": 4
                    },
                    {
                        "flight_number": 5
                    },
                    {
                        "flight_number": 6
                    },
                    {
                        "flight_number": 7
                    },
                    {
                        "flight_number": 8
                    },
                    {
                        "flight_number": 9
                    },
                    {
                        "flight_number": 10
                    },
                    {
                        "flight_number": 11
                    },
                    {
                        "flight_number": 12
                    },
                    {
                        "flight_number": 13
                    },
                    {
                        "flight_number": 14
                    },
                    {
                        "flight_number": 15
                    },
                    {
                        "flight_number": 95
                    },
                    {
                        "flight_number": 96
                    },
                    {
                        "flight_number": 97
                    },
                    {
                        "flight_number": 98
                    },
                    {
                        "flight_number": 99
                    },
                    {
                        "flight_number": 100
                    },
                    {
                        "flight_number": 101
                    },
                    {
                        "flight_number": 102
                    },
                    {
                        "flight_number": 103
                    },
                    {
                        "flight_number": 104
                    },
                    {
                        "flight_number": 105
                    },
                    {
                        "flight_number": 106
                    },
                    {
                        "flight_number": 107
                    },
                    {
                        "flight_number": 108
                    },
                    {
                        "flight_number": 109
                    },
                    {
                        "flight_number": 110
                    },
                    {
                        "flight_number": 112
                    },
                    {
                        "flight_number": 115
                    },
                ]
            }
        }
    },
    {
        request: {
            query: AllLaunchesIdsDocument,
            variables: {
                order: Order.Desc,
            }
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 115
                    },
                    {
                        "flight_number": 112
                    },
                    {
                        "flight_number": 110
                    },
                    {
                        "flight_number": 109
                    },
                    {
                        "flight_number": 108
                    },
                    {
                        "flight_number": 107
                    },
                    {
                        "flight_number": 106
                    },
                    {
                        "flight_number": 105
                    },
                    {
                        "flight_number": 104
                    },
                    {
                        "flight_number": 103
                    },
                    {
                        "flight_number": 102
                    },
                    {
                        "flight_number": 101
                    },
                    {
                        "flight_number": 100
                    },
                    {
                        "flight_number": 99
                    },
                    {
                        "flight_number": 98
                    },
                    {
                        "flight_number": 97
                    },
                    {
                        "flight_number": 96
                    },
                    {
                        "flight_number": 95
                    },
                    {
                        "flight_number": 15
                    },
                    {
                        "flight_number": 14
                    },
                    {
                        "flight_number": 13
                    },
                    {
                        "flight_number": 12
                    },
                    {
                        "flight_number": 11
                    },
                    {
                        "flight_number": 10
                    },
                    {
                        "flight_number": 9
                    },
                    {
                        "flight_number": 8
                    },
                    {
                        "flight_number": 7
                    },
                    {
                        "flight_number": 6
                    },
                    {
                        "flight_number": 5
                    },
                    {
                        "flight_number": 4
                    },
                    {
                        "flight_number": 3
                    },
                    {
                        "flight_number": 2
                    },
                    {
                        "flight_number": 1
                    },
                ]
            }
        }
    },
    {
        request: {
            query: AllLaunchesIdsDocument,
            variables: {
                order: Order.Desc,
                range: LaunchRange.Past,
            }
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 102
                    },
                    {
                        "flight_number": 101
                    },
                    {
                        "flight_number": 100
                    },
                    {
                        "flight_number": 99
                    },
                    {
                        "flight_number": 98
                    },
                    {
                        "flight_number": 97
                    },
                    {
                        "flight_number": 96
                    },
                    {
                        "flight_number": 95
                    },
                    {
                        "flight_number": 15
                    },
                    {
                        "flight_number": 14
                    },
                    {
                        "flight_number": 13
                    },
                    {
                        "flight_number": 12
                    },
                    {
                        "flight_number": 11
                    },
                    {
                        "flight_number": 10
                    },
                    {
                        "flight_number": 9
                    },
                    {
                        "flight_number": 8
                    },
                    {
                        "flight_number": 7
                    },
                    {
                        "flight_number": 6
                    },
                    {
                        "flight_number": 5
                    },
                    {
                        "flight_number": 4
                    },
                    {
                        "flight_number": 3
                    },
                    {
                        "flight_number": 2
                    },
                    {
                        "flight_number": 1
                    },
                ]
            }
        }
    },
    {
        request: {
            query: AllLaunchesIdsDocument,
            variables: {
                order: Order.Asc,
                range: LaunchRange.Past
            }
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 1
                    },
                    {
                        "flight_number": 2
                    },
                    {
                        "flight_number": 3
                    },
                    {
                        "flight_number": 4
                    },
                    {
                        "flight_number": 5
                    },
                    {
                        "flight_number": 6
                    },
                    {
                        "flight_number": 7
                    },
                    {
                        "flight_number": 8
                    },
                    {
                        "flight_number": 9
                    },
                    {
                        "flight_number": 10
                    },
                    {
                        "flight_number": 11
                    },
                    {
                        "flight_number": 12
                    },
                    {
                        "flight_number": 13
                    },
                    {
                        "flight_number": 14
                    },
                    {
                        "flight_number": 15
                    },
                    {
                        "flight_number": 95
                    },
                    {
                        "flight_number": 96
                    },
                    {
                        "flight_number": 97
                    },
                    {
                        "flight_number": 98
                    },
                    {
                        "flight_number": 99
                    },
                    {
                        "flight_number": 100
                    },
                    {
                        "flight_number": 101
                    },
                    {
                        "flight_number": 102
                    },
                ]
            }
        }
    },
    {
        request: {
            query: AllLaunchesIdsDocument,
            variables: {
                order: Order.Asc,
                range: LaunchRange.Upcoming
            }
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 103
                    },
                    {
                        "flight_number": 104
                    },
                    {
                        "flight_number": 105
                    },
                    {
                        "flight_number": 106
                    },
                    {
                        "flight_number": 107
                    },
                    {
                        "flight_number": 108
                    },
                    {
                        "flight_number": 109
                    },
                    {
                        "flight_number": 110
                    },
                    {
                        "flight_number": 112
                    },
                    {
                        "flight_number": 115
                    },
                ]
            }
        }
    },
    {
        request: {
            query: AllLaunchesIdsDocument,
            variables: {
                order: Order.Desc,
                range: LaunchRange.Upcoming
            }
        },
        result: {
            "data": {
                "launches": [
                    {
                        "flight_number": 115
                    },
                    {
                        "flight_number": 112
                    },
                    {
                        "flight_number": 110
                    },
                    {
                        "flight_number": 109
                    },
                    {
                        "flight_number": 108
                    },
                    {
                        "flight_number": 107
                    },
                    {
                        "flight_number": 106
                    },
                    {
                        "flight_number": 105
                    },
                    {
                        "flight_number": 104
                    },
                    {
                        "flight_number": 103
                    },
                ]
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '1' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 1,
                    "mission_name": "FalconSat",
                    "launch_date_unix": 1143239400,
                    "launch_site": {
                        "site_name": "Kwajalein Atoll"
                    },
                    "launch_success": false,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
                        "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
                        "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '2' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 2,
                    "mission_name": "DemoSat",
                    "launch_date_unix": 1174439400,
                    "launch_site": {
                        "site_name": "Kwajalein Atoll"
                    },
                    "launch_success": false,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
                        "article_link": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
                        "video_link": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '3' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 3,
                    "mission_name": "Trailblazer",
                    "launch_date_unix": 1217734440,
                    "launch_site": {
                        "site_name": "Kwajalein Atoll"
                    },
                    "launch_success": false,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/3d/86/cnu0pan8_o.png",
                        "article_link": "http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary",
                        "video_link": "https://www.youtube.com/watch?v=v0w9p3U8860"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '4' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 4,
                    "mission_name": "RatSat",
                    "launch_date_unix": 1222643700,
                    "launch_site": {
                        "site_name": "Kwajalein Atoll"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png",
                        "article_link": "https://en.wikipedia.org/wiki/Ratsat",
                        "video_link": "https://www.youtube.com/watch?v=dLQ2tZEH6G0"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '5' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 5,
                    "mission_name": "RazakSat",
                    "launch_date_unix": 1247456100,
                    "launch_site": {
                        "site_name": "Kwajalein Atoll"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png",
                        "article_link": "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
                        "video_link": "https://www.youtube.com/watch?v=yTaIDooc8Og"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '6' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 6,
                    "mission_name": "Falcon 9 Test Flight",
                    "launch_date_unix": 1275677100,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png",
                        "article_link": "http://www.spacex.com/news/2013/02/12/falcon-9-flight-1",
                        "video_link": "https://www.youtube.com/watch?v=nxSxgBKlYws"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '7' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 7,
                    "mission_name": "COTS 1",
                    "launch_date_unix": 1291822980,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/d9/3e/FfrN88ry_o.png",
                        "article_link": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
                        "video_link": "https://www.youtube.com/watch?v=cdLITgWKe_0"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '8' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 8,
                    "mission_name": "COTS 2",
                    "launch_date_unix": 1335944640,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/fc/7a/r9ITwL12_o.png",
                        "article_link": "https://en.wikipedia.org/wiki/Dragon_C2%2B",
                        "video_link": "https://www.youtube.com/watch?v=tpQzDbAY7yI"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '9' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 9,
                    "mission_name": "CRS-1",
                    "launch_date_unix": 1349656500,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/0b/33/2eLGEejP_o.png",
                        "article_link": "https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html",
                        "video_link": "https://www.youtube.com/watch?v=-Vk3hiV_zXU"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '10' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 10,
                    "mission_name": "CRS-2",
                    "launch_date_unix": 1362165000,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/1b/b6/Z4oktZeR_o.png",
                        "article_link": "https://en.wikipedia.org/wiki/SpaceX_CRS-2",
                        "video_link": "https://www.youtube.com/watch?v=ik0ElKl5kW4"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '11' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 11,
                    "mission_name": "CASSIOPE",
                    "launch_date_unix": 1380470400,
                    "launch_site": {
                        "site_name": "VAFB SLC 4E"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/91/27/VhC1TTYN_o.png",
                        "article_link": "http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/",
                        "video_link": "https://www.youtube.com/watch?v=uFefasS6bhc"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '12' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 12,
                    "mission_name": "SES-8",
                    "launch_date_unix": 1386110460,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/42/b0/vP0sk3d5_o.png",
                        "article_link": "https://www.nasaspaceflight.com/2013/12/spacex-falcon-9-v1-1-milestone-ses-8-launch/",
                        "video_link": "https://www.youtube.com/watch?v=aAj5xapImEs"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '13' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 13,
                    "mission_name": "Thaicom 6",
                    "launch_date_unix": 1389031560,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/d8/6d/fnqIBEJh_o.png",
                        "article_link": "http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/",
                        "video_link": "https://www.youtube.com/watch?v=AnSNRzMEmCU"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '14' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 14,
                    "mission_name": "CRS-3",
                    "launch_date_unix": 1397849100,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png",
                        "article_link": "https://newatlas.com/crs-3-launch-spacex/31671/",
                        "video_link": "https://www.youtube.com/watch?v=Od-lON4bTyQ"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '15' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 15,
                    "mission_name": "OG-2 Mission 1",
                    "launch_date_unix": 1405350900,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/a7/b4/bcMrHMey_o.png",
                        "article_link": "https://www.orbcomm.com/en/networks/satellite/orbcomm-og2",
                        "video_link": "https://www.youtube.com/watch?v=lbHnSu-DLR4"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '95' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 95,
                    "mission_name": "Starlink 7",
                    "launch_date_unix": 1591233900,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": null,
                        "video_link": "https://youtu.be/y4xBFHjkUvw"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '96' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 96,
                    "mission_name": "Starlink-8 & SkySat 16-18",
                    "launch_date_unix": 1592040060,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": "https://spaceflightnow.com/2020/06/13/starlink-satellite-deployments-continue-with-successful-falcon-9-launch/",
                        "video_link": "https://youtu.be/8riKQXChPGg"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '97' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 97,
                    "mission_name": "GPS III SV03 (Columbus)",
                    "launch_date_unix": 1593546900,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": "https://spaceflightnow.com/2020/06/30/spacex-launches-its-first-mission-for-u-s-space-force/",
                        "video_link": "https://youtu.be/6zr0nfG3Xy4"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '98' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 98,
                    "mission_name": "ANASIS-II",
                    "launch_date_unix": 1595280600,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": "https://spaceflightnow.com/2020/07/20/spacex-delivers-south-koreas-first-military-satellite-into-on-target-orbit/",
                        "video_link": "https://youtu.be/TshvZlQ7le8"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: {
                flightNumber: '99',
            },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 99,
                    "mission_name": "Starlink-9 (v1.0) & BlackSky Global 5-6",
                    "launch_date_unix": 1596777120,
                    "launch_site": {
                        "site_name": "KSC LC 39A"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": "https://spaceflightnow.com/2020/08/07/spacex-closes-out-busy-week-with-launch-of-more-starlink-satellites",
                        "video_link": "https://youtu.be/KU6KogxG5BE"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: {
                flightNumber: '100',
            },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 100,
                    "mission_name": "Starlink-10 (v1.0) & SkySat 19-21",
                    "launch_date_unix": 1597761060,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": "https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/",
                        "video_link": "https://youtu.be/jTMJK7wb0rM"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: {
                flightNumber: '101',
            },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 101,
                    "mission_name": "SAOCOM 1B, GNOMES-1, Tyvak-0172",
                    "launch_date_unix": 1598829480,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://i.imgur.com/CFZLKzV.png",
                        "article_link": "https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/",
                        "video_link": "https://youtu.be/P-gLOsDjE3E"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: {
                flightNumber: '102',
            },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 102,
                    "mission_name": "Starlink-11 (v1.0)",
                    "launch_date_unix": 1599137160,
                    "launch_site": {
                        "site_name": "KSC LC 39A"
                    },
                    "launch_success": true,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": null,
                        "video_link": "https://youtu.be/_j4xR7LMCGY"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '103' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 103,
                    "mission_name": "Starlink-12 (v1.0)",
                    "launch_date_unix": 1598918400,
                    "launch_site": {
                        "site_name": "KSC LC 39A"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": null,
                        "video_link": "https://youtu.be/8O8Z2yPyTnc"
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '104' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 104,
                    "mission_name": "GPS III SV04",
                    "launch_date_unix": 1601510400,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '105' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 105,
                    "mission_name": "Starlink-13 (v1.0)",
                    "launch_date_unix": 1601510400,
                    "launch_site": {
                        "site_name": null
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '106' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 106,
                    "mission_name": "Starlink-14 (v1.0)",
                    "launch_date_unix": 1601510400,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '107' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 107,
                    "mission_name": "Crew-1",
                    "launch_date_unix": 1603446420,
                    "launch_site": {
                        "site_name": "KSC LC 39A"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '108' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 108,
                    "mission_name": "Sentinel-6 Michael Freilich",
                    "launch_date_unix": 1605036660,
                    "launch_site": {
                        "site_name": "VAFB SLC 4E"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '109' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 109,
                    "mission_name": "CRS-21",
                    "launch_date_unix": 1605398400,
                    "launch_site": {
                        "site_name": "KSC LC 39A"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '110' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 110,
                    "mission_name": "Turksat 5A",
                    "launch_date_unix": 1606694400,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '112' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 112,
                    "mission_name": "SXM-7",
                    "launch_date_unix": 1601510400,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: SingleLaunchDocument,
            variables: { flightNumber: '115' },
        },
        result: {
            "data": {
                "launch": {
                    "flight_number": 115,
                    "mission_name": "GPS III SV05",
                    "launch_date_unix": 1609459200,
                    "launch_site": {
                        "site_name": "CCAFS SLC 40"
                    },
                    "launch_success": null,
                    "links": {
                        "mission_patch_small": null,
                        "article_link": null,
                        "video_link": null
                    }
                }
            }
        }
    },
    {
        request: {
            query: HistoryDocument,
        },
        result: {
            "data": {
                "history": [
                    {
                        "id": 1,
                        "title": "Falcon 1 Makes History",
                        "event_date_unix": 1222643700,
                        "flight_number": 4,
                        "details": "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
                        "links": {
                            "article": "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
                            "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1"
                        }
                    },
                    {
                        "id": 2,
                        "title": "SpaceX Wins $1.6B CRS Contract",
                        "event_date_unix": 1229994000,
                        "flight_number": null,
                        "details": "NASA awards SpaceX $1.6B Commercial Resupply Services (CRS) contract.",
                        "links": {
                            "article": "https://www.nasaspaceflight.com/2008/12/spacex-and-orbital-win-huge-crs-contract-from-nasa/",
                            "wikipedia": "https://en.wikipedia.org/wiki/Commercial_Resupply_Services"
                        }
                    },
                    {
                        "id": 3,
                        "title": "Falcon 1 Flight 5 Makes History",
                        "event_date_unix": 1247456100,
                        "flight_number": 5,
                        "details": "Falcon 1 Flight 5 makes history, becoming the first privately developed liquid fuel rocket to deliver a commercial satellite to Earth orbit.",
                        "links": {
                            "article": "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
                            "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1"
                        }
                    },
                    {
                        "id": 4,
                        "title": "Falcon 9 First Flight",
                        "event_date_unix": 1275677100,
                        "flight_number": 6,
                        "details": "Met 100% of mission objectives on the first flight!",
                        "links": {
                            "article": "http://www.bbc.com/news/10209704",
                            "wikipedia": "https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit"
                        }
                    },
                    {
                        "id": 5,
                        "title": "Dragon Returns From Earth Orbit",
                        "event_date_unix": 1291822980,
                        "flight_number": 7,
                        "details": "On December 8, 2010, Dragon became the first privately developed spacecraft in history to re-enter from low-Earth orbit.",
                        "links": {
                            "article": "http://www.cnn.com/2010/US/12/08/space.flight/index.html",
                            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1"
                        }
                    },
                    {
                        "id": 6,
                        "title": "First Dragon Visit to Space Station",
                        "event_date_unix": 1349656500,
                        "flight_number": 9,
                        "details": "Dragon becomes the first private spacecraft in history to visit the space station.",
                        "links": {
                            "article": "http://thespacereview.com/article/2168/1",
                            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-1"
                        }
                    },
                    {
                        "id": 7,
                        "title": "Grasshopper Completes Half-Mile Flight",
                        "event_date_unix": 1381107600,
                        "flight_number": null,
                        "details": "The Grasshopper program finished with a 744m flight, hover, and landing.",
                        "links": {
                            "article": "http://spacenews.com/37740spacex-retires-grasshopper-new-test-rig-to-fly-in-december/",
                            "wikipedia": "https://en.wikipedia.org/wiki/Grasshopper_(rocket)"
                        }
                    },
                    {
                        "id": 8,
                        "title": "First Flight of Falcon 9 to GTO",
                        "event_date_unix": 1386110460,
                        "flight_number": 12,
                        "details": "Falcon 9 reaches Geosynchronous Transfer Orbit",
                        "links": {
                            "article": "http://www.newspacejournal.com/2013/03/27/after-dragon-spacexs-focus-returns-to-falcon/",
                            "wikipedia": "https://en.wikipedia.org/wiki/SES-8"
                        }
                    },
                    {
                        "id": 9,
                        "title": "First Stage Landing",
                        "event_date_unix": 1397849100,
                        "flight_number": 14,
                        "details": "Falcon 9 first stage successfully lands in Atlantic Ocean.",
                        "links": {
                            "article": "https://www.space.com/25562-spacex-falcon-9-reusable-rocket-test.html",
                            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-3"
                        }
                    },
                    {
                        "id": 10,
                        "title": "Falcon 9 Reusable Test Vehicle Flies 1000M",
                        "event_date_unix": 1398992400,
                        "flight_number": null,
                        "details": "Vehicle completes highest leap to date, lands safely.",
                        "links": {
                            "article": "http://www.parabolicarc.com/2014/05/02/falcon-9-reusable-vehicle-flies-1000-meters/",
                            "wikipedia": null
                        }
                    },
                    {
                        "id": 11,
                        "title": "SpaceX Awarded Commercial Crew Contract",
                        "event_date_unix": 1410829200,
                        "flight_number": null,
                        "details": "NASA awards $2.6 billion SpaceX contract to fly American astronauts.",
                        "links": {
                            "article": "https://www.washingtonpost.com/news/the-switch/wp/2014/09/16/nasa-awards-space-contract-to-boeing-and-spacex/?utm_term=.d6388390d071",
                            "wikipedia": null
                        }
                    },
                    {
                        "id": 12,
                        "title": "Drone Ship Landings",
                        "event_date_unix": 1420883220,
                        "flight_number": 19,
                        "details": "SpaceX begins series of first stage landing attempts on an autonomous spaceport drone ship.",
                        "links": {
                            "article": "https://spaceflightnow.com/2015/01/10/dragon-successfully-launched-rocket-recovery-demo-crash-lands/",
                            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-5"
                        }
                    },
                    {
                        "id": 13,
                        "title": "Pad Abort Test",
                        "event_date_unix": 1430917200,
                        "flight_number": null,
                        "details": "Crew Dragon tests launch abort system, which can provide astronauts with escape capability all the way to orbit.",
                        "links": {
                            "article": "https://spaceflightnow.com/2015/04/21/dragon-pad-abort-test-set-for-early-may/",
                            "wikipedia": "https://en.wikipedia.org/wiki/Pad_abort_test"
                        }
                    },
                    {
                        "id": 14,
                        "title": "First Land Landing",
                        "event_date_unix": 1450747740,
                        "flight_number": 25,
                        "details": "On December 21, 2015, the Falcon 9 rocket delivered 11 communications satellites to orbit, and the first stage returned and landed at Landing Zone 1 -– the first-ever orbital class rocket landing.",
                        "links": {
                            "article": "https://spaceflightnow.com/2015/12/22/round-trip-rocket-flight-gives-spacex-a-trifecta-of-successes/",
                            "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9_flight_20"
                        }
                    },
                    {
                        "id": 15,
                        "title": "Droneship Landing",
                        "event_date_unix": 1460148180,
                        "flight_number": 28,
                        "details": "On April 8, 2016, the Falcon 9 rocket launched the Dragon spacecraft to the International Space Station, and the first stage returned and landed on the Of Course I Still Love You droneship.",
                        "links": {
                            "article": "https://spaceflightnow.com/2016/04/08/spacex-lands-rocket-on-floating-platform-after-station-resupply-launch/",
                            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-8"
                        }
                    },
                    {
                        "id": 16,
                        "title": "First Reflight",
                        "event_date_unix": 1490912820,
                        "flight_number": 38,
                        "details": "On March 30, 2017, SpaceX achieved the world's first reflight of an orbital class rocket. Following delivery of the payload, the Falcon 9 first stage returned to Earth for the second time.",
                        "links": {
                            "article": "https://spaceflightnow.com/2017/03/31/spacex-flies-rocket-for-second-time-in-historic-test-of-cost-cutting-technology/",
                            "wikipedia": "https://en.wikipedia.org/wiki/SES-10"
                        }
                    },
                    {
                        "id": 17,
                        "title": "First Dragon Reflight",
                        "event_date_unix": 1496524020,
                        "flight_number": 41,
                        "details": "This Dragon resupply mission represented the first reflight of a commercial spacecraft to and from the International Space Station.",
                        "links": {
                            "article": "https://spaceflightnow.com/2017/06/03/reused-dragon-cargo-capsule-launched-on-journey-to-space-station/",
                            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-11"
                        }
                    },
                    {
                        "id": 18,
                        "title": "Falcon Heavy Test Flight",
                        "event_date_unix": 1517949900,
                        "flight_number": 55,
                        "details": "Maiden flight of Falcon Heavy, using two recovered Falcon 9 cores as side boosters (from the Thaicom 8 and CRS-9 missions), as well as a modified Block 3 booster reinforced to endure the additional load from the two side boosters. The static fire test, held on January 24, was the first time 27 engines were tested together. The launch was a success, and the side boosters landed simultaneously at adjacent ground pads. Drone ship landing of the central core failed due to TEA–TEB chemical igniter running out, preventing two of its engines from restarting; the landing failure caused damage to the nearby drone ship. Final burn to heliocentric Mars–Earth orbit was performed after the second stage and payload cruised for 6 hours through the Van Allen belts. Later, Elon Musk tweeted that the third burn was successful, and JPL's HORIZONS system showed the second stage and payload in an orbit with an aphelion of 1.67 AU. The live webcast proved immensely popular, as it became the second most watched livestream ever on YouTube, reaching over 2.3 million concurrent views.",
                        "links": {
                            "article": "https://spaceflightnow.com/2018/02/07/spacex-debuts-worlds-most-powerful-rocket-sends-tesla-toward-the-asteroid-belt/",
                            "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy_test_flight"
                        }
                    },
                    {
                        "id": 19,
                        "title": "First Block 5 Launch",
                        "event_date_unix": 1526069640,
                        "flight_number": 61,
                        "details": "The Bangabandhu Satellite-1 mission served as the first flight of Falcon 9 Block 5, the final substantial upgrade to SpaceX’s Falcon 9 launch vehicle. Falcon 9 Block 5 is designed to be capable of 10 or more flights with very limited refurbishment as SpaceX continues to strive for rapid reusability and extremely high reliability.",
                        "links": {
                            "article": "https://spaceflightnow.com/2018/05/11/spacex-debuts-an-improved-human-rated-model-of-the-falcon-9-rocket/",
                            "wikipedia": "https://en.wikipedia.org/wiki/Bangabandhu-1"
                        }
                    },
                    {
                        "id": 20,
                        "title": "First Block 5 Reflight",
                        "event_date_unix": 1533619080,
                        "flight_number": 67,
                        "details": "Indonesian comsat intended to replace the aging Telkom 1 at 108° E. First reflight of a Block 5-version booster.",
                        "links": {
                            "article": "https://spaceflightnow.com/2018/08/07/indonesian-communications-satellite-deployed-in-orbit-by-spacex/",
                            "wikipedia": "https://en.wikipedia.org/wiki/Telkom_Indonesia"
                        }
                    }
                ]
            }
        },
    },
    {
        request: {
            query: RocketsDataShortDocument,
        },
        result: {
            "data": {
                "rockets": [
                    {
                        "rocket_id": "falcon1",
                        "rocket_name": "Falcon 1",
                        "active": false,
                        "first_flight": "2006-03-24",
                        "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
                        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1"
                    },
                    {
                        "rocket_id": "falcon9",
                        "rocket_name": "Falcon 9",
                        "active": true,
                        "first_flight": "2010-06-04",
                        "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
                        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9"
                    },
                    {
                        "rocket_id": "falconheavy",
                        "rocket_name": "Falcon Heavy",
                        "active": true,
                        "first_flight": "2018-02-06",
                        "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
                        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy"
                    },
                    {
                        "rocket_id": "starship",
                        "rocket_name": "Starship",
                        "active": false,
                        "first_flight": "2021-12-01",
                        "description": "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
                        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Starship"
                    }
                ]
            }
        }
    },
    {
        request: {
            query: LaunchDetailsDocument,
            variables: {
                flightNumber: "101",
            },
        },
        result: {
            "data": {
                "launch": {
                    "mission_name": "SAOCOM 1B, GNOMES-1, Tyvak-0172",
                    "flight_number": 101,
                    "upcoming": false,
                    "launch_success": true,
                    "static_fire_date_unix": null,
                    "launch_date_unix": 1598829480,
                    "launch_site": {
                        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                    },
                    "details": "SpaceX's Falcon 9 will launch the second of the two satellite SAOCOM 1 satellites into a sun-synchronous polar orbit from SLC-40, Cape Canaveral AFS. SAOCOM 1B is a synthetic aperture radar Earth observation satellite to support disaster management. The SAOCOM spacecraft are operated by CONAE, the Argentinian National Space Activities Commission, and are built by INVAP. This mission is also expected to include rideshare payloads Sequoia, and GNOMES-1. This will be the first polar launch from the Space Coast in 60 years. The launch azimuth will be southward and the booster will land at LZ-1.",
                    "rocket": {
                        "rocket_id": "falcon9",
                        "rocket_name": "Falcon 9"
                    },
                    "links": {
                        "mission_patch_small": "https://images2.imgbox.com/e7/f6/v0zFOhZE_o.png",
                        "article_link": "https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/",
                        "wikipedia": "https://en.wikipedia.org/wiki/SAOCOM",
                        "video_link": "https://youtu.be/P-gLOsDjE3E",
                        "flickr_images": [
                            "https://live.staticflickr.com/65535/50291453997_aa715950e7_o.jpg",
                            "https://live.staticflickr.com/65535/50291306296_85b6ff12a2_o.jpg",
                            "https://live.staticflickr.com/65535/50291306061_2f9e350a85_o.jpg",
                            "https://live.staticflickr.com/65535/50291306216_4fd44c261e_o.jpg",
                            "https://live.staticflickr.com/65535/50291306346_136d3dce7b_o.jpg"
                        ]
                    }
                }
            }
        }
    },
    {
        request: {
            query: RocketDetailsDocument,
            variables: {
                rocketId: "falcon1"
            }
        },
        result: {
            "data": {
                "rocket": {
                    "rocket_id": "falcon1",
                    "rocket_name": "Falcon 1",
                    "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
                    "active": false,
                    "first_flight": "2006-03-24",
                    "height": {
                        "meters": 22.25
                    },
                    "diameter": {
                        "meters": 1.68
                    },
                    "mass": {
                        "kg": 30146
                    },
                    "stages": 2,
                    "boosters": 0,
                    "cost_per_launch": 6700000,
                    "success_rate_pct": 40,
                    "landing_legs": {
                        "number": 0,
                        "material": null
                    },
                    "company": "SpaceX",
                    "country": "Republic of the Marshall Islands",
                    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1",
                    "payload_weights": [
                        {
                            "name": "Low Earth Orbit",
                            "kg": 450
                        }
                    ],
                    "first_stage": {
                        "reusable": false,
                        "engines": 1,
                        "fuel_amount_tons": 44.3,
                        "burn_time_sec": 169,
                        "thrust_sea_level": {
                            "kN": 420
                        },
                        "thrust_vacuum": {
                            "kN": 480
                        }
                    },
                    "second_stage": {
                        "engines": 1,
                        "fuel_amount_tons": 3.38,
                        "burn_time_sec": 378,
                        "thrust": {
                            "kN": 31
                        },
                        "payloads": {
                            "option_1": "composite fairing",
                            "option_2": null,
                            "composite_fairing": {
                                "height": {
                                    "meters": 3.5
                                },
                                "diameter": {
                                    "meters": 1.5
                                }
                            }
                        }
                    },
                    "engines": {
                        "number": 1,
                        "type": "merlin",
                        "version": "1C",
                        "layout": "single",
                        "engine_loss_max": 0,
                        "propellant_1": "liquid oxygen",
                        "propellant_2": "RP-1 kerosene",
                        "thrust_sea_level": {
                            "kN": 420
                        },
                        "thrust_vacuum": {
                            "kN": 480
                        },
                        "thrust_to_weight": 96
                    },
                    "flickr_images": [
                        "https://imgur.com/DaCfMsj.jpg",
                        "https://imgur.com/azYafd8.jpg"
                    ]
                }
            }
        }
    },
    {
        request: {
            query: RocketDetailsDocument,
            variables: {
                rocketId: "falcon9"
            }
        },
        result: {
            "data": {
                "rocket": {
                    "rocket_id": "falcon9",
                    "rocket_name": "Falcon 9",
                    "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
                    "active": true,
                    "first_flight": "2010-06-04",
                    "height": {
                        "meters": 70
                    },
                    "diameter": {
                        "meters": 3.7
                    },
                    "mass": {
                        "kg": 549054
                    },
                    "stages": 2,
                    "boosters": 0,
                    "cost_per_launch": 50000000,
                    "success_rate_pct": 97,
                    "landing_legs": {
                        "number": 4,
                        "material": "carbon fiber"
                    },
                    "company": "SpaceX",
                    "country": "United States",
                    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9",
                    "payload_weights": [
                        {
                            "name": "Low Earth Orbit",
                            "kg": 22800
                        },
                        {
                            "name": "Geosynchronous Transfer Orbit",
                            "kg": 8300
                        },
                        {
                            "name": "Mars Orbit",
                            "kg": 4020
                        }
                    ],
                    "first_stage": {
                        "reusable": true,
                        "engines": 9,
                        "fuel_amount_tons": 385,
                        "burn_time_sec": 162,
                        "thrust_sea_level": {
                            "kN": 7607
                        },
                        "thrust_vacuum": {
                            "kN": 8227
                        }
                    },
                    "second_stage": {
                        "engines": 1,
                        "fuel_amount_tons": 90,
                        "burn_time_sec": 397,
                        "thrust": {
                            "kN": 934
                        },
                        "payloads": {
                            "option_1": "dragon",
                            "option_2": "composite fairing",
                            "composite_fairing": {
                                "height": {
                                    "meters": 13.1
                                },
                                "diameter": {
                                    "meters": 5.2
                                }
                            }
                        }
                    },
                    "engines": {
                        "number": 9,
                        "type": "merlin",
                        "version": "1D+",
                        "layout": "octaweb",
                        "engine_loss_max": 2,
                        "propellant_1": "liquid oxygen",
                        "propellant_2": "RP-1 kerosene",
                        "thrust_sea_level": {
                            "kN": 845
                        },
                        "thrust_vacuum": {
                            "kN": 914
                        },
                        "thrust_to_weight": 180.1
                    },
                    "flickr_images": [
                        "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
                        "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
                        "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
                        "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
                        "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
                        "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
                    ]
                }
            }
        }
    },
    {
        request: {
            query: RocketDetailsDocument,
            variables: {
                rocketId: "falconheavy"
            }
        },
        result: {
            "data": {
                "rocket": {
                    "rocket_id": "falconheavy",
                    "rocket_name": "Falcon Heavy",
                    "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
                    "active": true,
                    "first_flight": "2018-02-06",
                    "height": {
                        "meters": 70
                    },
                    "diameter": {
                        "meters": 12.2
                    },
                    "mass": {
                        "kg": 1420788
                    },
                    "stages": 2,
                    "boosters": 2,
                    "cost_per_launch": 90000000,
                    "success_rate_pct": 100,
                    "landing_legs": {
                        "number": 12,
                        "material": "carbon fiber"
                    },
                    "company": "SpaceX",
                    "country": "United States",
                    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy",
                    "payload_weights": [
                        {
                            "name": "Low Earth Orbit",
                            "kg": 63800
                        },
                        {
                            "name": "Geosynchronous Transfer Orbit",
                            "kg": 26700
                        },
                        {
                            "name": "Mars Orbit",
                            "kg": 16800
                        },
                        {
                            "name": "Pluto Orbit",
                            "kg": 3500
                        }
                    ],
                    "first_stage": {
                        "reusable": true,
                        "engines": 27,
                        "fuel_amount_tons": 1155,
                        "burn_time_sec": 162,
                        "thrust_sea_level": {
                            "kN": 22819
                        },
                        "thrust_vacuum": {
                            "kN": 24681
                        }
                    },
                    "second_stage": {
                        "engines": 1,
                        "fuel_amount_tons": 90,
                        "burn_time_sec": 397,
                        "thrust": {
                            "kN": 934
                        },
                        "payloads": {
                            "option_1": "dragon",
                            "option_2": "composite fairing",
                            "composite_fairing": {
                                "height": {
                                    "meters": 13.1
                                },
                                "diameter": {
                                    "meters": 5.2
                                }
                            }
                        }
                    },
                    "engines": {
                        "number": 27,
                        "type": "merlin",
                        "version": "1D+",
                        "layout": "octaweb",
                        "engine_loss_max": 6,
                        "propellant_1": "liquid oxygen",
                        "propellant_2": "RP-1 kerosene",
                        "thrust_sea_level": {
                            "kN": 845
                        },
                        "thrust_vacuum": {
                            "kN": 914
                        },
                        "thrust_to_weight": 180.1
                    },
                    "flickr_images": [
                        "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
                        "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
                        "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg",
                        "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg"
                    ]
                }
            }
        }
    },
    {
        request: {
            query: RocketDetailsDocument,
            variables: {
                rocketId: "starship"
            }
        },
        result: {
            "data": {
                "rocket": {
                    "rocket_id": "starship",
                    "rocket_name": "Starship",
                    "description": "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
                    "active": false,
                    "first_flight": "2021-12-01",
                    "height": {
                        "meters": 118
                    },
                    "diameter": {
                        "meters": 9
                    },
                    "mass": {
                        "kg": 1335000
                    },
                    "stages": 2,
                    "boosters": 0,
                    "cost_per_launch": 7000000,
                    "success_rate_pct": 0,
                    "landing_legs": {
                        "number": 6,
                        "material": "stainless steel"
                    },
                    "company": "SpaceX",
                    "country": "United States",
                    "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    "payload_weights": [
                        {
                            "name": "Low Earth Orbit",
                            "kg": 150000
                        },
                        {
                            "name": "Mars Orbit",
                            "kg": 100000
                        },
                        {
                            "name": "Moon Orbit",
                            "kg": 100000
                        }
                    ],
                    "first_stage": {
                        "reusable": true,
                        "engines": 37,
                        "fuel_amount_tons": 3300,
                        "burn_time_sec": null,
                        "thrust_sea_level": {
                            "kN": 128000
                        },
                        "thrust_vacuum": {
                            "kN": 138000
                        }
                    },
                    "second_stage": {
                        "engines": 6,
                        "fuel_amount_tons": 1200,
                        "burn_time_sec": null,
                        "thrust": {
                            "kN": 1957
                        },
                        "payloads": {
                            "option_1": "Spaceship",
                            "option_2": "composite fairing",
                            "composite_fairing": {
                                "height": {
                                    "meters": null
                                },
                                "diameter": {
                                    "meters": null
                                }
                            }
                        }
                    },
                    "engines": {
                        "number": 37,
                        "type": "raptor",
                        "version": "",
                        "layout": null,
                        "engine_loss_max": null,
                        "propellant_1": "liquid oxygen",
                        "propellant_2": "liquid methane",
                        "thrust_sea_level": {
                            "kN": 1780
                        },
                        "thrust_vacuum": {
                            "kN": 1960
                        },
                        "thrust_to_weight": 107
                    },
                    "flickr_images": [
                        "https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg",
                        "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg",
                        "https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg",
                        "https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg"
                    ]
                }
            }
        }
    },
]