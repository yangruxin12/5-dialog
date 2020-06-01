function Swipe(obj){
		this.width=obj.width;
		this.height=obj.height;
		this.background=obj.background_image;
		this.title=obj.title;
		this.content=obj.content;
		this.title_size=obj.title_size;
		this.title_color=obj.title_color;
		this.border=obj.border;
		this.seconds=obj.seconds;
	
		this.addChild();
	}
	Swipe.prototype.addChild = function() {
	    this.dom = document.createElement("div");
	    this.p1= document.createElement("p");
	    this.p2 = document.createElement("p");
		var that=this;
		that.p1.innerHTML=that.title;
		that.p2.innerHTML=that.content;
		 that.dom.style.width=that.width;
		 that.p1.style.fontSize=that.title_size;
		 that.p1.style.color=that.title_color;
		 that.dom.style.height=that.height;
		 that.p1.style.borderBottom=that.border;
		 that.dom.style.border=that.border;
		that.dom.style.backgroundImage=that.background;
		that.dom.style.margin="20px auto";
		// that.p2.style.backgroundColor=that.background2;
		 this.dom.appendChild(this.p1);
		 this.dom.appendChild(this.p2);
		 document.body.appendChild(this.dom);
		 // 两秒后消失
		 setTimeout(function(){
		 	that.dom.style.display= "none";
		 	},that.seconds);	
		};
		
		
		// Swipe.prototype.Event=function(){
		// 	console.log(this);
		// 	document.removeChild(this);
		// }