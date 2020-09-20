import {
    NextLaunchDocument,
    RecentLaunchesIdsDocument,
    SingleLaunchDocument,
    AllLaunchesIdsDocument,
    Order,
    LaunchRange,
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
]