const express = require('express');
const router = express.Router();
const issueController = require('../controller/issue.controller.js');

router.post('/', issueController.createIssue);
router.get('/nearby', issueController.getNearbyIssues);
router.get('/:id', issueController.getIssueById);
router.post('/:id/flag', issueController.flagIssue);
router.patch('/:id/status', issueController.updateStatus);

module.exports = router;