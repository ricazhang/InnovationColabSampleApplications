This is the sample Angular Web App which uses the Curriculum API. 

###Curriculum API###
The most important file to look at to see how the API is queried is `scripts/main.js`. I saved the API key and the URL as a variable:
```
var STREAMER = "https://streamer.oit.duke.edu/";
var ACCESS_TOKEN = "access_token=3ad251733ebd8496b96b5d9eccc21da4";
```

This line queries for a list of all subjects:
```
$http.get(STREAMER + "curriculum/list_of_values/fieldname/SUBJECT?" + ACCESS_TOKEN)
```

And this line queries for a list of all courses under a specific subject.
```
$http.get(STREAMER + "curriculum/courses/subject/" + courseSubject + "?" + ACCESS_TOKEN)
```

###Angular JS###
To learn Angular JS, I highly suggest you check out the [Code School: Shaping Up with Angular course](https://www.codeschool.com/courses/shaping-up-with-angular-js). However, I will also give a brief overview of how I use Angular to load the data from the API into the view.
If you look at `views/main.html`, you can see that I have one accordion group. The data is initialized with `ng-init` in this tag:
```
 <uib-accordion ng-init="App.load()">
 ```

This calls `load` in `scripts/main.js` which saves the subjects data from the API into a scope property called subjects. Each accordion group then accesses the subjects data by calling on this here:
```
<uib-accordion-group class="list-group-item" ng-repeat="subject in subjects">
```
When you click on an accordion header, it calls on the function in the scope to create a query for all the courses under the subject you just clicked. The ng-click first toggles the collapse boolean and then calls the function, passing in the current subject code and description. (The ng-init just initializes the value of the boolean to be true.)
```
<uib-accordion-heading ng-click="subject.collapse = !subject.collapse; App.getCourses(subject.code,subject.desc);" ng-init="subject.collapse = true">
```
Finally, inside the accordion menu, you can see that it loads the data that was saved in the courses IF the subject you are loading from is the same as the subject you clicked on (otherwise if you click on AAAS, it will list the AAAS classes under all sections of the accordion menu). We use Angular Expressions to present the data into the view.
```
<ul ng-if="currentSubject == subject.code"> 
	<li ng-repeat="course in courses">{{course.subject}} {{course.catalog_nbr}} - {{course.course_title_long}}</li>
```