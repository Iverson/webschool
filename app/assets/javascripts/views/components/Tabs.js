Ractive.components.Tabs = Ractive.extend({
    template: JST['templates/components/tabs'](),

    init: function() {
        this.on('selectTab', function(evt, index) {

            this.showTab(index);
            
            return false;
        });
    },

    showTab: function(index) {
        this.set('activeIndex', index);
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