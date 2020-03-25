(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{rNA0:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Rust/Building-Rust-CLIs.md"}});var l={_frontmatter:r},s=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(s,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"building-rust-command-line-tools"},"Building Rust Command Line Tools"),Object(a.b)("p",null,"Initial findings based off a useful article ",Object(a.b)("a",o({parentName:"p"},{href:"https://mattgathu.github.io/writing-cli-app-rust/"}),"found here"),"."),Object(a.b)("p",null,"We're using the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/clap-rs/clap"}),"Clap")," crate to help bootstrap CLIs."),Object(a.b)("h2",{id:"useful-tools-to-consider"},"Useful tools to consider"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/rust-cli/human-panic"}),"https://github.com/rust-cli/human-panic")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/hniksic/rust-subprocess"}),"https://github.com/hniksic/rust-subprocess")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/oconnor663/duct.rs"}),"https://github.com/oconnor663/duct.rs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/kkawakam/rustyline"}),"https://github.com/kkawakam/rustyline")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/mitsuhiko/indicatif"}),"https://github.com/mitsuhiko/indicatif")),Object(a.b)("li",{parentName:"ul"})),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("p",null,"Initialise an app using ",Object(a.b)("inlineCode",{parentName:"p"},"cargo new app_name_you_want --bin"),"."),Object(a.b)("p",null,'This example diverges from the above article by using the "Clap" crate with the YAML file config.'),Object(a.b)("h3",{id:"srcmainrs"},"src/main.rs"),Object(a.b)("p",null,"Update the file to reflect the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-rust"}),'#[macro_use]\nextern crate clap;\nuse clap::App;\n\nfn main() {\n    let yaml = load_yaml!("cli.yml");\n    let matches = App::from_yaml(yaml).get_matches();\n\n    // Gets a value for config if supplied by user, or defaults to "default.conf"\n    let config = matches.value_of("config").unwrap_or("default.conf");\n    println!("Value for config: {}", config);\n\n    // Calling .unwrap() is safe here because "INPUT" is required (if "INPUT" wasn\'t\n    // required we could have used an \'if let\' to conditionally get the value)\n    println!("Using input file: {}", matches.value_of("INPUT").unwrap());\n\n    // Vary the output based on how many times the user used the "verbose" flag\n    // (i.e. \'myprog -v -v -v\' or \'myprog -vvv\' vs \'myprog -v\'\n    match matches.occurrences_of("verbose") {\n        0 => println!("No verbose info"),\n        1 => println!("Some verbose info"),\n        2 => println!("Tons of verbose info"),\n        3 | _ => println!("Don\'t be crazy"),\n    }\n\n    // You can handle information about subcommands by requesting their matches by name\n    // (as below), requesting just the name used, or both at the same time\n    if let Some(matches) = matches.subcommand_matches("test") {\n        if matches.is_present("debug") {\n            println!("Printing debug info...");\n        } else {\n            println!("Printing normally...");\n        }\n    }\n}\n')),Object(a.b)("h3",{id:"srccliyml"},"src/cli.yml"),Object(a.b)("p",null,"For the CLI args, set the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-yml"}),'name: jamaica\nversion: "1.0"\nauthor: Dennis O\'Keeffe <hello@dennisokeeffe.com>\nabout: Build agnostic app configs\nargs:\n    - config:\n        short: c\n        long: config\n        value_name: FILE\n        help: Sets a custom config file\n        takes_value: true\n    - INPUT:\n        help: Sets the input file to use\n        required: true\n        index: 1\n    - verbose:\n        short: v\n        multiple: true\n        help: Sets the level of verbosity\nsubcommands:\n    - test:\n        about: controls testing features\n        version: "1.3"\n        author: Someone E. <someone_else@other.com>\n        args:\n            - debug:\n                short: d\n                help: print debug information\n')),Object(a.b)("h3",{id:"running-the-above-config"},"Running the above config"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"cargo run -- src/main.rs --config=made/up/\n# ... omitted Rust build output\nValue for config: made/up/file\nUsing input file: src/main.rs\nNo verbose info\n\ncargo run -- --help\n# shows help output: omitted for now\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Rust/Building-Rust-CLIs.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-rust-building-rust-cl-is-md-7baeb10b7593ed367f6d.js.map