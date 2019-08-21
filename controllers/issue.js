/* Step 1: import express */
const express = require('express')

/* Step 2: Import the api files from the models */
const issueAPI = require('../models/issue.js')

/* Step 3: Create a new router.
the router will "contain" all the request handlers that you define in this file.*/
const issueRouter = express.Router()

/* Step 4: create all request handlers here*/
issueRouter.get('/', (req, res) => {
  issueAPI.getAllIssues().then(
    (allIssues) => res.render('issues/issues', {allIssues})
  )
})

issueRouter.get('/newIssue', (req, res) => {
  res.render('issues/newIssueForm')
})

issueRouter.get('/:issueId', (req, res) => {
  issueAPI.getIssue(req.params.issueId).then(
    (issue) => {
      res.render('issues/issue', {issue})
    }
  )
})

issueRouter.get('/:issueId/edit', (req, res) => {
  issueAPI.getIssue(req.params.issueId).then(
    (issue) => {
      res.render('issues/editIssueForm', {issue})
    }
  )
})

issueRouter.put('/:issueId', (req, res) => {
  issueAPI.updateIssue(req.params.issueId, req.body).then(
    () => {res.redirect('/issues')}
  )
})

issueRouter.post('/', (req, res) => {
  issueAPI.addNewIssue(req.body).then(
    () => {res.redirect('/issues') }
  )
})

issueRouter.delete('/:issueId', (req, res) => {
  issueAPI.deleteIssue(req.params.issueId).then(
    () => {res.redirect('/issues')}
  )
})

/* Step 5: Export the router from the file. */
module.exports = {
  issueRouter
}
