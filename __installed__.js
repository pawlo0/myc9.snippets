define("plugins/myc9.snippets/__installed__", [],[
    {
        "packagePath": "plugins/myc9.snippets/__static__"
    }
]);

define("plugins/myc9.snippets/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "0.0.0";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "go.snippets",
                    "data": ""
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "myc9.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("myc9.snippets.bundle");
        
        register(null, {});
    }
});
