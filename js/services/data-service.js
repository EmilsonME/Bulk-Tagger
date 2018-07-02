(function(){
	"use strict";

	angular.module('bulk-tagger')
	.service('DataService', DataService);

	DataService.$inject = ['$http', '$q'];
	function DataService($http, $q){
		var service = this;

		var staffs = undefined;
		var teamList = undefined;
		var awardTagsList = undefined;
 
	    service.getStaffs = function() {
	      if (!staffs) {
	        var deferred = $q.defer();
	 
	        $http.get('data/staff.json').then(function(result) {
	            staffs = result.data;
	            deferred.resolve(staffs);
	          }, function(error) {
	            staffs = error;
	            deferred.reject(error);
	          });

	        staffs = deferred.promise;
	      }
	    
	     return $q.when(staffs);
		};

		service.getTeamList = function() {
	      if (!teamList) {
	        var deferred = $q.defer();
	 
	        $http.get('data/team-list.json').then(function(result) {
	            teamList = result.data;
	            deferred.resolve(teamList);
	          }, function(error) {
	            teamList = error;
	            deferred.reject(error);
	          });

	        teamList = deferred.promise;
	      }
	    
	     return $q.when(teamList);
		};

		service.getAwardTagsList = function() {
	      if (!awardTagsList) {
	        var deferred = $q.defer();
	 
	        $http.get('data/award-tags-list.json').then(function(result) {
	            awardTagsList = result.data;
	            deferred.resolve(awardTagsList);
	          }, function(error) {
	            awardTagsList = error;
	            deferred.reject(error);
	          });

	        awardTagsList = deferred.promise;
	      }
	    
	     return $q.when(awardTagsList);
		};
 	}



/*
		service.getStaff = function(){
			return $http.get("data/staff.json").then(function(response){
				service.turtleData = response.data
				return response.data;
			});
			
		};

		service.getTeamList = function(){
			return $http.get("data/team-list.json").then(function(response){
				return response.data;
			});
			
		}

		service.getAwardTagsList = function(){
			return $http.get("data/award-tags-list.json").then(function(response){
				return response.data;
			});
			
		}*/




		

	
})();