/**
 * Forum_groups.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true
        },
        name: 'string',
        category_id: {
            type: 'integer',
            model: 'forum_category'
        },
        user_group_id: {
            type: 'integer',
            model: 'user_group'
        }
    }
};