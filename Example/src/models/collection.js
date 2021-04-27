
const Model = require('./model')

class Collection {

  constructor() {
    this.model = Model;
  }

  get(_id) {
    if (_id) {
      return this.model.findOne({ _id },{postedBy:0});
    }
    else {
      return this.model.find({},{postedBy:0});
    }
  }
  create(record) {
    let newRecord = new this.model(record);
    //.save is a post method
    return newRecord.save();
  }
  update(_id, record) {
    //find the record by the id argument and return it as a new record
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }

}
const collection =new Collection();
module.exports = collection;