import { NextLaunchDocument } from './index';

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
]