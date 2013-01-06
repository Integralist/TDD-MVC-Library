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
        var View = new MVC.View({
            el: document.getElementById('js-view'),
            
            events: {
                'click .js-button': 'render'
            }
        });

        assert.match(View.el, {
            tagName: 'div',
            innerHTML: '<button class="js-button">Create a list item</button>'
        });
    },

    'Ensure event delegation is working': function(){
        var rendered, done = false;
        
        var View = new MVC.View({
            el: document.getElementById('js-view'),
            
            events: {
                'click .js-button': 'render'
            },

            render: function (e) {
                rendered = true;
            }
        });

        var BodyView = new MVC.View({
            events: {
                'click': 'doSomething'
            },

            doSomething: function (e) {
                done = true;
            }
        });

        $('.js-button').trigger('click');

        assert.same(rendered, true);

        $(document.body).trigger('click');

        assert.same(done, true);
    }

});