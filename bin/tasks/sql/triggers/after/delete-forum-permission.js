/**
 * @file bin/tasks/sql/triggers/after/delete-forum-permission.js
 */
'use strict';

const enabled = require('../../../../utils/query-enabled');
const sqlTask = require('../../../../utils/sql-task');

/**
 * @type {String}
 */
const title = 'Creating `delete_forum_permission` trigger...';

/**
 * @param  {Object} ctx
 * @param  {Object} task
 * @return {Promise}
 * @private
 */
const task = ctx => {
  return sqlTask(ctx, 'triggers/after/delete-forum-permission.sql');
};

/**
 * A Listr-compatible task object.
 * @type {Object}
 */
module.exports = { title, enabled, task };
