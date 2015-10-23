'use strict';

/**
 * @ngdoc function
 * @name innovationColabSampleApplicationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the innovationColabSampleApplicationsApp
 */
angular.module('innovationColabSampleApplicationsApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var STREAMER = "https://streamer.oit.duke.edu/";
    var ACCESS_TOKEN = "access_token=3ad251733ebd8496b96b5d9eccc21da4";
    var CALLBACK = "&callback=?";
    $scope.oneAtATime = true;
    $scope.isOpen = false;
    $scope.App = {
    	load: function() {
			$http.get(STREAMER + "curriculum/list_of_values/fieldname/SUBJECT?" + ACCESS_TOKEN)
    		.success(function(data) {
    			$scope.subjects = data.scc_lov_resp.lovs.lov.values.value;
    			$('#loading-subjects').hide();
    		})
    		.error(function(XHR, textStatus, errorThrown) {
    			console.log("ERROR: " + textStatus);
                console.log("ERROR: " + errorThrown);
    		})
    	},
    	getCourses: function(code, desc) {

    		var courseSubject = code + " - " + desc;
    		courseSubject = encodeURIComponent(courseSubject.trim());
    		// encodeURIComponent replaces spaces with percent 20
    		$http.get(STREAMER + "curriculum/courses/subject/" + courseSubject + "?" + ACCESS_TOKEN)
    		.success(function(data) {
    			console.log("SUCCESS");
                $scope.currentSubject = code;
    			$scope.courses = data.ssr_get_courses_resp.course_search_result.subjects.subject.course_summaries.course_summary;
    			$('.loading-courses').hide();
    		})
    		.error(function(XHR, textStatus, errorThrown) {
    			console.log("ERROR: " + textStatus);
                console.log("ERROR: " + errorThrown);
    		})
			
    	}
    };

  }]);
