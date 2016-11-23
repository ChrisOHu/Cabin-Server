'use strict';

const Service = require( 'feathers-mongoose').Service;
const Model = require('./Model')

export default class Designs extends Service {
  static getOptions() {
    return {
      Model,
      paginate: {
        default: 5,
        max: 25
      }
    }
  }

  constructor() {
    super(Designs.getOptions())
  }

  setup(app, path) {
    this.app = app
    this.path = path
  }

  find(params) {
    return super.find(params)
  }
  get(id, params) {
    return super.get(id, params)
  }
  create(data, params) {
    return super.create(data, params)
  }
  update(id, data, params) {
    return super.update(id, data, params)
  }
  patch(id, data, params) {
    return super.patch(id, data, params)
  }
  remove(id, params) {
    return super.remove(id, params)
  }

}

