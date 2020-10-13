## Extractify

### Preview

![Alt Text](Extractify.gif)

### Problem Description

1. The user can access a web application with a button to upload a PDF and a SUBMIT button.
2. When the user clicks on the SUBMIT button, send the PDF to the server for processing.
3. Once the processing finishes, display the extracted text of the PDF.
4. The text should appear in the middle of the web page, positioned inside a scrollable text area.
5. If you upload multiple PDFs, every next PDF should appear underneath the previous one.
6. Every time the user opens the application, they should be able to see all the previously
   uploaded PDFs from this browser.

### Technical  Requirements

1. React or Vue for the web app.
2. Any library of your choice for the PDF to text extraction.
3. Recommended: Firebase project with cloud functions for the backend where the PDF
   processing happens.
4. Recommended: Firestore for database.
5. Recommended: Firebase or Google Cloud storage for storing the PDF file(s).
6. Support multiple PDFs upload, running asynchronously

### Developed the project in two independent modules:

1. front-end --> The front end made using React, Redux, Axios.

2. backend-api --> The back-end made using NodeJs, Express.

   

### Project assumptions

- Keep it simple with minimum files

- Use Bootstrap to make it standout

- Ensure its components are loosely coupled

### Project features   

##### Critical feature

W.I.P ==> work in progress

1. The user can access a web application with a button to upload a PDF and a SUBMIT button.
   - [x] Front end home page --[done]
   - [x] Form that accept a file--[done]
   - [x] Accept multiple file and display them back--[done]
   - [x] Submit button of finishing file selection--[done]
   - [ ] Delete selected files from the list --[W.I.P]
   - [ ] Validate file input to file only--[W.I.P]
2. When the user clicks on the SUBMIT button, send the PDF to the server for processing. 
   - [x] Submit button that accept a submit click event--[done]
   - [x] Submit the file to the server for processing--[done]
   - [x] Upload the selected file to an upload folder for processing and access--[done]
   - [x] Allow multiple file--[done]
   - [x] Process the PDF into text and store the name, text and file path in an object--[done]
3. Once the processing finishes, display the extracted text of the PDF.
   - [x] Post the text to the fire-store database --[done]
   - [x] Post the file to the fire-store bucket as a repository --[done]
   - [x] Notify the user that the data process status --[done]
4. The text should appear in the middle of the web page, positioned inside a scrollable text area. 
   - [x] Fetch the text and name from the database --[done]
   - [x] Send text and file to the front end for display--[done]
5. If you upload multiple PDFs, every next PDF should appear underneath the previous one.
   
   - [x] Arrange the data based on first came first to be displayed bases, with the latest on top--[done]
6. Every time the user opens the application, they should be able to see all the previously uploaded PDFs from this browser.
   
   - [x] Fetch on load, populate the state/store--[done]
###  Setup

backend-ap --> 

1. cd into the folder

2. cd into function folder

3. run npm install

4. run npm run serve

   NB: You will need to setup firebase and firestore on your side to work with it, the setup file that need changes is the server.js. 

front-end --->

1.  cd into the folder 
2. run yarn install
3. run yarn start to start a local server