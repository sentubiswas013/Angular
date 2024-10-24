export const dataDcr = {
  "name": "Advertisers",
  "range": 90,
  "pass": 40,
  "fail": 50,
  "total": 90,
  "children": [
    {
      "name": "Self Serve",
      "range": 70,
      "pass": 40,
      "fail": 50,
      "total": 90,
      "children": [
        {
          "name": "Campaign",
          "range": 88,
          "pass": 40,
          "fail": 50,
          "total": 90,
          "children": [
            {
              "name": "SS_Campaign_Auction",
              "range": 60,
              "pass": 40,
              "fail": 50,
              "total": 90,  "children": []
            }
          ]
        },
        {
          "name": "Line Item",
          "range": 86,
          "children": [
            {
              "name": "Auction",
              "range": 30,
              "children": [
                {
                  "name": "Contextual",
                  "range": 90,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Keyword",
                  "range": 72,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Run of Site",
                  "range": 87,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Audience",
                  "range": 46,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Managed Serve",
      "range": 85,
      "pass": 40,
      "fail": 50,
      "total": 90,
      "children": [
        {
          "name": "Campaign",
          "range": 55,
          "pass": 40,
          "fail": 50,
          "total": 90,
          "children": [
            {
              "name": "MS Auction",
              "range": 31,
              "pass": 40,
              "fail": 50,
              "total": 90,
            },
            {
              "name": "MS Sponsorship",
              "range": 72,
              "pass": 40,
              "fail": 50,
              "total": 90,
            },
            {
              "name": "MS Remnant",
              "range": 72,
              "pass": 40,
              "fail": 50,
              "total": 90,
            }
          ]
        },
        {
          "name": "Line Item",
          "range": 93,
          "pass": 40,
          "fail": 50,
          "total": 90,
          "children": [
            {
              "name": "Auction",
              "range": 81,
              "pass": 40,
              "fail": 50,
              "total": 90,
              "children": [
                {
                  "name": "Contextual",
                  "range": 31,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Keyword",
                  "range": 72,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Run of Site",
                  "range": 87,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Audience",
                  "range": 72,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                }
              ]
            },
            {
              "name": "Sponsorship",
              "range": 90,
              "pass": 40,
              "fail": 50,
              "total": 90,
              "children": [
                {
                  "name": "Feature",
                  "range": 31,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "CATTO - Category Takeover",
                  "range": 95,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Keyword Takeover",
                  "range": 95,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                },
                {
                  "name": "Gallery",
                  "range": 72,
                  "pass": 40,
                  "fail": 50,
                  "total": 90,
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}