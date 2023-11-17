class Modal {

	constructor() {
	    this.$window = $(window);
	    this.$modal = $('<div class="modal"/>');
	    this.$content = $('<div class="modal-content"/>');
	    this.$close = $('<button role="button" class="modal-close">close</button>');
	    this.$modal.append(this.$content, this.$close);
	    
	    this.$close.on('click', (e) => {
		e.preventDefault();
		this.close();
	    });
	}
    
	    center() { 
	    // Top and Left to center 
	    console.log("what's in the window height? ", this.$window, this.$window.height());
	    var top = Math.max(this.$window.height() - this.$modal.outerHeight(), 0) / 2;
	    var left = Math.max(this.$window.width() - this.$modal.outerWidth(), 0) / 2;

	    // CSS 
	    this.$modal.css({
		top: top, 
		left: left, 
	    });
	}
    
	open(settings) {
	    this.$content.empty().append(settings.content);
	    this.$modal.css({ 
		width: settings.width || 'auto', 
		height: settings.height || 'auto' 
	    }).appendTo('body'); 
	    this.center(); 
	    this.$window.on('resize', this.center); 
	}
    
	close() {
	    
	    this.$content.empty();
	
	    this.$modal.detach();
	
	    this.$window.off('resize', () => this.center());
	}
}
    
    
    