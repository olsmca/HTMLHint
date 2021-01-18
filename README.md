# HTMLHint
The static code analysis tool you need for your HTML.

[HTMLHint Github](http://localhost/)

# Installation and Usage
Global Installation

`$ npm install htmlhint -g`

Inlcude HTMLHint as part of your project

`$ npm install htmlhint --save-dev`

you can run the help of HTMLHint

`$ htmlhint --help`

**Output**
```
Usage: htmlhint <file|folder|pattern|stdin|url ...> [options]

Options:
  -V, --version                                                    output the version number
  -l, --list                                                       show all of the rules available
  -c, --config <file>                                              custom configuration file
  -r, --rules <ruleid, ruleid=value ...>                           set all of the rules available
  -R, --rulesdir <file|folder>                                     load custom rules from file or folder
  -f, --format <checkstyle|compact|html|json|junit|markdown|unix>  output messages as custom format
  -i, --ignore <pattern, pattern ...>                              add pattern to exclude matches
  --nocolor                                                        disable color
  --warn                                                           Warn only, exit with 0
  -h, --help                                                       display help for command
  Examples:

    htmlhint
    htmlhint www
    htmlhint www/test.html
    htmlhint www/**/*.xhtml
    htmlhint www/**/*.{htm,html}
    htmlhint http://www.alibaba.com/
    cat test.html | htmlhint stdin
    htmlhint --list
    htmlhint --rules tag-pair,id-class-value=underline test.html
    htmlhint --config .htmlhintrc test.html
    htmlhint --ignore **/build/**,**/test/**
    htmlhint --rulesdir ./rules/
```

You can run HTMLHint on any file, directory or analyse an URL

```
$ htmlhint errors.html
$ htmlhint **/*.html
$ htmlhint https://htmlhint.com/
```

# Configuration
You can generate **htmlhintrc** file with tool [htmlhint-playground](https://htmlhint-playground.netlify.app/) and usage

Custom config file:

`$ htmlhint --config htmlhintrc **/**/**/*.{htm,html}`

Custom rules for console:

`$ htmlhint --rules tag-pair,id-class-value=underline errors.html`

Create rules:

test-rule.js
```
module.exports = function(HTMLHint) {
    HTMLHint.addRule({
        id: 'test-rule',
        description: 'test rule.',
        init: function(parser, reporter){
            var self = this;
            parser.addListener('tagstart', function(event){
                var tagName = event.tagName.toLowerCase();
                if(tagName === 'body'){
                    reporter.warn('Found body.', event.line, event.col, self, event.raw);
                }
            });
        }
    });
};
```
Run custom rules

`$ htmlhint --rulesdir ./rules/ --rules test-rule`

**Output**

```
/home/../HTMLHint/errors.html
      L7 |<body>
          ^ Found body. (test-rule)

Scanned 1 files, found 1 errors in 1 files (12 ms)

```

# Docs
[Official Documentation](https://github.com/htmlhint/HTMLHint#-docs)
