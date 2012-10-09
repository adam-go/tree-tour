
var TreeTour = {
	mapOpen: true,

	initialize: function () {
		var container = document.id('TreeTourContainer');

		this.splitter = container.getElement('.splitterButton');
		this.map = document.id('map');
		this.mapWidth = this.map.getStyle('width');
		this.details = document.id('details');
		this.detailsMarginLeft = this.details.getStyle('margin-left');

		this.map.get('tween').addEvent('complete', this.toggleComplete.bind(this));
		splitter.addEvent('click', this.toggleSplit.bind(this));
	},

	toggleSplit: function (e) {
		if (this.mapOpen) {
			this.map.tween('width', 0);
			this.details.tween('margin-left', this.splitter.getSize().x);
		} else {
			this.map.setStyle('display', 'block');
			this.map.tween('width', this.mapWidth);
			this.details.tween('margin-left', this.detailsMarginLeft);
		}
	},

	toggleComplete: function (e) {
		if (this.mapOpen) {
			this.map.setStyle('display', 'none');
			this.splitter.innerHTML = '&raquo;';
			this.mapOpen = false;
		} else {
			this.splitter.innerHTML = '&laquo;';
			this.mapOpen = true;
		}
	}
};

window.addEvent('domready', function () {
	TreeTour.initialize();
});
