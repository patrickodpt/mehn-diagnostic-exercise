/*Place all functions, classes, and/or DB schemas here for a single
model.*/

/* Step 1: import mongoose connection */
const mongoose = require('./connection.js')

//to use findOneAndUpdate need to set useFindAndModify to false;
// :::::::NOT SURE HOW THIS WORKS:::::::::
mongoose.set('useFindAndModify', false);

/* Step 2: create model schema */
const IssueSchema = new mongoose.Schema(
  {
    description: String,
    createdAt: Date,
    //checked Date data type; works, but has special properties.
    //refer to doc.
    status: String,
    priority: String,
  }
)

/* Step 3: create collection API */
const IssueCollection = mongoose.model('Issue', IssueSchema)

/* Step 4: write functions for model */
// function getHelloWorldString() {
//   return 'hello world'
// }

const getAllIssues = () => { return IssueCollection.find() }
const getIssue = (issueId) => { return IssueCollection.findById(issueId) }
//instruct say to not return below, but may need to in order to redirect at right time.
const addNewIssue = (newIssue) => { return IssueCollection.insertMany([newIssue]) }
const updateIssue = (issueId, updatedIssue) => {
  return IssueCollection.findByIdAndUpdate(issueId, updatedIssue)
}
const deleteIssue = (issueId) => {
  return IssueCollection.findByIdAndDelete(issueId)
}

/* Step 5: export all functions*/
module.exports = {
  getAllIssues,
  getIssue,
  addNewIssue,
  updateIssue,
  deleteIssue
}
