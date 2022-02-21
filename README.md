# Easy-breezy Data Generator
This is a package which helps user to create a random dataset for any customized schema (*Internally this package uses `chance.js`*).

## What's chance.js?
Chance is a generator of random strings, numbers etc. It helps reduce some mmonotony particulary while writing any automated tests or anywhere else you need anything random everytime.

## How it works??
Generating data on the customized schema was a challenge earlier, But is no longer now :). In this package, we are going to see how you can generate a dataSet providing schema of your choice.!

### How to configure your schema?
Simply customized your schema specifying your kinds (types). Types can be email, natural number, paragraph etc.. (*find list of supported kinds at the end of this article.*).
Random data is an integral part of any testing or statistical modeling. They play an increasing important role in the system. And having control over the modelling/structuring of data would be cherry on the cake.
So lets control the structuring of data by passing any variations of fields, arrays and objects in just one file. Below is the test `schema.json` for reference.
```json
{
  "email": {
    "kind": "email",
    "params": {
      "domain": "test.com"
    }
  },
  "age": {
    "kind": "age",
    "params": {
      "type": "adult"
    }
  },
  "company": {
    "type": "object",
    "fields": {
      "companyName": {
        "kind": "company"
      },
      "companyAddress": {
        "kind": "address"
      },
      "companyDetails": {
        "type": "object",
        "fields": {
          "companyId": {
            "kind": "fbid"
          },
          "employeeCount": {
            "kind": "natural",
            "params": {
              "min": 1,
              "max": 20
            }
          },
          "subjects": {
            "type": "array",
            "count": 2,
            "fields": {
              "subjectName": {
                "kind": "word"
              },
              "marks": {
                "kind": "natural",
                "params": {
                  "min": 1,
                  "max": 100
                }
              }
            }
          }
        }
      }
    }
  },
  "firstName": {
    "kind": "first"
  },
  "lastName": {
    "kind": "last"
  },
  "subjects": {
    "type": "array",
    "count": 6,
    "fields": {
      "subjectName": {
        "kind": "word"
      },
      "marks": {
        "kind": "natural",
        "params": {
          "min": 1,
          "max": 100
        }
      }
    }
  }
}
```
You must be wondering what's this `params` parameter, these are optional parameters which `chance.js` uses for configuring you're kinds. Take the example of an [email](https://chancejs.com/web/email.html) kind, it accepts domain parameter as params.

**NOTE:** By the way, this is just a sample `schema.json`, you can create your own using any combination of arrays or objects, which ever way you want it!

## How to use?
1. Install easy-breezy-data-generator from npm:
```
npm install easy-breezy-data-generator
```
2. Import the package and schema, in whichever file you need it.
```
const DataGenerator = require('easy-breezy-data-generator');
const schema = require('./schema.json');
```
3. Finally initialize and generate the random dataSet
```
const dataGenerator = new DataGenerator(schema);
console.log(JSON.stringify(dataGenerator.generateData()));
```
*Below are some most used kinds. Also don't forget to checkout, all the different kinds provided by `[chance.js] (https://chancejs.com/)`.*

1. [bool](https://chancejs.com/basics/bool.html)
2. [falsy](https://chancejs.com/basics/falsy.html)
3. [character](https://chancejs.com/basics/character.html)
4. [floating](https://chancejs.com/basics/floating.html)
5. [integer](https://chancejs.com/basics/integer.html)
6. [letter](https://chancejs.com/basics/letter.html)
7. [natural](https://chancejs.com/basics/natural.html)
8. [prime](https://chancejs.com/basics/prime.html)
9. [string](https://chancejs.com/basics/string.html)
10. [paragraph](https://chancejs.com/text/paragraph.html)
11. [sentence](https://chancejs.com/text/sentence.html)
12. [syllable](https://chancejs.com/text/syllable.html)
13. [word](https://chancejs.com/text/word.html)
14. [age](https://chancejs.com/person/age.html)
15. [birthday](https://chancejs.com/person/birthday.html)
16. [cf](https://chancejs.com/person/cf.html)
17. [cpf](https://chancejs.com/person/cpf.html)
18. [first](https://chancejs.com/person/first.html)
19. [gender](https://chancejs.com/person/gender.html)
20. [last](https://chancejs.com/person/last.html)
21. [name](https://chancejs.com/person/name.html)
22. [prefix](https://chancejs.com/person/prefix.html)
23. [ssn](https://chancejs.com/person/ssn.html)
24. [suffix](https://chancejs.com/person/suffix.html)
25. [animal](https://chancejs.com/thing/animal.html)
26. [android_id](https://chancejs.com/mobile/android_id.html)
27. [apple_token](https://chancejs.com/mobile/apple_token.html)
28. [bb_pin](https://chancejs.com/mobile/bb_pin.html)
29. [wp7_anid](https://chancejs.com/mobile/wp7_anid.html)
30. [wp8_anid2](https://chancejs.com/mobile/wp8_anid2.html)
31. [avatar](https://chancejs.com/web/avatar.html)
32. [color](https://chancejs.com/web/color.html)
33. [company](https://chancejs.com/web/company.html)
34. [domain](https://chancejs.com/web/domain.html)
35. [email](https://chancejs.com/web/email.html)
36. [fbid](https://chancejs.com/web/fbid.html)
37. [google_analytics](https://chancejs.com/web/google_analytics.html)
38. [hashtag](https://chancejs.com/web/hashtag.html)
39. [ip](https://chancejs.com/web/ip.html)
40. [ipv6](https://chancejs.com/web/ipv6.html)
41. [klout](https://chancejs.com/web/klout.html)
42. [profession](https://chancejs.com/web/profession.html)
43. [tld](https://chancejs.com/web/tld.html)
44. [twitter](https://chancejs.com/web/twitter.html)
45. [url](https://chancejs.com/web/url.html)
46. [address](https://chancejs.com/location/address.html)
47. [altitude](https://chancejs.com/location/altitude.html)
48. [areacode](https://chancejs.com/location/areacode.html)
49. [city](https://chancejs.com/location/city.html)
50. [coordinates](https://chancejs.com/location/coordinates.html)
51. [country](https://chancejs.com/location/country.html)
52. [depth](https://chancejs.com/location/depth.html)
53. [geohash](https://chancejs.com/location/geohash.html)
54. [latitude](https://chancejs.com/location/latitude.html)
55. [locale](https://chancejs.com/location/locale.html)
56. [longitude](https://chancejs.com/location/longitude.html)
57. [phone](https://chancejs.com/location/phone.html)
58. [postal](https://chancejs.com/location/postal.html)
59. [postcode](https://chancejs.com/location/postcode.html)
60. [province](https://chancejs.com/location/province.html)
61. [state](https://chancejs.com/location/state.html)
62. [street](https://chancejs.com/location/street.html)
63. [zip](https://chancejs.com/location/zip.html)
64. [ampm](https://chancejs.com/time/ampm.html)
65. [date](https://chancejs.com/time/date.html)
66. [hammertime](https://chancejs.com/time/hammertime.html)
67. [hour](https://chancejs.com/time/hour.html)
68. [millisecond](https://chancejs.com/time/millisecond.html)
69. [minute](https://chancejs.com/time/minute.html)
70. [month](https://chancejs.com/time/month.html)
71. [second](https://chancejs.com/time/second.html)
72. [timestamp](https://chancejs.com/time/timestamp.html)
73. [timezone](https://chancejs.com/time/timezone.html)
74. [weekday](https://chancejs.com/time/weekday.html)
75. [year](https://chancejs.com/time/year.html)
76. [cc](https://chancejs.com/finance/cc.html)
77. [cc_type](https://chancejs.com/finance/cc_type.html)
78. [currency](https://chancejs.com/finance/currency.html)
79. [currency_pair](https://chancejs.com/finance/currency_pair.html)
80. [dollar](https://chancejs.com/finance/dollar.html)
81. [euro](https://chancejs.com/finance/euro.html)
82. [exp](https://chancejs.com/finance/exp.html)
83. [exp_month](https://chancejs.com/finance/exp_month.html)
84. [exp_year](https://chancejs.com/finance/exp_year.html)
85. [capitalize](https://chancejs.com/helpers/capitalize.html)
86. [mixin](https://chancejs.com/helpers/mixin.html)
87. [pad](https://chancejs.com/helpers/pad.html)
88. [pick](https://chancejs.com/helpers/pick.html)
89. [pickone](https://chancejs.com/helpers/pickone.html)
90. [pickset](https://chancejs.com/helpers/pickset.html)
91. [set](https://chancejs.com/helpers/set.html)
92. [shuffle](https://chancejs.com/helpers/shuffle.html)
93. [coin](https://chancejs.com/miscellaneous/coin.html)
94. [dice](https://chancejs.com/miscellaneous/dice.html)
95. [guid](https://chancejs.com/miscellaneous/guid.html)
96. [hash](https://chancejs.com/miscellaneous/hash.html)
97. [hidden](https://chancejs.com/miscellaneous/hidden.html)
98. [n](https://chancejs.com/miscellaneous/n.html)
99. [normal](https://chancejs.com/miscellaneous/normal.html)
100. [radio](https://chancejs.com/miscellaneous/radio.html)
101. [rpg](https://chancejs.com/miscellaneous/rpg.html)
102. [tv](https://chancejs.com/miscellaneous/tv.html)
103. [unique](https://chancejs.com/miscellaneous/unique.html)
104. [weighted](https://chancejs.com/miscellaneous/weighted.html)
