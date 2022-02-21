const DataGenerator = require('../src/index');

const template = {
  "email": {
    "kind": "email",
    "params": {
      "domain": "test.com"
    }
  },
  "age": {
    "kind": "age",
    "params": {
      "type": 'adult' 
    }
  },
  "company": {
    "type": "object",
    "fields": {
      "companyName": {
        "kind": "company",
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
      },
    },
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
};

const dataGenerator = new DataGenerator(template);
console.log(JSON.stringify(dataGenerator.generateData()));
