export const web= [
  {
    "question": "Which tag is used to define the root of an HTML document?",
    "options": ["body tag", "head tag", "html tag", "DOCTYPE declaration"],
    "correct": 2,
    "explanation": "The html tag acts as the container for all other HTML elements except the doctype."
  },
  {
    "question": "Scenario: You need to insert a single line break without starting a new paragraph. Which tag is appropriate?",
    "options": ["p tag", "hr tag", "br tag", "break tag"],
    "correct": 2,
    "explanation": "The br tag is used to create a line break (carriage-return) in the text."
  },
  {
    "question": "Which protocol is primarily used to transfer files between a client and a server over a network?",
    "options": ["HTTP", "FTP", "SMTP", "TCP"],
    "correct": 1,
    "explanation": "FTP stands for File Transfer Protocol, specifically designed for file uploads and downloads."
  },
  {
    "question": "Code Task: You see the code (div (p)Hello(/p) (/div)). Which element is the parent?",
    "options": ["p tag", "div tag", "The text Hello", "None of these"],
    "correct": 1,
    "explanation": "The div wraps around the p tag, making the div the parent element."
  },
  {
    "question": "In Web Engineering, which process activity involves checking if the software meets the user's requirements?",
    "options": ["Requirement Elicitation", "System Validation", "Code Refactoring", "Deployment"],
    "correct": 1,
    "explanation": "Validation ensures the 'right' product was built according to the user's needs."
  },
  {
    "question": "Which HTML5 feature is used to draw graphics via JavaScript?",
    "options": ["svg tag", "canvas tag", "graphics tag", "paint tag"],
    "correct": 1,
    "explanation": "The canvas element is a container for script-based 2D or 3D graphics."
  },
  {
    "question": "Which input type is specifically used to allow the user to select a color from a picker?",
    "options": ["type='palette'", "type='hex'", "type='color'", "type='picker'"],
    "correct": 2,
    "explanation": "input type='color' opens the system's native color selection tool."
  },
  {
    "question": "In a table, how do you make a cell span across three rows vertically?",
    "options": ["colspan='3'", "rowspan='3'", "span='3'", "height='3'"],
    "correct": 1,
    "explanation": "The rowspan attribute is used to extend a cell over multiple rows."
  },
  {
    "question": "What is the function of the SMTP protocol?",
    "options": ["Downloading web pages", "Sending email messages", "Managing IP addresses", "Streaming video"],
    "correct": 1,
    "explanation": "SMTP (Simple Mail Transfer Protocol) is the standard for outgoing email transmission."
  },
  {
    "question": "Which tag is used for a thematic break, typically displayed as a horizontal line?",
    "options": ["line tag", "br tag", "hr tag", "div tag"],
    "correct": 2,
    "explanation": "The hr tag represents a horizontal rule or thematic break between content."
  },
  {
    "question": "Tricky Code: What happens if you apply a link to an image like this: (a href='index.html')(img src='logo.png')(/a)?",
    "options": ["The image disappears", "The image becomes clickable and leads to index.html", "The code is invalid", "Only the text below the image links"],
    "correct": 1,
    "explanation": "Wrapping an image in an anchor tag makes the entire image a clickable hyperlink."
  },
  {
    "question": "Which category of web development involves both the user interface and the server-side logic?",
    "options": ["Front-end", "Back-end", "Full-stack", "Database admin"],
    "correct": 2,
    "explanation": "Full-stack developers work on both the client-side (front) and server-side (back)."
  },
  {
    "question": "Which testing is performed to ensure that new code changes haven't broken existing functionality?",
    "options": ["Unit Testing", "Acceptance Testing", "Regression Testing", "Stress Testing"],
    "correct": 2,
    "explanation": "Regression testing checks that old features still work after updates."
  },
  {
    "question": "What is the purpose of the 'alt' attribute in an image tag?",
    "options": ["To set image height", "To show text if the image fails to load", "To link the image", "To create a border"],
    "correct": 1,
    "explanation": "The alt (alternative) text is essential for accessibility and when the source is broken."
  },
  {
    "question": "Which tag is used to create a dropdown selection list?",
    "options": ["list tag", "select tag", "dropdown tag", "input type='list'"],
    "correct": 1,
    "explanation": "The select tag is used alongside option tags to create a dropdown menu."
  },
  {
    "question": "In Web Engineering, which model is best suited for projects where requirements are expected to change frequently during development?",
    "options": ["Waterfall Model", "Agile Method", "Fixed-Spec Model", "Static Approach"],
    "correct": 1,
    "explanation": "Agile focuses on iterative development and flexibility, making it ideal for changing requirements."
  },
  {
    "question": "Which protocol is responsible for breaking data into packets and ensuring they reach the destination in the correct order?",
    "options": ["IP", "HTTP", "TCP", "SMTP"],
    "correct": 2,
    "explanation": "TCP (Transmission Control Protocol) handles packet sequencing and error checking, while IP handles routing."
  },
  {
    "question": "Scenario: A developer needs to display a technical document where white space and line breaks in the code must be preserved exactly as written. Which tag should they use?",
    "options": ["Paragraph tag", "Preformatted tag", "Div tag", "Span tag"],
    "correct": 1,
    "explanation": "The pre tag displays text in a fixed-width font and preserves both spaces and line breaks."
  },
  {
    "question": "Code Analysis: (div style='display:inline')Content(/div). How will this element behave compared to a standard Div?",
    "options": ["It remains a block-level element", "It now behaves like an inline element (e.g., a span)", "It disappears from the page", "It forces a line break after 'Content'"],
    "correct": 1,
    "explanation": "By default, Div is a block element, but CSS can change its behavior to inline."
  },
  {
    "question": "What is the primary difference between a Web Server and a Web Host?",
    "options": ["There is no difference", "A server is the software/hardware that handles requests; a host is the company providing the space", "A host is a type of browser", "A server only stores images"],
    "correct": 1,
    "explanation": "Hosting is the service of providing storage; the server is the actual machine/software processing the HTTP requests."
  },
  {
    "question": "Which HTTP method is considered 'idempotent', meaning multiple identical requests should have the same effect as a single request?",
    "options": ["POST", "GET", "APPEND", "SUBMIT"],
    "correct": 1,
    "explanation": "GET is idempotent because it only retrieves data and does not change the state of the server."
  },
  {
    "question": "Tricky Code: (a href='tel:5551234')Call(/a). What is the specific purpose of the 'tel' prefix?",
    "options": ["It links to a television website", "It triggers the device's phone dialer", "It sends a telegram", "It is an encrypted link"],
    "correct": 1,
    "explanation": "The tel: scheme is used for linking telephone numbers for direct dialing."
  },
  {
    "question": "In the Web Development process, what is 'Requirement Elicitation'?",
    "options": ["Writing the final code", "Gathering information from stakeholders to define what the system must do", "Testing for bugs", "Designing the database schema"],
    "correct": 1,
    "explanation": "Elicitation is the early stage of discovering what the client and users actually need."
  },
  {
    "question": "Which tag is used to create a definition or description list?",
    "options": ["ul tag", "ol tag", "dl tag", "list tag"],
    "correct": 2,
    "explanation": "The dl tag (Description List) is used to wrap groups of dt (terms) and dd (descriptions)."
  },
  {
    "question": "Hard Scenario: A developer wants to ensure that a specific website asset (like a logo) is never cached by the browser to ensure users always see the latest version. Which protocol header is most relevant?",
    "options": ["Content-Type", "Cache-Control", "User-Agent", "Host"],
    "correct": 1,
    "explanation": "Cache-Control headers (like no-cache) tell the browser whether to store a file locally or fetch it fresh."
  },
  {
    "question": "Code Task: (blockquote cite='url')Text(/blockquote). What does the 'cite' attribute provide here?",
    "options": ["A visible caption under the text", "A machine-readable URL for the source of the quote", "A link that the user can click", "The author's name in bold"],
    "correct": 1,
    "explanation": "The cite attribute in a blockquote is for reference metadata and is not usually visible to users."
  },
  {
    "question": "Which activity is part of 'Software Verification'?",
    "options": ["Checking if the user likes the UI", "Ensuring the code conforms to the design specifications", "Selling the software to a client", "Fixing hardware issues"],
    "correct": 1,
    "explanation": "Verification asks: 'Are we building the product right?' (per the specs)."
  },
  {
    "question": "What is the result of using an Iframe tag?",
    "options": ["It creates a new tab", "It embeds another HTML document inside the current page", "It creates a pop-up window", "It is used for internal navigation only"],
    "correct": 1,
    "explanation": "Iframes act as a window into another website or page."
  },
  {
    "question": "Which of these is an 'Inline' element by default?",
    "options": ["Header 1 tag", "Paragraph tag", "Strong tag", "Unordered List tag"],
    "correct": 2,
    "explanation": "Strong is an inline element; it does not start on a new line."
  },
  {
    "question": "Tricky Code: (img src='car.jpg' alt='Blue Sedan' width='100'). If the image is naturally 500px wide, what happens?",
    "options": ["The image is cropped", "The image is scaled down to 100px width", "The browser ignores the 100 attribute", "The image breaks"],
    "correct": 1,
    "explanation": "HTML attributes for width and height will force the browser to scale the image display."
  },
  {
    "question": "What is the primary goal of 'Acceptance Testing'?",
    "options": ["To find syntax errors", "To prove to the customer that the system works as requested", "To test the internet speed", "To see if the server can handle 1 million users"],
    "correct": 1,
    "explanation": "Acceptance testing is the final 'green light' from the user or client."
  },
  {
    "question": "Which tag is used to mark text as no longer correct or relevant with a strike-through?",
    "options": ["strike tag", "u tag", "s tag", "del tag"],
    "correct": 2,
    "explanation": "The s tag is semantic for text that is no longer accurate; del is for text that has been removed from a document."
  },
  {
    "question": "In a 3-tier web architecture, which tier handles the business logic?",
    "options": ["Presentation Tier", "Application/Logic Tier", "Data Tier", "User Tier"],
    "correct": 1,
    "explanation": "The middle tier (Logic Tier) processes the functional requirements of the app."
  },
  {
    "question": "Scenario: You want to jump to a section of your page named 'Contact' when a user clicks a link. How do you code the destination?",
    "options": ["(p name='Contact')", "(p id='Contact')", "(p link='Contact')", "(p class='Contact')"],
    "correct": 1,
    "explanation": "Internal links use the # symbol to target the unique ID of an element."
  },
  {
    "question": "What is 'White-Box Testing'?",
    "options": ["Testing the UI only", "Testing with knowledge of the internal code and logic paths", "Testing on a white screen", "Testing by someone who doesn't know how to code"],
    "correct": 1,
    "explanation": "White-box testers analyze the internal structure and logic of the software."
  },
  {
    "question": "Which protocol is 'Stateless', meaning each request is independent and has no memory of previous requests?",
    "options": ["TCP", "FTP", "HTTP", "SMTP"],
    "correct": 2,
    "explanation": "HTTP is stateless; cookies and sessions are used to add 'state' to it."
  },
  {
    "question": "Hard Code: (a href='file.pdf' download)Click here(/a). What happens when the user clicks?",
    "options": ["The PDF opens in the browser", "The browser prompts the user to save the file locally", "The link breaks", "It prints the PDF"],
    "correct": 1,
    "explanation": "The 'download' attribute forces the browser to download the resource instead of navigating to it."
  },
  {
    "question": "Which tag is used to display a small, fine-print style text (like a copyright notice)?",
    "options": ["tiny tag", "small tag", "sub tag", "footer tag"],
    "correct": 1,
    "explanation": "The small tag is used for side-comments and small print."
  },
  {
    "question": "What is the difference between a 'Static' and 'Dynamic' web page?",
    "options": ["Static uses images; Dynamic does not", "Static content is the same for every user; Dynamic content is generated based on user input or data", "Dynamic pages load faster", "Static pages only work on mobile"],
    "correct": 1,
    "explanation": "Dynamic pages use server-side languages (PHP, Python, etc.) to change content on the fly."
  },
  {
    "question": "In Web Engineering, 'Scalability' refers to what?",
    "options": ["The size of the images", "The ability of the system to handle increasing amounts of work or users", "The price of the software", "The number of pages on the site"],
    "correct": 1,
    "explanation": "Scalability is how well a system adapts to growth."
  }
,
  {
    "question": "Which attribute is used to merge two or more adjacent cells in the same row of a table?",
    "options": ["rowspan", "colspan", "cellspan", "headerspan"],
    "correct": 1,
    "explanation": "Colspan (Column Span) allows a single cell to occupy the space of multiple columns."
  },
  {
    "question": "In an HTML Form, which attribute specifies the URL where the data should be sent after submission?",
    "options": ["method", "target", "action", "enctype"],
    "correct": 2,
    "explanation": "The action attribute defines the destination script or server-side page for the form data."
  },
  {
    "question": "Which input type is best suited for selecting a single option from a list of mutually exclusive choices?",
    "options": ["checkbox", "radio", "select", "text"],
    "correct": 1,
    "explanation": "Radio buttons are designed so that only one option in a group can be selected at a time."
  },
  {
    "question": "Code Task: (table border='1')(tr)(td rowspan='2')A(/td)(td)B(/td)(/tr)(tr)(td)C(/td)(/tr)(/table). Where will cell 'A' appear?",
    "options": ["Only in the first row", "Stretching across two columns", "Stretching across two rows vertically", "It will be hidden"],
    "correct": 2,
    "explanation": "The rowspan='2' attribute makes the cell occupy two vertical rows."
  },
  {
    "question": "What is the purpose of the Label tag in a form?",
    "options": ["To make text bold", "To link a text description to a specific input field for accessibility", "To validate the data", "To submit the form"],
    "correct": 1,
    "explanation": "Labels improve usability by allowing users to click the text to focus the associated input."
  },
  {
    "question": "Which testing technique focuses on the user's perspective to ensure the system fulfills business requirements?",
    "options": ["Unit Testing", "Acceptance Testing", "Integration Testing", "White-box Testing"],
    "correct": 1,
    "explanation": "Acceptance testing (often UAT) verifies if the product is 'acceptable' to the end user or client."
  },
  {
    "question": "Scenario: You need a form field where the user can enter their password securely. Which input type should you use?",
    "options": ["type='text'", "type='hidden'", "type='password'", "type='secure'"],
    "correct": 2,
    "explanation": "type='password' masks the characters as they are typed (usually with dots or asterisks)."
  },
  {
    "question": "Which HTML5 attribute can be added to an input to ensure it is not left empty by the user?",
    "options": ["validate", "required", "placeholder", "autofocus"],
    "correct": 1,
    "explanation": "The required attribute is a boolean attribute that prevents form submission if the field is empty."
  },
  {
    "question": "What is the default 'method' for an HTML Form if none is specified?",
    "options": ["POST", "PUT", "GET", "SEND"],
    "correct": 2,
    "explanation": "Forms default to the GET method, which appends data to the URL."
  },
  {
    "question": "Tricky Code: (input type='checkbox' checked). How will this appear on the page when it loads?",
    "options": ["As a normal empty box", "As a pre-selected (ticked) box", "As a disabled box", "As a radio button"],
    "correct": 1,
    "explanation": "The checked attribute is a boolean that makes the checkbox active by default."
  },
  {
    "question": "In Table terminology, what does 'Cell Padding' refer to?",
    "options": ["Space between table cells", "Space between the cell wall and the content inside it", "The thickness of the border", "The background color"],
    "correct": 1,
    "explanation": "Padding creates internal space within the cell boundaries."
  },
  {
    "question": "Which form element is used to create a multi-line input for comments or messages?",
    "options": ["input type='text'", "textarea tag", "input type='multi'", "fieldset tag"],
    "correct": 1,
    "explanation": "The textarea tag allows for larger blocks of text and is resizable by default."
  },
  {
    "question": "What is 'Black-box Testing'?",
    "options": ["Testing with full knowledge of the code", "Testing the software interface without knowing the internal code structure", "Testing only the database", "Testing a site while the monitor is off"],
    "correct": 1,
    "explanation": "Black-box testing focuses solely on inputs and outputs rather than the internal logic."
  },
  {
    "question": "Which tag is used to define the header of a table column?",
    "options": ["td tag", "tr tag", "th tag", "head tag"],
    "correct": 2,
    "explanation": "The th tag (Table Header) displays text as bold and centered by default."
  },
  {
    "question": "Scenario: You want to restrict an input field so the user can only enter numbers between 1 and 10. Which combination is correct?",
    "options": ["type='number' min='1' max='10'", "type='text' range='1-10'", "type='digit' limit='10'", "type='range' value='10'"],
    "correct": 0,
    "explanation": "The number input type supports min and max attributes for basic validation."
  },
  {
    "question": "What does the 'placeholder' attribute do in an input tag?",
    "options": ["It sets a permanent value", "It shows a temporary hint inside the field before the user types", "It clears the field", "It makes the field read-only"],
    "correct": 1,
    "explanation": "Placeholders provide a short hint describing the expected value of an input field."
  },
  {
    "question": "Which protocol is used by the browser to tell the server what kind of content it can accept (e.g., images, text)?",
    "options": ["HTTP Headers", "TCP Handshake", "FTP Login", "SMTP Command"],
    "correct": 0,
    "explanation": "HTTP Request Headers (like Accept) inform the server about the client's capabilities."
  },
  {
    "question": "Tricky Code: (input type='text' value='Hello' readonly). Can the user change the word 'Hello'?",
    "options": ["Yes, by typing over it", "No, it can be seen but not edited", "Yes, but only if they right-click", "No, it is hidden from the user"],
    "correct": 1,
    "explanation": "The readonly attribute allows users to see and select text but prevents modification."
  },
  {
    "question": "Which table tag is used to group the body content of a table?",
    "options": ["thead tag", "tfoot tag", "tbody tag", "tr tag"],
    "correct": 2,
    "explanation": "tbody is used to wrap the main data rows of a table."
  },
  {
    "question": "In the Web Development process, what is 'System Validation'?",
    "options": ["Checking the code for syntax errors", "Ensuring the system meets the actual needs of the stakeholders", "Optimizing the database", "Buying a domain name"],
    "correct": 1,
    "explanation": "Validation answers: 'Did we build the right system?' based on user expectations."
  },
  {
    "question": "Which input type allows the user to upload a file from their computer?",
    "options": ["type='upload'", "type='file'", "type='browse'", "type='attachment'"],
    "correct": 1,
    "explanation": "The file input type creates a 'Choose File' button."
  },
  {
    "question": "What is the function of the 'Caption' tag in a Table?",
    "options": ["It makes the first row bold", "It provides a title or summary for the table", "It sets the border width", "It links the table to another page"],
    "correct": 1,
    "explanation": "The caption tag should be placed immediately after the opening table tag."
  },
  {
    "question": "Which testing type involves checking if individual units of code work together correctly?",
    "options": ["Unit Testing", "Integration Testing", "Smoke Testing", "Performance Testing"],
    "correct": 1,
    "explanation": "Integration testing identifies issues when different modules or units are combined."
  },
  {
    "question": "Hard Code: (form action='login.php' method='POST'). Where will the data appear when submitted?",
    "options": ["In the URL address bar", "In the HTTP request body (hidden from URL)", "In a text file on the desktop", "In a browser alert"],
    "correct": 1,
    "explanation": "POST sends data inside the request body, making it more secure and suitable for sensitive data than GET."
  },
  {
    "question": "Which tag is used to define a caption for the Fieldset element?",
    "options": ["label tag", "header tag", "legend tag", "title tag"],
    "correct": 2,
    "explanation": "The legend tag provides a title for the grouped elements in a fieldset."
  },
  {
    "question": "What happens if two radio buttons have the same 'name' attribute?",
    "options": ["They both get selected", "Only one can be selected at a time (they form a group)", "The browser ignores them", "They turn into checkboxes"],
    "correct": 1,
    "explanation": "The name attribute groups radio buttons together to ensure mutual exclusivity."
  },
  {
    "question": "Which input type provides a slider control for selecting a value?",
    "options": ["type='number'", "type='range'", "type='slider'", "type='scroll'"],
    "correct": 1,
    "explanation": "input type='range' displays a slider for numerical input."
  },
  {
    "question": "In HTML5, which attribute can provide a pattern (regular expression) for input validation?",
    "options": ["regex", "validate", "pattern", "check"],
    "correct": 2,
    "explanation": "The pattern attribute allows you to define a specific format (like a ZIP code or phone number)."
  },
  {
    "question": "What is the primary purpose of 'Beta Testing'?",
    "options": ["Testing by the original developers", "Testing by a limited group of real users in a real environment before final release", "Testing for security holes", "Testing the speed of the server"],
    "correct": 1,
    "explanation": "Beta testing is the final stage of external testing before a product goes live."
  },
  {
    "question": "Which attribute is used to disable a form element so it cannot be used or clicked?",
    "options": ["stop", "disabled", "off", "hidden"],
    "correct": 1,
    "explanation": "The disabled attribute makes the element unclickable and often grays it out."
  },
  {
    "question": "Code Task: (input type='reset'). What happens when a user clicks this button?",
    "options": ["The form is submitted", "The page reloads", "All form fields are cleared to their default values", "The browser closes"],
    "correct": 2,
    "explanation": "The reset button restores all fields in its parent form to their original state."
  },
  {
    "question": "Which tag is used to define a single option within a Drop-down List?",
    "options": ["list tag", "item tag", "option tag", "choice tag"],
    "correct": 2,
    "explanation": "Option tags are nested inside Select tags to build the menu."
  },
  {
    "question": "What is 'Usability Testing'?",
    "options": ["Testing if the code runs", "Testing how easy and intuitive the website is for a user", "Testing if the site works on Mac", "Testing the database speed"],
    "correct": 1,
    "explanation": "Usability testing focuses on the user experience and ease of navigation."
  },
  {
    "question": "In Table code, what is the 'Cell Spacing' attribute used for?",
    "options": ["Width of the cell", "Space between the borders of adjacent cells", "Space inside the cell", "Font size of the text"],
    "correct": 1,
    "explanation": "Cellspacing defines the gap between individual table cells."
  },
  {
    "question": "Which input type is used for a multi-line input where the user can enter a bio or long description?",
    "options": ["input type='text'", "textarea tag", "input type='paragraph'", "input type='box'"],
    "correct": 1,
    "explanation": "The textarea tag is the correct choice for multi-line text."
  },
  {
    "question": "Which of these is a valid 'type' for a Button tag?",
    "options": ["submit", "reset", "button", "All of the above"],
    "correct": 3,
    "explanation": "Button tags can act as a submit button, a reset button, or a generic clickable button."
  },
  {
    "question": "Scenario: You are building a form and want to automatically focus the 'Username' field when the page loads. Which attribute do you use?",
    "options": ["focus='true'", "autofocus", "select", "start"],
    "correct": 1,
    "explanation": "The autofocus attribute puts the cursor in that specific field as soon as the page is ready."
  },
  {
    "question": "What does 'Static Testing' mean?",
    "options": ["Testing while the server is down", "Testing the code without actually executing it (e.g., code reviews)", "Testing on a mobile device", "Testing a site with no images"],
    "correct": 1,
    "explanation": "Static testing involves reviewing documentation and code logic without running the program."
  },
  {
    "question": "Which attribute is used to give a table cell a background color specifically?",
    "options": ["color", "bg", "bgcolor", "paint"],
    "correct": 2,
    "explanation": "Though CSS is preferred now, the bgcolor attribute was historically used for this."
  },
  {
    "question": "Which tag is used to specify a list of pre-defined options for an input element (Autocomplete)?",
    "options": ["datalist tag", "select tag", "option tag", "list tag"],
    "correct": 0,
    "explanation": "The datalist tag works with the 'list' attribute on an input to provide suggestions."
  },
  {
    "question": "What is the purpose of the 'for' attribute in a Label tag?",
    "options": ["To set the loop", "To bind the label to the ID of an input element", "To set the font", "To validate the input"],
    "correct": 1,
    "explanation": "The 'for' value must match the 'id' of the input it describes."
  },
  {
    "question": "In Web Engineering, 'Sanitization' of input data is primarily done to prevent:",
    "options": ["Slow loading", "Security attacks like SQL Injection or XSS", "Duplicate users", "Broken links"],
    "correct": 1,
    "explanation": "Sanitization removes dangerous characters from user input before processing."
  },
  {
    "question": "Which input type is specifically used to capture a user's email address and provides basic format validation?",
    "options": ["type='text'", "type='mail'", "type='email'", "type='address'"],
    "correct": 2,
    "explanation": "type='email' ensures the user includes an '@' symbol and a domain."
  },
  {
    "question": "What is 'Stress Testing' for a website?",
    "options": ["Testing how the developer handles stress", "Testing the system's behavior under extreme or peak load conditions", "Testing if the site works on a slow PC", "Testing the colors for high contrast"],
    "correct": 1,
    "explanation": "Stress testing pushes the system beyond its normal limits to see where it breaks."
  },
  {
    "question": "Code Analysis: (table)(tr)(td)1(/td)(td)2(/td)(/tr)(/table). How many columns does this table have?",
    "options": ["One", "Two", "Three", "None"],
    "correct": 1,
    "explanation": "There are two td (data) tags inside one tr (row), creating two columns."
  },
  {
    "question": "Which attribute determines the maximum number of characters a user can type into a text field?",
    "options": ["size", "length", "maxlength", "limit"],
    "correct": 2,
    "explanation": "The maxlength attribute restricts the number of input characters."
  },
  {
    "question": "In a Drop-down List (select), how do you allow the user to select more than one option?",
    "options": ["multiple attribute", "multi attribute", "type='checkbox'", "All of the above"],
    "correct": 0,
    "explanation": "The multiple attribute on a select tag enables multi-selection (usually via Ctrl+Click)."
  },
  {
    "question": "What is 'Cross-Browser Testing'?",
    "options": ["Testing if a site works on different operating systems", "Testing if a site looks and functions correctly across different browsers (Chrome, Safari, Firefox)", "Testing if a site is translated into other languages", "Testing the server speed"],
    "correct": 1,
    "explanation": "It ensures a consistent user experience regardless of the browser choice."
  },
  {
    "question": "Which tag is used to create a button that simply triggers a JavaScript function?",
    "options": ["input type='submit'", "input type='reset'", "input type='button'", "All of the above"],
    "correct": 2,
    "explanation": "type='button' does nothing by default until you add a script (like onclick)."
  },
  {
    "question": "What does the 'enctype' attribute in a form do?",
    "options": ["It encrypts the whole website", "It specifies how form-data should be encoded when submitting to the server", "It sets the language", "It blocks viruses"],
    "correct": 1,
    "explanation": "It is essential for forms that upload files (multipart/form-data)."
  },
  {
    "question": "In Web Engineering, 'V-Model' represents what relationship?",
    "options": ["Velocity vs. Volume", "Verification vs. Validation", "Version 1 vs. Version 2", "Virtual vs. Visual"],
    "correct": 1,
    "explanation": "The V-Model maps each development phase directly to a corresponding testing phase."
  },
  {
    "question": "Which table tag defines a group of columns for formatting purposes?",
    "options": ["col tag", "colgroup tag", "colheader tag", "td tag"],
    "correct": 1,
    "explanation": "The colgroup tag allows you to apply styles to entire columns at once."
  },
  {
    "question": "Scenario: You want to hide a sensitive user ID in a form so the user cannot see it, but it still gets sent to the server. Which input type do you use?",
    "options": ["type='password'", "type='hidden'", "type='secret'", "type='invisible'"],
    "correct": 1,
    "explanation": "Hidden inputs are not rendered on the page but are included in the form submission."
  },
  {
    "question": "What is the function of the 'valign' attribute in a table cell?",
    "options": ["Horizontal alignment", "Vertical alignment of the content", "Setting the font", "Validating the data"],
    "correct": 1,
    "explanation": "Valign (top, middle, bottom) controls the vertical position of text inside a cell."
  },
  {
    "question": "Which of these is a client-side validation method?",
    "options": ["SQL check", "HTML5 Required attribute", "PHP logic", "Database query"],
    "correct": 1,
    "explanation": "Client-side validation happens in the browser before the data reaches the server."
  },
  {
    "question": "What does the 'optgroup' tag do in a select menu?",
    "options": ["Creates a new dropdown", "Groups related options together with a non-selectable label", "Makes an option bold", "Deletes an option"],
    "correct": 1,
    "explanation": "It helps organize long dropdown lists into logical categories."
  },
  {
    "question": "Tricky Code: (input type='checkbox' value='Yes'). If the user does NOT check the box and submits the form, what value is sent to the server?",
    "options": ["'Yes'", "An empty string", "Nothing is sent for that field", "'No'"],
    "correct": 2,
    "explanation": "Unchecked checkboxes are not included in the form submission data at all."
  },
  {
    "question": "In Web Engineering, 'Prototyping' is used to:",
    "options": ["Write the final database code", "Create an early, simplified version of the system for feedback", "Finalize the legal contract", "Set up the web server"],
    "correct": 1,
    "explanation": "Prototyping helps stakeholders visualize the system before full development begins."
  },
  {
    "question": "Which input type is used to select a specific date from a calendar picker?",
    "options": ["type='calendar'", "type='date'", "type='time'", "type='day'"],
    "correct": 1,
    "explanation": "type='date' opens a native calendar interface in modern browsers."
  },
  {
    "question": "What is the purpose of the 'tfoot' tag?",
    "options": ["To create a page footer", "To group footer content at the bottom of a table", "To add a footnote to a paragraph", "To set the bottom margin"],
    "correct": 1,
    "explanation": "tfoot is used to summarize table data rows."
  },
  {
    "question": "Which attribute specifies that an input field should be filled out before submitting?",
    "options": ["mandatory", "required", "must", "validate"],
    "correct": 1,
    "explanation": "Required is the standard HTML5 validation attribute."
  },
  {
    "question": "In a table, what is the default horizontal alignment for the 'th' tag?",
    "options": ["Left", "Right", "Center", "Justified"],
    "correct": 2,
    "explanation": "Table headers are centered by default."
  },
  {
    "question": "Scenario: You need a button that clears all the text a user just typed into a long form. Which button type is standard?",
    "options": ["type='clear'", "type='reset'", "type='delete'", "type='undo'"],
    "correct": 1,
    "explanation": "The reset type is built into HTML for this specific purpose."
  },
  {
    "question": "What is 'White-box' testing primarily focused on?",
    "options": ["The user's feelings", "Internal logic and code paths", "The colors of the UI", "Hardware compatibility"],
    "correct": 1,
    "explanation": "White-box testing examines the internal structure of the software."
  },
  {
    "question": "Which tag is used to create a clickable label for a radio button?",
    "options": ["text tag", "label tag", "span tag", "title tag"],
    "correct": 1,
    "explanation": "Label tags make the text clickable, which selects the associated radio button."
  },
  {
    "question": "In the Web Engineering process, what comes after 'Requirement Elicitation'?",
    "options": ["Deployment", "Requirement Specification and Analysis", "Maintenance", "Decommissioning"],
    "correct": 1,
    "explanation": "After gathering requirements, they must be analyzed and formally documented."
  },
  {
    "question": "Which attribute on a text input limits the visible width of the field (in characters)?",
    "options": ["width", "maxlength", "size", "cols"],
    "correct": 2,
    "explanation": "Size affects how wide the input box appears, while maxlength affects how much can be typed."
  },
  {
    "question": "Tricky Code: (table)(tr)(td colspan='3')A(/td)(/tr)(/table). How many cells wide is this row?",
    "options": ["One cell", "Two cells", "Three cells", "Not enough information"],
    "correct": 2,
    "explanation": "The colspan='3' makes that single cell stretch as wide as three normal columns."
  },
  {
    "question": "What is 'Performance Testing'?",
    "options": ["Testing if the developer is working hard", "Evaluating the responsiveness and stability of the site under load", "Testing if the site is funny", "Checking the grammar of the text"],
    "correct": 1,
    "explanation": "It checks speed, reliability, and resource usage."
  },
  {
    "question": "Which input type allows a user to select a time (hours and minutes) without a date?",
    "options": ["type='date'", "type='clock'", "type='time'", "type='hour'"],
    "correct": 2,
    "explanation": "input type='time' is the standard for time selection."
  },
  {
    "question": "What is the default value of the 'type' attribute for a Button element?",
    "options": ["button", "submit", "reset", "none"],
    "correct": 1,
    "explanation": "In most browsers, a button inside a form will try to 'submit' the form by default."
  },
  {
    "question": "Which table attribute is used to define the space between a cell's border and its content?",
    "options": ["cellspacing", "cellpadding", "spacing", "padding"],
    "correct": 1,
    "explanation": "Cellpadding creates 'breathable' space inside the cell."
  },
  {
    "question": "Scenario: You are designing a form where users select their country. Since there are 200 countries, which element is best?",
    "options": ["Radio buttons", "Checkboxes", "Select (Drop-down)", "Text input"],
    "correct": 2,
    "explanation": "A select menu is more compact and organized for long lists of options."
  },
  {
    "question": "What is 'Unit Testing'?",
    "options": ["Testing the whole company", "Testing the smallest testable parts of an application in isolation", "Testing the server room", "Testing on a mobile unit"],
    "correct": 1,
    "explanation": "Unit testing verifies that individual functions or methods work correctly."
  },
  {
    "question": "Which attribute is used to group several inputs together under one name in a form (like radio buttons)?",
    "options": ["id", "class", "name", "group"],
    "correct": 2,
    "explanation": "The name attribute is used to identify the field when data is sent to the server."
  },
  {
    "question": "In Web Engineering, 'Requirement Elicitation' is best described as:",
    "options": ["Writing the user manual", "Gathering system requirements from stakeholders", "Checking for code errors", "Updating the server OS"],
    "correct": 1,
    "explanation": "It is the process of discovering what the customer needs."
  },
  {
    "question": "Which input type is used to choose a specific week and year?",
    "options": ["type='date'", "type='week'", "type='month'", "type='time'"],
    "correct": 1,
    "explanation": "input type='week' is a valid HTML5 input type."
  },
  {
    "question": "What does the 'disabled' attribute do to a form field?",
    "options": ["It hides it", "It makes it un-editable and its value is NOT sent to the server", "It changes the color to red", "It makes the text bold"],
    "correct": 1,
    "explanation": "Disabled fields are ignored during form submission."
  },
  {
    "question": "Which tag is used to create a group of options with a label in a Select element?",
    "options": ["group tag", "optgroup tag", "label tag", "section tag"],
    "correct": 1,
    "explanation": "Optgroup provides a header for a sub-set of options."
  },
  {
    "question": "Scenario: You want to ensure the user enters a valid URL in a form. Which input type should you use?",
    "options": ["type='text'", "type='link'", "type='url'", "type='web'"],
    "correct": 2,
    "explanation": "type='url' provides automatic format validation in modern browsers."
  },
  {
    "question": "What is 'Smoke Testing'?",
    "options": ["Testing if the server is overheating", "A quick test to see if the most crucial functions of a site work after a build", "Testing the site's graphics", "Testing in a room with smoke"],
    "correct": 1,
    "explanation": "Smoke testing ensures the basic 'health' of the application before deeper testing starts."
  },
  {
    "question": "Which table attribute makes the table borders look like a single thin line instead of double lines?",
    "options": ["border-collapse", "border-single", "cellspacing='0'", "No attribute exists"],
    "correct": 0,
    "explanation": "In CSS, border-collapse: collapse; is the modern standard for clean table lines."
  },
  {
    "question": "Which attribute on a Textarea tag defines the visible number of lines (height)?",
    "options": ["rows", "cols", "height", "size"],
    "correct": 0,
    "explanation": "The rows attribute sets the vertical height of the textarea."
  },
  {
    "question": "In Web Engineering, 'Agile' methodology is based on:",
    "options": ["Planning everything at the start", "Continuous improvement and small, iterative releases", "Only one person coding", "Never talking to the customer"],
    "correct": 1,
    "explanation": "Agile is flexible and encourages frequent feedback."
  },
  {
    "question": "Which input type is used to pick a month and year from a picker?",
    "options": ["type='date'", "type='month'", "type='year'", "type='calendar'"],
    "correct": 1,
    "explanation": "input type='month' is used for month/year selection."
  },
  {
    "question": "What is the difference between 'tr' and 'th'?",
    "options": ["tr is a column, th is a row", "tr is a table row, th is a table header cell", "tr is a header, th is a data cell", "There is no difference"],
    "correct": 1,
    "explanation": "Tr defines the row container, while th defines the specific header cell within that row."
  },
  {
    "question": "Scenario: You want to create a form that allows multiple choices to be selected at once (e.g., 'What are your hobbies?'). Which element is best?",
    "options": ["Radio buttons", "Checkboxes", "Text input", "Select with single option"],
    "correct": 1,
    "explanation": "Checkboxes allow users to select multiple independent items."
  },
  {
    "question": "What is 'Acceptance Testing'?",
    "options": ["Testing if the computer accepts the code", "The final stage of testing where the customer confirms the system meets requirements", "Testing if the browser accepts CSS", "Testing the login page"],
    "correct": 1,
    "explanation": "It is the final sign-off by the end-user."
  },
  {
    "question": "Which attribute is used to pre-fill an input field with text that stays there?",
    "options": ["placeholder", "value", "text", "default"],
    "correct": 1,
    "explanation": "The value attribute sets the actual data content of the input."
  },
  {
    "question": "Which tag is used to wrap a group of table rows into a footer section?",
    "options": ["table-footer tag", "tfoot tag", "footer tag", "tr-foot tag"],
    "correct": 1,
    "explanation": "tfoot is the semantic tag for table footers."
  },
  {
    "question": "What is the role of a 'System Analyst' in Web Engineering?",
    "options": ["Writing the CSS", "Bridging the gap between business requirements and technical solutions", "Cleaning the server hardware", "Designing the logo"],
    "correct": 1,
    "explanation": "Analysts ensure that technical builds align with business needs."
  },
  {
    "question": "Which input type allows the user to select a numerical value from a specific range by typing or spinning?",
    "options": ["type='range'", "type='number'", "type='spinner'", "type='text'"],
    "correct": 1,
    "explanation": "type='number' creates a box that usually includes up/down arrows (spinners)."
  },
  {
    "question": "What does 'Requirement Analysis' involve?",
    "options": ["Writing the code", "Studying and refining the gathered requirements to identify conflicts or gaps", "Hosting the website", "Deleting the code"],
    "correct": 1,
    "explanation": "Analysis ensures that the requirements are clear and achievable."
  },
  {
    "question": "Which table attribute defines the thickness of the frame around the table?",
    "options": ["frame", "border", "thickness", "outline"],
    "correct": 1,
    "explanation": "The border attribute defines the outer border width."
  },
  {
    "question": "In a Form, what is the 'target' attribute used for?",
    "options": ["Defining the input field", "Specifying where to display the response after submission (e.g., a new tab)", "Targeting a database", "Checking for errors"],
    "correct": 1,
    "explanation": "For example, target='_blank' opens the submission result in a new tab."
  },
  {
    "question": "Tricky Code: (input type='text' required='false'). Will this field be required?",
    "options": ["No, because it says false", "Yes, because the presence of the word 'required' makes it true", "It will cause an error", "Only if the user types something"],
    "correct": 1,
    "explanation": "In HTML, boolean attributes like 'required' are true if they are present at all, regardless of the value assigned."
  },
  {
    "question": "What is the purpose of the 'novalidate' attribute in a Form tag?",
    "options": ["It skips all server-side validation", "It tells the browser NOT to perform its built-in validation (like checking email formats)", "It makes the form invisible", "It automatically fills the form"],
    "correct": 1,
    "explanation": "Novalidate disables the browser's automatic validation checks."
  },
  {
    "question": "In Web Engineering, 'Integration Testing' specifically looks for errors in:",
    "options": ["A single line of code", "The interaction between two or more combined modules", "The background color", "The internet connection"],
    "correct": 1,
    "explanation": "It tests the 'handshake' between different parts of the system."
  },
  {
    "question": "Which tag is used to create a multi-option select list where several options can be seen at once?",
    "options": ["select multiple", "select size='5'", "Both of the above", "None of the above"],
    "correct": 2,
    "explanation": "Using 'multiple' allows multiple choices, and 'size' determines how many options are visible without scrolling."
  },
  {
    "question": "What is the function of the 'scope' attribute in a 'th' tag?",
    "options": ["Sets the font size", "Specifies whether the header is for a row or a column for accessibility (screen readers)", "Links to a script", "Sets the width of the cell"],
    "correct": 1,
    "explanation": "Scope (row or col) helps assistive technology understand the table structure."
  }
,
  {
    "question": "Which HTML5 semantic tag is used to define independent, self-contained content like a blog post or news story?",
    "options": ["section tag", "article tag", "aside tag", "main tag"],
    "correct": 1,
    "explanation": "The article tag is intended for content that could be distributed independently from the rest of the site."
  },
  {
    "question": "In Web Engineering, which model uses a series of 'cascading' phases where you cannot move to the next phase until the previous one is finished?",
    "options": ["Agile", "Spiral", "Waterfall", "RAD"],
    "correct": 2,
    "explanation": "The Waterfall model is a linear, sequential approach to software development."
  },
  {
    "question": "Which tag is used to embed a video player in a web page?",
    "options": ["media tag", "movie tag", "video tag", "embed tag"],
    "correct": 2,
    "explanation": "The video tag was introduced in HTML5 to allow native video playback without plugins."
  },
  {
    "question": "Scenario: You want to add background music to a page that starts playing automatically. Which attribute is used?",
    "options": ["play", "start", "autoplay", "loop"],
    "correct": 2,
    "explanation": "The autoplay attribute starts media as soon as it is ready, though many browsers block this for audio unless muted."
  },
  {
    "question": "Which element is used to draw 2D graphics and animations on the fly via JavaScript?",
    "options": ["svg tag", "canvas tag", "paint tag", "graphics tag"],
    "correct": 1,
    "explanation": "Canvas provides a resolution-dependent bitmap canvas for script-based rendering of images."
  },
  {
    "question": "What is the primary purpose of the 'aside' tag?",
    "options": ["To place content at the bottom", "To define content that is tangentially related to the content around it (like a sidebar)", "To create a link to another page", "To hide content"],
    "correct": 1,
    "explanation": "Aside is used for sidebars, call-out boxes, or advertising related to the main topic."
  },
  {
    "question": "Which attribute is used in the video tag to show a preview image before the video starts playing?",
    "options": ["preview", "thumbnail", "poster", "src"],
    "correct": 2,
    "explanation": "The poster attribute specifies an image to be shown while the video is downloading or until the user hits play."
  },
  {
    "question": "In Web Engineering, what does 'MTBF' stand for in terms of system reliability?",
    "options": ["Mean Time Between Failures", "Maximum Technical Binary File", "Main Testing Base Framework", "Manual Type Binary Format"],
    "correct": 0,
    "explanation": "Mean Time Between Failures is a key metric for measuring the reliability of a web system."
  },
  {
    "question": "Code Task: (video controls)...(/video). What does the 'controls' attribute do?",
    "options": ["It allows the developer to control the video", "It displays the play, pause, and volume buttons for the user", "It records user interaction", "It speeds up the video"],
    "correct": 1,
    "explanation": "Without the controls attribute, the video will appear as a static image unless triggered by script."
  },
  {
    "question": "Which tag is used to define a footer for a document or a section?",
    "options": ["bottom tag", "end tag", "footer tag", "base tag"],
    "correct": 2,
    "explanation": "The footer tag typically contains authorship information, copyright data, or links to related documents."
  },
  {
    "question": "What is the difference between SVG and Canvas?",
    "options": ["SVG is based on pixels; Canvas is based on math", "SVG uses XML (vectors) and stays sharp when zoomed; Canvas is pixel-based and may get blurry", "SVG is only for text", "There is no difference"],
    "correct": 1,
    "explanation": "SVG (Scalable Vector Graphics) is XML-based and resolution-independent, whereas Canvas is bitmap-based."
  },
  {
    "question": "Which HTML5 tag is used to group 'media' like an image and its 'caption' together?",
    "options": ["group tag", "figure tag", "aside tag", "section tag"],
    "correct": 1,
    "explanation": "The figure tag is used to mark up self-contained content, often with a figcaption."
  },
  {
    "question": "In Web Engineering, 'Software Configuration Management' (SCM) is used to:",
    "options": ["Speed up the internet", "Track and control changes in the software code", "Design the UI", "Buy server hardware"],
    "correct": 1,
    "explanation": "SCM ensures that all changes to the system are documented and reversible (like Version Control)."
  },
  {
    "question": "Which tag is used to define the navigation links of a website?",
    "options": ["links tag", "nav tag", "menu tag", "anchor tag"],
    "correct": 1,
    "explanation": "The nav tag is a semantic element specifically for major blocks of navigation links."
  },
  {
    "question": "Scenario: You need to provide multiple versions of the same video file (like .mp4 and .webm) to ensure all browsers can play it. Which tag do you use inside the video tag?",
    "options": ["src tag", "source tag", "link tag", "file tag"],
    "correct": 1,
    "explanation": "The source tag allows you to specify alternative video/audio files for the browser to choose from."
  },
  {
    "question": "What is 'Requirement Change Management'?",
    "options": ["Ignoring client requests", "A formal process to handle changes to the project requirements after they were agreed upon", "Changing the code daily", "Hiring new developers"],
    "correct": 1,
    "explanation": "It prevents 'Scope Creep' by ensuring every change is analyzed for cost and impact."
  },
  {
    "question": "Which tag is used to represent a scalar measurement within a known range (like disk usage)?",
    "options": ["progress tag", "meter tag", "range tag", "level tag"],
    "correct": 1,
    "explanation": "The meter tag is used for static measurements (like a gauge), while progress is for tasks in motion."
  },
  {
    "question": "Tricky Code: (audio loop)...(/audio). What happens when the audio reaches the end?",
    "options": ["It stops", "It starts playing again from the beginning", "The browser closes", "The volume increases"],
    "correct": 1,
    "explanation": "The loop attribute makes the media repeat infinitely."
  },
  {
    "question": "In Web Engineering, what is a 'User Story'?",
    "options": ["A biography of the user", "A short, simple description of a feature told from the perspective of the user", "The user's password", "A bug report"],
    "correct": 1,
    "explanation": "User stories help developers understand the 'Why' behind a feature."
  },
  {
    "question": "Which HTML5 tag is used to provide a caption for a figure element?",
    "options": ["caption tag", "title tag", "figcaption tag", "legend tag"],
    "correct": 2,
    "explanation": "Figcaption is nested inside the figure tag to describe the image or diagram."
  },
  {
    "question": "What does the 'preload' attribute in a video tag do?",
    "options": ["It plays the video faster", "It tells the browser whether to download the video file when the page loads", "It encrypts the video", "It creates a playlist"],
    "correct": 1,
    "explanation": "Preload can be set to 'auto', 'metadata', or 'none' to save bandwidth."
  },
  {
    "question": "Which element is used to highlight parts of a text (usually resulting in a yellow background)?",
    "options": ["high tag", "mark tag", "strong tag", "b tag"],
    "correct": 1,
    "explanation": "The mark tag is used to highlight text that is relevant in a certain context."
  },
  {
    "question": "What is 'Technical Debt' in web development?",
    "options": ["Money owed to a hosting company", "The future cost of extra rework caused by choosing an easy, messy solution now instead of a better approach", "A loan for a computer", "Unpaid salaries"],
    "correct": 1,
    "explanation": "Technical debt occurs when code is rushed, requiring more work to fix later."
  },
  {
    "question": "Which attribute in a track tag (used inside video) allows for subtitles?",
    "options": ["kind='subtitles'", "type='text'", "src='subs.vtt'", "Both A and C"],
    "correct": 3,
    "explanation": "To show subtitles, you need a track tag with kind set to subtitles and a source file."
  },
  {
    "question": "Which tag is used to define a container for an SVG graphic?",
    "options": ["canvas tag", "svg tag", "vector tag", "image tag"],
    "correct": 1,
    "explanation": "The svg tag is used to embed vector-based graphics directly into HTML."
  },
  {
    "question": "In the Web Development life cycle, what does 'UAT' stand for?",
    "options": ["Unit Automation Testing", "User Acceptance Testing", "Universal Access Tool", "User Account Type"],
    "correct": 1,
    "explanation": "UAT is the phase where actual users test the software to see if it meets their needs."
  },
  {
    "question": "Which tag defines a set of navigation links that are NOT the primary ones (like social media links in the footer)?",
    "options": ["nav tag", "aside tag", "footer tag", "All of these can be used"],
    "correct": 3,
    "explanation": "While nav is for major blocks, footer and aside often contain secondary links."
  },
  {
    "question": "What is 'Interoperability'?",
    "options": ["The ability of two or more systems to exchange information and use it", "The speed of the database", "The number of users on a site", "The security level of a password"],
    "correct": 0,
    "explanation": "Interoperability ensures different software/hardware work together via standards."
  },
  {
    "question": "Which tag is used to display the progress of a task, like a download or upload?",
    "options": ["meter tag", "progress tag", "status tag", "loading tag"],
    "correct": 1,
    "explanation": "The progress tag represents the completion progress of a task."
  },
  {
    "question": "Scenario: You want to embed a map from another website into your page. Which tag is most commonly used for this?",
    "options": ["embed tag", "object tag", "iframe tag", "canvas tag"],
    "correct": 2,
    "explanation": "Iframes are the standard for embedding external interactive content like maps or YouTube videos."
  },
  {
    "question": "What is the function of the 'details' tag in HTML5?",
    "options": ["To show technical specs of the server", "To create an interactive widget that the user can open and close", "To add meta information to the head", "To bold the text"],
    "correct": 1,
    "explanation": "The details tag creates a toggle-able disclosure widget."
  },
  {
    "question": "Which tag is used inside 'details' to provide a visible heading that the user clicks to open the content?",
    "options": ["title tag", "header tag", "summary tag", "caption tag"],
    "correct": 2,
    "explanation": "The summary tag acts as the clickable label for the details element."
  },
  {
    "question": "In Web Engineering, what is 'Refactoring'?",
    "options": ["Adding new features", "Restructuring existing code without changing its external behavior to improve readability or performance", "Deleting the project", "Changing the database to a spreadsheet"],
    "correct": 1,
    "explanation": "Refactoring makes code 'cleaner' without breaking the functionality."
  },
  {
    "question": "Which audio format is most widely supported across all modern browsers?",
    "options": ["WAV", "MP3", "OGG", "MIDI"],
    "correct": 1,
    "explanation": "MP3 is the universal standard for web-based audio playback."
  },
  {
    "question": "What does the 'muted' attribute in a video tag do?",
    "options": ["Turns off the video", "Plays the video without sound", "Lowers the volume", "Blocks the user from speaking"],
    "correct": 1,
    "explanation": "The muted attribute is often required to allow videos to autoplay in modern browsers."
  },
  {
    "question": "Which tag defines the main header for a document or section?",
    "options": ["head tag", "header tag", "top tag", "h1 tag"],
    "correct": 1,
    "explanation": "The header tag is a semantic container for introductory content or navigation links."
  },
  {
    "question": "In Web Engineering, 'Scalability' can be vertical or horizontal. What is 'Horizontal' scalability?",
    "options": ["Making the server taller", "Adding more machines to the network to handle load", "Improving the CPU of a single server", "Adding more RAM"],
    "correct": 1,
    "explanation": "Horizontal scaling (scaling out) involves adding more servers to a system."
  },
  {
    "question": "Which element is used to group several form controls and their labels?",
    "options": ["section tag", "fieldset tag", "div tag", "form tag"],
    "correct": 1,
    "explanation": "Fieldset is specifically designed to group related elements within a form."
  },
  {
    "question": "What is the primary role of the 'main' tag?",
    "options": ["To hold the navigation", "To wrap the unique, central content of the body that is not repeated across pages", "To define the background", "To act as the root of the document"],
    "correct": 1,
    "explanation": "There should only be one visible 'main' tag per page."
  },
  {
    "question": "Scenario: You want to show a math equation in a special font. Which tag (though less common) is designed for mathematical markup?",
    "options": ["math tag", "equation tag", "calc tag", "formula tag"],
    "correct": 0,
    "explanation": "MathML (using the math tag) is the standard for mathematical notations in HTML."
  },
  {
    "question": "Which HTML5 feature allows web applications to run offline by storing data locally?",
    "options": ["Cookies", "Local Storage / IndexedDB", "FTP", "SMTP"],
    "correct": 1,
    "explanation": "Web Storage (Local Storage) allows apps to store large amounts of data in the browser."
  },
  {
    "question": "What is 'Code Review' in the web development process?",
    "options": ["Reading a book about coding", "A systematic examination of source code by other developers to find bugs and improve quality", "Running the code to see if it works", "Selling the code to a client"],
    "correct": 1,
    "explanation": "Code reviews are a part of static testing to ensure high-quality standards."
  },
  {
    "question": "Which tag is used to define a line in an SVG graphic?",
    "options": ["line tag", "path tag", "stroke tag", "draw tag"],
    "correct": 0,
    "explanation": "The line tag in SVG draws a straight line between two points."
  },
  {
    "question": "What does 'Cross-Platform' mean?",
    "options": ["A site that works on both Windows and Linux", "A site that only works on Chrome", "A site that crosses the screen", "A site with two different homepages"],
    "correct": 0,
    "explanation": "Cross-platform software is designed to work on multiple operating systems."
  },
  {
    "question": "Which attribute on an audio tag allows the user to see the play/pause button?",
    "options": ["show", "controls", "buttons", "display"],
    "correct": 1,
    "explanation": "Just like the video tag, audio needs the controls attribute to be visible."
  },
  {
    "question": "In Web Engineering, 'Maintainability' refers to:",
    "options": ["How fast the site is", "How easily the software can be modified to fix bugs or add features", "How much the hosting costs", "How many people visit the site"],
    "correct": 1,
    "explanation": "High maintainability means the code is clean and easy for others to work on."
  },
  {
    "question": "Which tag is used to specify self-contained content, like an image or a diagram, that is referred to from the main text?",
    "options": ["aside tag", "figure tag", "div tag", "section tag"],
    "correct": 1,
    "explanation": "Figure is the semantic way to handle illustrations or photos."
  },
  {
    "question": "Tricky Code: (video src='v.mp4' loop muted autoplay). Will the user hear sound when the page loads?",
    "options": ["Yes, because it is autoplay", "No, because the muted attribute is present", "Only if they click the video", "Only if the video is short"],
    "correct": 1,
    "explanation": "The muted attribute ensures the video is silent."
  },
  {
    "question": "What is the purpose of the 'dialog' tag in HTML5?",
    "options": ["To record audio", "To create a popup box or modal window", "To write a chat transcript", "To set the language of the page"],
    "correct": 1,
    "explanation": "The dialog tag represents a conversation, a window, or an interactive component."
  },
  {
    "question": "In Web Engineering, what is 'Separation of Concerns'?",
    "options": ["Ignoring other developers", "Splitting a program into distinct sections so that each section addresses a separate 'concern' (like HTML for structure, CSS for style)", "Dividing the cost of the project", "Using two different servers"],
    "correct": 1,
    "explanation": "It makes the system easier to manage and update."
  },
  {
    "question": "Which tag is used to draw a circle in SVG?",
    "options": ["round tag", "circle tag", "shape tag", "oval tag"],
    "correct": 1,
    "explanation": "The circle tag uses cx, cy (center) and r (radius) attributes."
  },
  {
    "question": "What is 'Modular Programming'?",
    "options": ["Writing all code in one file", "Breaking a large project into smaller, independent, and interchangeable modules", "Using only mobile devices to code", "Testing the site once a year"],
    "correct": 1,
    "explanation": "Modules can be developed and tested independently, which improves efficiency."
  },
  {
    "question": "Which attribute in a video tag helps the browser decide if it should start downloading the video immediately?",
    "options": ["download", "preload", "buffer", "load"],
    "correct": 1,
    "explanation": "Preload='none' saves bandwidth by not loading the video until the user clicks play."
  },
  {
    "question": "Which tag is used for the time/date content in a machine-readable format?",
    "options": ["clock tag", "time tag", "date tag", "calendar tag"],
    "correct": 1,
    "explanation": "The time tag helps search engines and browsers understand dates and times."
  },
  {
    "question": "In Web Engineering, 'Extreme Programming' (XP) is a type of:",
    "options": ["Security attack", "Agile software development framework", "Hardware upgrade", "Programming language"],
    "correct": 1,
    "explanation": "XP focuses on technical excellence and frequent releases."
  },
  {
    "question": "Which tag represents the 'caption' of a table?",
    "options": ["title tag", "legend tag", "caption tag", "th tag"],
    "correct": 2,
    "explanation": "The caption tag provides a heading for a table."
  },
  {
    "question": "Scenario: You want to show a small window of another website inside your page. Which is the best tag?",
    "options": ["iframe tag", "window tag", "link tag", "embed tag"],
    "correct": 0,
    "explanation": "Iframe (Inline Frame) is specifically for embedding documents."
  },
  {
    "question": "What is 'Code Complexity'?",
    "options": ["The price of the code", "A measure of how difficult the code is to understand and maintain", "How many lines of code there are", "The number of images used"],
    "correct": 1,
    "explanation": "High complexity usually leads to more bugs and harder maintenance."
  },
  {
    "question": "Which tag is used for defining a group of options in a drop-down list?",
    "options": ["optgroup tag", "selectgroup tag", "listgroup tag", "option tag"],
    "correct": 0,
    "explanation": "Optgroup provides a label for a subset of options in a select menu."
  },
  {
    "question": "Which HTML5 tag is used for marking up a sidebar?",
    "options": ["side tag", "aside tag", "section tag", "nav tag"],
    "correct": 1,
    "explanation": "Aside is the standard semantic tag for sidebar content."
  },
  {
    "question": "What is 'Latency' in web performance?",
    "options": ["The amount of data sent", "The time delay between a request and a response", "The width of the screen", "The age of the server"],
    "correct": 1,
    "explanation": "Low latency is critical for a 'fast' feeling website."
  },
  {
    "question": "Which attribute on an input allows you to specify multiple file uploads?",
    "options": ["multi", "multiple", "all", "plus"],
    "correct": 1,
    "explanation": "The multiple attribute on a file input allows selecting more than one file."
  },
  {
    "question": "In Web Engineering, what is 'Software Prototyping'?",
    "options": ["The final product", "An incomplete version of the software used to explore requirements", "A document describing the code", "The process of deleting old code"],
    "correct": 1,
    "explanation": "Prototypes help stakeholders visualize the final product early."
  },
  {
    "question": "Which tag is used to draw a rectangle in SVG?",
    "options": ["box tag", "rect tag", "square tag", "draw tag"],
    "correct": 1,
    "explanation": "The rect tag uses x, y, width, and height attributes."
  },
  {
    "question": "What does the 'controlsList' attribute do in a video tag?",
    "options": ["It lists the videos", "It allows you to hide specific buttons like 'download' or 'fullscreen'", "It speeds up the video", "It changes the color of the buttons"],
    "correct": 1,
    "explanation": "It provides more granular control over the default UI buttons."
  },
  {
    "question": "Which element represents a part of a document that is quoted from another source?",
    "options": ["quote tag", "blockquote tag", "cite tag", "source tag"],
    "correct": 1,
    "explanation": "Blockquote is for long-form quotes from other sources."
  },
  {
    "question": "In Web Engineering, 'RAD' stands for:",
    "options": ["Rapid Application Development", "Random Access Data", "Remote Application Deployment", "Real-time Agile Design"],
    "correct": 0,
    "explanation": "RAD focuses on quick prototyping and fast turnaround."
  },
  {
    "question": "Which tag is used to display a self-contained unit of code?",
    "options": ["script tag", "code tag", "pre tag", "Both B and C"],
    "correct": 3,
    "explanation": "Code is for short snippets; Pre is for maintaining formatting of blocks of code."
  },
  {
    "question": "What is 'Browser Compatibility'?",
    "options": ["Using only one browser", "The ability of a website to function correctly across different web browsers", "Making the browser faster", "Updating the browser"],
    "correct": 1,
    "explanation": "It ensures users have the same experience regardless of using Chrome, Safari, etc."
  },
  {
    "question": "Which tag is used to mark the start of a Ruby annotation (used for Asian typography)?",
    "options": ["ruby tag", "rt tag", "rp tag", "asian tag"],
    "correct": 0,
    "explanation": "The ruby tag is used to show pronunciation for characters in East Asian languages."
  },
  {
    "question": "Which attribute is used to provide an ID for a datalist to link it to an input?",
    "options": ["id", "list", "name", "target"],
    "correct": 0,
    "explanation": "The datalist has an ID, and the input has a 'list' attribute that matches that ID."
  },
  {
    "question": "In Web Engineering, 'Versioning' is part of:",
    "options": ["Web Hosting", "Configuration Management", "UI Design", "SEO"],
    "correct": 1,
    "explanation": "Versioning keeps track of different states of the software over time."
  },
  {
    "question": "Which tag is used to define a container for an interactive plot or drawing in SVG?",
    "options": ["g tag", "plot tag", "canvas tag", "draw tag"],
    "correct": 0,
    "explanation": "The g tag is used to group SVG elements together."
  },
  {
    "question": "What is the 'Viewport'?",
    "options": ["The server's camera", "The visible area of a web page on a user's device", "The code editor window", "A type of database"],
    "correct": 1,
    "explanation": "The viewport varies with the device (mobile vs desktop)."
  },
  {
    "question": "Which tag is used for text that should be treated as a side-comment or small print?",
    "options": ["tiny tag", "small tag", "sub tag", "aside tag"],
    "correct": 1,
    "explanation": "The small tag is used for copyright or legal text."
  },
  {
    "question": "In Web Engineering, what is 'Backlog'?",
    "options": ["A list of old bugs", "A prioritized list of features and tasks to be completed in a project", "The database backup", "The physical back of a server"],
    "correct": 1,
    "explanation": "Product backlogs are central to Agile and Scrum methodologies."
  },
  {
    "question": "Which input type is used to select a specific color?",
    "options": ["type='palette'", "type='color'", "type='hex'", "type='rgb'"],
    "correct": 1,
    "explanation": "input type='color' opens the system color picker."
  },
  {
    "question": "What does 'Minification' of code do?",
    "options": ["Deletes the code", "Removes unnecessary characters (like spaces and comments) to reduce file size and speed up loading", "Makes the font smaller", "Compresses images"],
    "correct": 1,
    "explanation": "Minification is a standard performance optimization for JS and CSS."
  },
  {
    "question": "Which tag is used to define a keyboard input (usually shown in monospaced font)?",
    "options": ["input tag", "kbd tag", "key tag", "code tag"],
    "correct": 1,
    "explanation": "The kbd tag represents user input from a keyboard."
  },
  {
    "question": "Scenario: You want a video to loop forever but also have no sound. Which combination is correct?",
    "options": ["loop muted", "autoplay loud", "controls off", "repeat silent"],
    "correct": 0,
    "explanation": "Loop and Muted are the standard boolean attributes for this."
  },
  {
    "question": "In Web Engineering, 'Functional Requirements' describe:",
    "options": ["How the system looks", "What the system should do (its features and functions)", "The server's speed", "The developer's salary"],
    "correct": 1,
    "explanation": "Functional requirements define the core behaviors of the software."
  },
  {
    "question": "Which tag is used to define a work's title in a citation?",
    "options": ["title tag", "cite tag", "ref tag", "q tag"],
    "correct": 1,
    "explanation": "The cite tag is for creative works like books or research papers."
  },
  {
    "question": "What is 'DNS'?",
    "options": ["Digital Network System", "Domain Name System", "Data Node Storage", "Dynamic Net Script"],
    "correct": 1,
    "explanation": "DNS translates domain names like example.com into IP addresses."
  },
  {
    "question": "Which attribute on the video tag allows you to specify a text track for captions?",
    "options": ["track tag", "text tag", "caption tag", "sub tag"],
    "correct": 0,
    "explanation": "The track tag is used inside audio or video elements."
  },
  {
    "question": "What is 'Accessibility' (a11y) in web design?",
    "options": ["How fast the site is", "Ensuring the site is usable for everyone, including people with disabilities", "Making the site free", "Buying a domain"],
    "correct": 1,
    "explanation": "Accessibility involves using semantic HTML and ARIA roles."
  },
  {
    "question": "Which tag is used to define a thematic grouping of content, typically with a heading?",
    "options": ["div tag", "section tag", "span tag", "aside tag"],
    "correct": 1,
    "explanation": "Section is more semantic than div for grouping related content."
  },
  {
    "question": "In Web Engineering, 'Validation' ensures:",
    "options": ["The code has no errors", "The system satisfies the user's needs", "The server is online", "The CSS is pretty"],
    "correct": 1,
    "explanation": "Validation confirms the requirements are what the user actually wanted."
  },
  {
    "question": "Which tag is used to draw an ellipse in SVG?",
    "options": ["circle tag", "ellipse tag", "oval tag", "shape tag"],
    "correct": 1,
    "explanation": "Ellipse uses cx, cy, rx, and ry attributes."
  },
  {
    "question": "What is 'Deployment'?",
    "options": ["Writing the code", "Moving the finished code from a local environment to a live web server", "Designing the logo", "Testing the database"],
    "correct": 1,
    "explanation": "Deployment makes the website available to the public."
  },
  {
    "question": "Which attribute makes an image map clickable in specific areas?",
    "options": ["map", "usemap", "area", "link"],
    "correct": 1,
    "explanation": "The usemap attribute on an image links it to a map element."
  },
  {
    "question": "What is the purpose of the 'wbr' tag?",
    "options": ["To create a bold line", "To suggest a word break opportunity in long text", "To refresh the page", "To link to a website"],
    "correct": 1,
    "explanation": "It stands for Word Break Opportunity."
  },
  {
    "question": "In Web Engineering, 'Agile' values 'Responding to change' over:",
    "options": ["Following a plan", "Writing code", "Working together", "Testing"],
    "correct": 0,
    "explanation": "The Agile Manifesto prioritizes flexibility over rigid planning."
  },
  {
    "question": "Which tag is used to define the root of an SVG document?",
    "options": ["canvas tag", "svg tag", "image tag", "g tag"],
    "correct": 1,
    "explanation": "Every SVG must start and end with the svg tag."
  },
  {
    "question": "What is 'SEO'?",
    "options": ["Server Engine Optimization", "Search Engine Optimization", "Script Easy Order", "Secure Entry Office"],
    "correct": 1,
    "explanation": "SEO is the practice of increasing the quantity and quality of traffic to your website via search engines."
  },
  {
    "question": "Which tag is used to display a sample output from a computer program?",
    "options": ["output tag", "samp tag", "code tag", "pre tag"],
    "correct": 1,
    "explanation": "The samp tag is used for sample output."
  },
  {
    "question": "In the video tag, what does the 'src' attribute point to?",
    "options": ["The thumbnail image", "The video file path", "The script file", "The subtitles"],
    "correct": 1,
    "explanation": "Src provides the location of the media file."
  },
  {
    "question": "What is 'Technical Documentation'?",
    "options": ["The user manual", "Documents that explain the system's architecture, code, and APIs for other developers", "The legal contract", "The list of prices"],
    "correct": 1,
    "explanation": "Documentation is essential for future maintenance."
  },
  {
    "question": "Which tag is used to define a container for an interactive script (like JS)?",
    "options": ["script tag", "code tag", "java tag", "js tag"],
    "correct": 0,
    "explanation": "The script tag can contain code directly or point to an external file."
  },
  {
    "question": "What is the function of the 'loading' attribute on an image?",
    "options": ["To set image quality", "To enable lazy-loading (loading only when visible on screen)", "To show a spinner", "To rotate the image"],
    "correct": 1,
    "explanation": "loading='lazy' is a modern performance optimization."
  },
  {
    "question": "In Web Engineering, 'Beta Testing' is done by:",
    "options": ["The developers", "A select group of real users", "The CEO", "A computer"],
    "correct": 1,
    "explanation": "Beta testing happens after internal testing and before the full public launch."
  }
]