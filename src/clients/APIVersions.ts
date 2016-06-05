/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import versions = require('../models/Versions');

export class APIVersions extends client.Client {

    /**
     * Get API Versions
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns current API version(s) and server info.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    (options?:{
    }):Promise<versions.Versions> {

        return this.send(this.parseOptions('GET', '/restapi/', options, Options),
                         versions.Versions);

    }

}

/**
 * Definition of options for  operation
 */
export var Options:client.IOperationParameter[] = [];