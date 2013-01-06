var MVC = {

    Model: function (arguments) {
        // body
    },

    View: function (config) {
        var config = config || {};
        var events = config.events;
        var eventType, eventTarget;
        
        this.el = config.el || document.body;

        // Set-up event delegation for specified View element
        for (var prop in events) {
            if (events.hasOwnProperty(prop)) {
                // e.g. ['click', '.js-button'] or ['click']
                eventType = prop.split(' ');

                // If length greater than one then we know we have been provided an element to delegate to
                if (eventType.length > 1) {
                    $(this.el).on(eventType[0], eventType[1], config[events[prop]]);
                } else {
                    $(this.el).on(eventType[0], config[events[prop]]);
                }
            }
        }
    },

    Controller: function (arguments) {
        // body
    }

}