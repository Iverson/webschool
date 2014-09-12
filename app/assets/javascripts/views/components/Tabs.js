Ractive.components.Tabs = Ractive.extend({
    template: JST['templates/components/tabs'](),

    init: function() {
        this.on('selectTab', function(evt) {
            var index = evt.node.getAttribute( 'data-index' );
            this.set('activeIndex', index);

            return false;
        });
    },
    
    data: {
        activeIndex: 0,
        isActive: function(index) {
            return this.get('activeIndex') == index;
        },
        setPartial: function(template) {
            this.partials.tabContent = template;
            
        }
    },

    partials: {
        // content: null
    }
});