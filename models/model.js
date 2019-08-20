/*Place all functions, classes, and/or DB schemas here for a single
model.*/

/* Step 1: import mongoose connection */
const mongoose = require('./connection.js')

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
function getHelloWorldString() {
  return 'hello world'
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getHelloWorldString
}
