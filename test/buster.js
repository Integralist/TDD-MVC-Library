var config = module.exports;

config['MVC Library Tests'] = {
    //autoRun: false, (if using AMD, enable this prop and call `buster.run()` when you're ready to start the tests)
    rootPath: '../',
    environment: 'browser', // or 'node'
    sources: [
        //'lib/**/*.js'
        'lib/ender.js',
        'lib/mvc.js',
    ],
    tests: [
        'test/*-test.js'
    ],
    /*
    testbed: 'my-file.html' // NOT IMPLEMENTED YET, SO USING `resources` IS A WORK-AROUND
    */
    resources: [
        {
            path: '/',
            content:    '<!doctype html>' + 
                        '<html dir="ltr" lang="en">' + 
                        '    <head>' + 
                        '        <meta charset="utf-8">' + 
                        '        <meta name="viewport" content="width=device-width, initial-scale=1">' + 
                        '        <title>MVC Library Tests using BusterJS</title>' + 
                        '    </head>' + 
                        '    <body>' + 
                        '       <div id="js-view"><button class="js-button">Create a list item</button></div>' + 
                        '    </body>' + 
                        '</html>'
        }
    ]
}