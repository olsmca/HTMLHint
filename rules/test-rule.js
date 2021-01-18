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


