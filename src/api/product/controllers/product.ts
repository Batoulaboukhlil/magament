/**
 * product controller
 */

import {factories} from '@strapi/strapi'
import {createCoreController} from "@strapi/core/dist/factories";

export default factories.createCoreController('api::product.product');

