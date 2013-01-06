/*
    CLI: `buster server` then `buster test --reporter specification`
 */

buster.testCase('MVC Library Tests: ', {
    
    'The MVC namespace should be defined': function(){
        assert.defined(MVC);
    },

    'Create a View instance': function(){
        var View = new MVC.View();
        
        assert.isObject(View);

        // If no configuration object passed through then we expect the `<body>` element to be the View
        assert.match(View.el, {
            tagName: 'body'
        });
    },

    'Create a View instance with configuration settings': function(){
        var rendered = false;
        
        var View = new MVC.View({
            el: document.getElementById('js-view'),
            
            events: {
                'click .js-button': 'render'
            },

            render: function (e) {
                rendered = true;
            }
        });

        assert.match(View.el, {
            tagName: 'div',
            innerHTML: '<button class="js-button">Create a list item</button>'
        });

        $('.js-button').trigger('click');

        assert.same(rendered, true);
    }

});