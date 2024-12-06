/**
 * product router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::product.product');

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/products',
            handler: 'product.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/products/:id',
            handler: 'product.findOne',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
