# Core
- Gets configuration from Input system
- Picks assets (shell and components) based on configuration input from the Assets system
- Sends signal to generate asset if needed
- Integrates picked components into the picked shell
- Returns application source code

## Example
```js
const appInfo = {
    "appPath": "/home/user/myApp",
    "appName": "MyApp"
}

const output = core(appInfo);

console.log(output); // '/tmp/myApp'
```

## Input
    - type: JSON
    - properties:
        + appPath
            - description: absolute path of the application
            - type: string

## Output
Returns a <tt>string</tt> that points to the temporary path holding the generated app's source code.