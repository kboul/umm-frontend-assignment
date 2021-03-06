# Assign Tanks To Vessels

## Run the project

clone the project

select master branch

Navigate to the root folder

Install npm dependencies

```
npm install
```

Start the development server

``` 
npm start
``` 

Browser listens normally to localhost:3000, it will be opened automatically after npm start

## Test the project

Navigate to the root folder

Run tests

```
npm test
```

Get the project's test coverage

```
npm run test:coverage
```

## Instructions how to use the app

Click on **Register Tank** button and insert new tank information. A modal will be displayed with a form that includes:

* Unimed Id (text)
* Cylinder Serial Number (text)
* Cylinder Size (drop-down)
* Origin (drop-down)
* Owner (drop-down)

Insert all the above information and click Save.

A table will be populated dynamically having 6 columns displaying the Registered Tanks. These are: 

* Unimed Id
* Cylinder Serial Number 
* Cylinder Size 
* Origin 
* Owner 
* Assign Tank To Vessel

Also, the **Vessels Grid** will be displayed containing 5 expandable Accordions corresponding to a tank's cylinder type. These are:

* MOX-40
* MOX-10
* MOX-5
* MOX-2

The 5 first columns of the Registered Tanks table display the new inserted tank information.
The 6th column (**Assign Tank To Vessel**) contains a button named **Assign**. 
Clicking on that button triggers the display of a modal that contains a drop-down list to select in which vessel the selected tank should be assigned.

As soon as a tank is assigned to a vessel one of the relevant accordions (having as label the cylinder type), depending also which cylinder type the tank had from the tanks' list, will be assigned to the Vessels Grid. The table inside the relevant accordion, with the cylinder type, will be populated with the assigned tank. To be able to see the oxygen tank information per vessel it is required to click to one of the table rows of the table named **Vessel List**. The vessel assignment takes into account the constraint regarding the max number of tanks per flag.

An alert is displayed under the registered tanks once the user is trying to register a tank with the same id with a previous registered one or once the user tries to assign a tank to a vessel which has reached the constraint regarding the max number of tanks per flag.