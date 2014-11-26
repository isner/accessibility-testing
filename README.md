# Accessibility Testing

Playground for testing accessibility design patterns. Makes it convenient to add new examples and display the associated markup to colleagues.

Requires [nodejs](http://nodejs.org) to rebuild the testing view with your own examples.

## Instructions

### Option 1: View existing examples

Open `index.html` in your browser.

### Option 2: Build the testing page with your own examples

#### 1. Get the project

```bash
# Clone this repository
git clone https://isner/accessibility-testing.git
# Install npm modules
$ npm i
```

#### 2. Create your own examples

For each example you wish to add, create a new `.html` file which contains the example markup you wish to test. The file need not contain any wrapper or heading - just the code you wish to test.

The filename will be converted to a heading for the example, so put some thought into your filename. For example, `datepicker-widget.html` will be displayed under the heading "Datepicker widget" on the testing page.

Add each example file to the `/examples` directory of the project.

#### 3. Build the testing page

```bash
node build
```

Open `index.html` in your browser

## TODOs

- Allow nested directories within `/examples`, and refactor the build to display the contents of these directories as categories of examples.
- During the build, regenerate element ids (as well as other elements' attributes with a value matching that id) to avoid the possibility of duplicate ids occurring after numerous examples are added by different users.
