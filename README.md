# lauries-react-app

## Setup
Nice an easy, just open the project or run a terminal from the root folder and do: 

```npm install```

and the package.json will do it's thing

There shouldn't be any other settup required besides having NPM and Node installed

## Running the build
Once again, nice an an easy just

```npm run start```

This should open a new tab in your browser pointed at ```http://localhost:8080/``` after it has compiled all the code, html and css

## How To Play
### Login
There are 4 valid logins (which can also be found in the login.js file)

```
{
    email: '1@1',
    password: '1'
},
{
    email: 'laurie.athey@outlook.com',
    password: 'employee_of_the_year'
},
{
    email: 'laurie.earned.this.job@zonal.com',
    password: 'YouKnowItsTrue!'
},
{
    email: 'something.witty@my.future.employer.com',
    password: 'hire_me_if_you_grinned!'
}
```

Enter any of the above email / password combinations listed and hit the login button to go to the products page.

### Products
The products page has more going on.
#### The Add Button
The add button toggles a section for adding a new product
#### The Logout Button
The logout button un-auths the user and sends them back to the login page.


#### The Edit Button
The edit button allows you to edit all the values in that row, click confirm or cancel to confirm or cancel.
#### The Remove Button
The remove button will delete that row.
