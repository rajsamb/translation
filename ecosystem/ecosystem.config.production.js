var argv = require('minimist')(process.argv.slice(2));
const ENVIRONMENT = argv.env;

// Path on Server
var srcDir = '/path/to/src/directory';
var script = srcDir + 'dist/app/server/main.js';

// It will run on port http://localhost:4000
module.exports = {
    "apps": [
        {
            "name": "translation-production",
            "script": script,
            "args": [],
            "watch": false,
            "node_args": "",
            "merge_logs": false,
            "output": "/var/log/translation-output.log",
            "error": "/var/log/translation-error.log",
            "log_date_format": "YYYY-MM-DD HH:mm:ss Z",
            "max_memory_restart": "300M",
        }
    ]
};
