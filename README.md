<img src="http://montanacodeschool.com/wp-content/uploads/2015/06/MCS_LOGO_v1.png" width="200" align="right"/>

##Employee Index

##Purpose
The purpose of this day project is to introduce students to the basic structure of React by creating an employee index.

##Directions

###Setup

* Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub.

* Take a look at the file I have provided. It is a JavaScript file containing a list of employees. You can think of this as your available data, whether it comes from a database, an API, or any other data file type.

* Create the files necessary to build your React app. Be sure to include index.html and app.js.

* Starting with your index.html, be sure to call in all of the CDN's for each of the following libraries (React, React-DOM, Babel-Browser).
```
https://unpkg.com/react@15.3.1/dist/react.js
https://unpkg.com/react-dom@15.3.1/dist/react-dom.js
https://unpkg.com/babel-core@5.8.38/browser.min.js
```

* Be sure to include all of your script files as well. Call in both the employee list and the app.js files.

* Include an empty div within your body with an ID.

* In order for the employee list to work properly, add the following script tag above your JS script tags. This gives the variables global scope.

```
<script>
  var employeeList, serviceCalculator;
</script>
```

* In your app.js file, go ahead and create a Component using the following syntax.

```
var Employees = React.createClass({
  render: function() {
    return (
      <div>
        This is a List of Employees.
      </div>
    );
  }
});
```

* After that go ahead and set up your ReactDOM rendering using this syntax. Remember to call the ID that you selected for you empty div on your index.html file. When you are done, test the files by opening live-server. The phrase, "This is a List of Employees.", should pop up if you copied the code above.

```
ReactDOM.render(
  <Employees />,
  document.getElementById('content')
);
```

###Build the App

* Now that everything is set up, let's start building. Our goal is to transfer the data that is in the employeeList.js file to your React render, so it can display on the view.

* The first thing we need to do is associate the data from the employeeList file to the Employees component. You can do so by plugging in `data={employeeList}` into the Employees tag located in the ReactDOM rendering. This means that the component 'Employees' has a property called 'data' that is equal to the variable 'employeeList'. I have already set up the variable 'employeeList', so this should already output an array of objects of employees.

*  Next, we should create a component for each individual employee, let's call it 'Employee'. Using the same syntax above, create that component. It doesn't need to be perfect yet, just more of a placeholder for now.

* The next thing we should do is map through the list of employees. Since React doesn't have a list feature, we have to do it manually. In the Employees component, setup a new variable called employeeNodes and set it equal to the result of a map function that maps through the data property. Have the map function return an Employee component for each employee in the list. It should look something like this.

```
var employeeNodes = this.props.data.map(function(employee) {
  return (
    <Employee/>
  );
});
```

* After this has mapped through, we will want to return the result of this as rendered JSX. So, using curly brackets, you can just place that variable name into a set of outer div tags, and the component will render everything that the map function has processed.

```
return (
  <div>
    {employeeNodes}
  </div>
);
```

* So far, this isn't doing much besides rendering an empty component for each index in the array. We will need to create some HTML in the Employee component so that we render something we can see.

* In the Employee component, let's setup some HTML to display on the view. You can use the following template for now.

```
return (
  <div>
    <h2>Name</h2>
    <ul>
      <li>Position</li>
      <li>Hire Date</li>
      <li>Years of Service</li>
      <li>Date of Birth</li>
      <li>Age</li>
    </ul>
    <img/>
  </div>
);
```

* Okay, now we can see content per employee, however, we are still not receiving any data. Let's set that up next.

* In the Employees component, within the Employee tag in the map function, create new properties that represent each of the useful pieces of data and set them equal to the associated mapped variable keys. It should look like this.

```
<Employee
  name={employee.name}
  position={employee.position}
  hireDate={employee.hireDate}
  yearsOfService={employee.yearsOfService}
  imgurl={employee.imgurl}
  DOB={employee.DOB}
  age={employee.age}
  key={employee.id}
  />
```

* Now that we have created properties, we can reference them in the Employee component. In the HTML content, go ahead an add properties within curly braces where needed. An example of this can be seen below.

```
return (
  <div>
    <h2>{this.props.name}</h2>
    <ul>
      <li>Position : {this.props.position}</li>
      <li>Hire Date : {this.props.hireDate}</li>
      <li>Years of Service : {this.props.yearsOfService}</li>
      <li>Date of Birth : {this.props.DOB}</li>
      <li>Age : {this.props.age}</li>
    </ul>
    <img src={this.props.imgurl}/>
  </div>
);
```

###Final Touches

* If you have done everything correctly, you should have a fairly crude rendering of each employee. If this is the case, go ahead and add some styles. Great Job!

##Copyright

(c) Montana Code School, 2016.
