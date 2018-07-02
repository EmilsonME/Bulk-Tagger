(function(){
	"use-strict";

	angular.module('bulk-tagger')
	.controller('CategoriseController', CategoriseController);


	CategoriseController.$inject = ['DataService'];
	function CategoriseController(DataService){
		var categorise = this;

		categorise.checkBox = [];
		
		categorise.getStaffs = function() {
	      	DataService.getStaffs().then(function(staffs) {
	            categorise.staffs = staffs;
	            for(let x = 0; x<categorise.staffs.length; x++){
	            	categorise.checkBox.push({x:x, value:"false"})
	            }
	        });
	    };

	    categorise.getTeamList = function() {
	      	DataService.getTeamList().then(function(teamList) {
	            categorise.teamList = teamList;
	        });
	    };

	    categorise.getAwardTagsList = function() {
	      	DataService.getAwardTagsList().then(function(awardTags) {
	            categorise.awardTags = awardTags;

	        });
	    };

		setTimeout(categorise.getStaffs, 1);
		setTimeout(categorise.getTeamList, 1);
		setTimeout(categorise.getAwardTagsList, 1);
		

		categorise.new = {};
		categorise.addTag = function(){
			for( index in categorise.checkBox){
				if(categorise.checkBox[index].value === true){
					console.log(categorise.checkBox[index].value);
					categorise.staffs[index].award_tags.push(categorise.new.award_tags);
					categorise.staffs[index].team_tags.push(categorise.new.team_tags);
				}
			}	
		}

	  	categorise.checkall = false;
		categorise.toggleAll = function() {
		    categorise.checkall = !categorise.checkall;
		    for( key in categorise.checkBox) {
		      categorise.checkBox[key].value = categorise.checkall;
		    }
		    console.log(categorise.checkBox)
		    
		};

		categorise.atLeastOne = false;
		categorise.isChecked = function(index){
			console.log(index)
			if(categorise.checkBox[index].value === true){
				categorise.atLeastOne = true;
			}else{
				categorise.atLeastOne = false;
			}
		}

		categorise.reset = function(){
			for( index in categorise.checkBox){
				if(categorise.checkBox[index].value === true){
					categorise.checkBox[index].value = false;
				}
			}	

			categorise.new = {}
		}

	}

})();