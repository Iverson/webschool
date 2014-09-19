Ractive.components.Tabs = Ractive.extend({
    template: JST['templates/components/tabs'](),

    showTab: function(index) {
        this.set('activeIndex', index);
        this.fire('selectTab');

        return false;
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