const Chance = require('chance');

const chance = new Chance();

class DataGenerator {
  constructor(schema) {
    this.schema = schema;
    this.validTypes = this.getChanceTypes();
  }

  generateData() {
    return this.traverseThroughSchema(this.schema);
  };

  getChanceTypes() {
    const allProtoTypes = Object.getPrototypeOf(chance);
    return Object.keys(allProtoTypes).filter((protoType) => {
      return typeof allProtoTypes[protoType] === 'function';
    })
  };

  checkForValidType(type) {
    if (this.validTypes.includes(type)) {
      return true;
    }

    return false;
  };

  traverseThroughSchema(schema) {
    const keys = Object.keys(schema);
    return keys.reduce((soFar, currKey) => {
      const fieldSchema = schema[currKey];
      if (!fieldSchema.type) {
        const validType = this.checkForValidType(fieldSchema.kind);
        if (!validType) {
          throw `${fieldSchema.kind} is not a valid type in Chance. Make sure you entered a valid type`;
        }

        soFar[currKey] = chance[fieldSchema.kind](fieldSchema.params);
      }
      if (fieldSchema.type === 'object') {
        soFar[currKey] = this.traverseThroughSchema(fieldSchema.fields);
      }
      if(fieldSchema.type === 'array') {
        soFar[currKey] = [...Array(fieldSchema.count || 2).keys()].map(() => {
          return this.traverseThroughSchema(fieldSchema.fields);
        })
      }
      return soFar;
    }, {})
  }
};

module.exports = DataGenerator;
