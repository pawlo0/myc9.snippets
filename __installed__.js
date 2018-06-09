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
                    "data": "# scope: golang\n\nsnippet ap\n\t${1:slice} = append(${1:slice}, ${2:value})\n\nsnippet br\n\tbreak\n\nsnippet ch\n\tchan ${1:int}\n\nsnippet cs\n\tcase ${1:value}:\n\t\t${2:/* code */}\n\nsnippet c\n\tconst ${1:NAME} = ${2:0}\n\nsnippet df\n\tdefer ${1:func}()\n\n\nsnippet dfr\n\tdefer func() {\n\t\tif err := recover(); err != nil {\n\t\t\t${1:/* code */}\n\t\t}\n\t}()\n\nsnippet if\n\tif ${1:/* condition */} {\n\t\t${2:/* code */}\n\t}\n\nsnippet fo\n\tfor ${2:i} = 0; $2 < ${1:count}; $2${3:++} {\n\t\t${4:/* code */}\n\t}\n\n\nsnippet fr\n\tfor ${1:k}, ${2:v} := range ${3} {\n\t\t${4:/* code */}\n\t}\n\nsnippet cn\n\tcontinue\n\nsnippet mapT\n\tmap[${1:T}]${2:T}{${0}}\n\nsnippet err\n\tif err != nil {\n\t\treturn stacktrace.Propagate(err, \"${1}\")\n\t}\n\t${0}\n\nsnippet err2\n\tif err != nil {\n\t\treturn ${1:nil}, stacktrace.Propagate(err, \"${2}\")\n\t}\n\t${0}\n\nsnippet typei\n\t// ${1:name} ${2:description}\n\ttype ${1:name} interface {\n\t\t${0}\n\t}\n\nsnippet types\n\t// ${1:name} ${2:description}\n\ttype ${1:name} struct {\n\t\t${0}\n\t}\n\nsnippet funcc\n\t// ${3:Do} ${6:description}\n\tfunc (${1:s} ${2:T}) ${3:Do}(${4:/* args */}) ${5:error} {\n\t\t${0}\n\t}\n\nsnippet funcp\n\t// ${3:Do} ${6:description}\n\tfunc (${1:s} *${2:T}) ${3:Do}(${4:/* args */}) ${5:error} {\n\t\t${0}\n\t}\n\nsnippet mk\n\tmake(${1:[]string}, ${2:0})\n\nsnippet pr\n\tfmt.Printf(\"${1:%s}\\n\", ${2:var})\n\t${0}\n\nsnippet sp\n\tfmt.Sprintf(\"${1:%s}\", ${2:var})${3}\n\nsnippet sl\n\tselect {\n\tcase ${1:v1} := <-${2:chan1}\n\t\t${3:/* code */}\n\tcase ${4:v2} := <-${5:chan2}\n\t\t${6:/* code */}\n\tdefault:\n\t\t${7:/* code */}\n\t}\n\nsnippet New\n\t// New ${1:description}\n\tfunc New(${2:/* args */}) ${3:/* interface */} {\n\t\treturn &${4:/* struct */}{${5:/* initialize */}}\n\t}"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "myc9.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("myc9.snippets.bundle");
        
        register(null, {});
    }
});
