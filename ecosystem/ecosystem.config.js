var argv = require('minimist')(process.argv.slice(2));
const ENVIRONMENT = argv.env;

// Make sure you run this from the project root.
var script = 'dist/app/server/main.js';

module.exports = {
    "apps": [
        {
            "name": "translation-" + ENVIRONMENT,
            "script": script,
            "args": [],
            "watch": false,
            "node_args": "",
            "merge_logs": false,
            "env": {
                "NODE_ENV": ENVIRONMENT,
                "LIVE_PORT": "4001",
                "SRC": "dist/",
                "NODE_ENV": "development"
            },
            "env_production": {
                "NODE_ENV": "production",
                "LIVE_PORT": "4004",
                "SRC": './'
            },
        }
    ]
};
