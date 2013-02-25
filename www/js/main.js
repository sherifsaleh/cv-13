(function($){


	var theCanvas = document.getElementById('timeline');
	if (theCanvas && theCanvas.getContext) {
		 
		 var ctx = theCanvas.getContext('2d');
		 if (ctx) {

		 	// the grey bar
			ctx.fillStyle = "#b5b5b5";
			ctx.fillRect(20,60,900,30);

			//left edge
			ctx.beginPath();
			ctx.moveTo(20,60);
			ctx.lineTo(0,75);
			ctx.lineTo(20,90);
			ctx.lineTo(20,60);
			ctx.fill();
			ctx.closePath();


			//right edge
			ctx.beginPath();
			ctx.moveTo(920,60);
			ctx.lineTo(940,75);
			ctx.lineTo(920,90);
			ctx.lineTo(920,60);
			ctx.fill();
			ctx.closePath();


			// white lines
			ctx.strokeStyle="white";
			ctx.lineWidth=1;
			ctx.beginPath();

			ctx.moveTo(130*1+20,60);
			ctx.lineTo(130*1+20,90);

			ctx.moveTo(130*2+20,60);
			ctx.lineTo(130*2+20,90);

			ctx.moveTo(130*3+20,60);
			ctx.lineTo(130*3+20,90);

			ctx.moveTo(130*4+20,60);
			ctx.lineTo(130*4+20,90);

			ctx.moveTo(130*5+20,60);
			ctx.lineTo(130*5+20,90);

			ctx.moveTo(130*6+20,60);
			ctx.lineTo(130*6+20,90);


			ctx.stroke();



			//years text
			var year2007 = "2007";
			ctx.font = "16pt 'Source Sans Pro', sans-serif"
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(year2007, 20+65*1,82);


			var year2008 = "2008";
			ctx.font = "16pt 'Source Sans Pro', sans-serif"
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(year2008, 20+65*2+65,82);


			var year2009 = "2009";
			ctx.font = "16pt 'Source Sans Pro', sans-serif"
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(year2009, 345,82);


			var year2010 = "2010";
			ctx.font = "16pt 'Source Sans Pro', sans-serif"
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(year2010, 475,82);


			var year2011 = "2011";
			ctx.font = "16pt 'Source Sans Pro', sans-serif"
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(year2011, 605,82);


			var year2012 = "2012";
			ctx.font = "16pt 'Source Sans Pro', sans-serif"
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(year2012, 735,82);



			var year2013 = "2013";
			ctx.font = "16pt 'Source Sans Pro', sans-serif"
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(year2013, 865,82);


		 }
	}

  var nav = $('nav');
  
  $(window).scroll(function () {
      if ($(this).scrollTop() > 375) {
          nav.addClass("fixed").fadeIn('slow');
      } else {
          nav.removeClass("fixed");
      }
  });


  $(window).load(function(){
         $('.adobe-chart').easyPieChart({
             barColor: function(percent) {
                 percent /= 100;
                 return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
             },
             barColor:'#e84a4a',
             trackColor: '#f2f2f2',
             scaleColor: false,
             lineCap: 'round',
             size:'150',
             lineWidth: 15,
             animate: 2500
         });

         $('.html-chart').easyPieChart({
             barColor: function(percent) {
                 percent /= 100;
                 return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
             },
             barColor:'#fbb03b',
             trackColor: '#f2f2f2',
             scaleColor: false,
             lineCap: 'round',
             size:'150',
             lineWidth: 15,
             animate: 2500
         });

         $('.css-chart').easyPieChart({
             barColor: function(percent) {
                 percent /= 100;
                 return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
             },
             barColor:'#0b83ff',
             trackColor: '#f2f2f2',
             scaleColor: false,
             lineCap: 'round',
             size:'150',
             lineWidth: 15,
             animate: 2500
         });

         $('.js-chart').easyPieChart({
             barColor: function(percent) {
                 percent /= 100;
                 return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
             },
             barColor:'#8cc63f',
             trackColor: '#f2f2f2',
             scaleColor: false,
             lineCap: 'round',
             size:'150',
             lineWidth: 15,
             animate: 2500
         });

         $('.php-chart').easyPieChart({
             barColor: function(percent) {
                 percent /= 100;
                 return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
             },
             barColor:'#666666',
             trackColor: '#f2f2f2',
             scaleColor: false,
             lineCap: 'round',
             size:'150',
             lineWidth: 15,
             animate: 2500
         });
  });

}(jQuery));