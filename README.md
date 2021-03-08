# Movatic

This application is designed to use the MDS data feed that shows the information on the stations in a system. 
Here is the link to the MDS data feed that is used in this demo: 
<https://github.com/NABSA/gbfs/blob/v2.0/gbfs.md>


Implementation plan:
These are the steps that I followed to complete this project.
1. Research about what is MDS and GBFS and the relation between these two projects.
2. Design and implement the front-end with React and the back-end with Flask, and conteinarize the application with Docker
3. Make the request with Flask to the API data feed provided for the demo. See the link above.
4. Building the table component with the library 'react-table', building the routers of the application, and building the detail page. 
5. Filtering the data received throught the API according to the data that is displayed to the user. 

Technology Use
- ✅ React
- ✅ Flask
- ✅ Docker
- ✅ Git

What are the next steps for this project

1. Displayed a list of all the providers to the user. 
2. Allow the user to see the stations of the system selected.
3. Customize each provider according to their information. 

**1. Build the container**

```bash
make build-dev
```

**2. Run**

```bash
make run-dev
```

After this, App will be exposed by default  at `http://localhost:3000`.

**3. Stop**

```bash
make stop
```