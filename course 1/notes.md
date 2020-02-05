## web pack bootsrape

there some cach somewhere
in function that i don't kow 
who it's gonna executed 
it's called IIFES (imediatlly invoked function expression) 
so, installedModules is for caching all loaded installedModules

### webpack require
**argument: muduleID**
1) check if module is already cached, if so return his exports properiety
    else
2) create module 
    it's just a object that take the id, l bool that indicate if module has been loaded, object exports
```javascript
{
    i: moduleId,
    l: false,
    exports: {}
}
```
3) execute the module that has been created or extracted from cach
4) set loaded flag to *true*
5) return the module properiety *exports*



## Adding npm Scripts for Environment Builds
compose scripts means run already desclated script using another one
**00:38**

## Passing Variable to Webpack Config
by passing env argument in package.js scripts webpack take the next thing after it and pass it to webpack.config.js you can pass objects as well "prod": "npm run webpack -- --env.mode production" here we pass variable Mode with value production to webpack.config.js
**00:52**

## Passing Variable to Webpack Config
to access to enviarment VAR ,it through the config function Note: it require function config with first ENV as parameter
**00:53**

## Passing Variable to Webpack Config
ENV pattren --env.NameVar value or to save a string in as ENV -env string
**00:53**

## Passing Variable to Webpack Config
for multiple ENV VAR repeat -env
**01:20**

## Webpack Config
we can pass envairement varaibles from CLI to confg.js
**01:33**

## Webpack Config
webpack config could take an object or function
**03:03**

## Adding npm Scripts for Environment Builds
passing argumets to scripts, by first invonking the function then piping to it the next arguments by "--"
**06:42**

## Using Webpack for the First Time
npm scripts is just way to execute code whether is bash code or binary code, and in node_modules there is a folder named ".bin" contain code that responsebal for running all the modules , so by execute the npm script the correspendant binary code will be executed
**00:27**

## Output & Loaders
after webpack create the bondle , the output properiety of webpack.config.js tells where and how we gonna name the result fil
**00:40**

## Adding Watch Mode
by adding "watch" argument to webpack it automatquelly start to recompiler the project when ever a change accure
**01:13**

## Output & Loaders
output tells webpack where and how to distribute bundles
**02:06**

## CommonJS Named Exports
webpack support many type of exportaion 
1. `export nameOfVariable`  
or newDeclaredVariable 
    ```javascript
    export const test="hello world";
    ``` 
2. **commonJs** `module.exports.NameOfVariable`
3. `exports.NameOfVariable`

**03:23**

## CommonJS Named Exports
you could use destructering syntax for quick multi variable export export {...ArrayOfVariables}
**04:23**

## Tree Shaking
webpack.config.js is a object that overwrite webpack default configarition, is also a module so we have to export our custom configs
**02:43**

## Webpack Entry
the entry propriety in webpack.config.js is for telling webpack where to root of the tree should he start to read from
**03:51**

## Output & Loaders
rule means any time a dependensi loaded matches the test a transform or loader gonna apply to it
**04:26**

## Webpack Plugins
diff between plugin and loader?, loader only knows the file that it's procissing,while plugings knows everything about ecosystem it add more functionality to compilation (optimized bundled modules) More powerfull w/ more access to Compiler API. does everything else you would ever want to in webpack
**04:40**

## Output & Loaders
each rule has multiple parameter 

1. `test:` is regulare exprition that will match some modules
2. `use:` the transfermation mechanisme, it could be a **Array|String|Function** for example applay chaine of orders **right to left**
3. `include:`&`exclude:` for example egnore any folder from some directory, ude
**06:19**

## Output & Loaders
ignoring may be the best case to ignore the files not needed in production
**01:46**

## Passing Variable to Webpack Config
just ENV string called single permetive
**01:58**

## Output & Loaders
rules is telling how we gonna treat javascript modules that match the test

## Adding Webpack Plugins
to add labirary in devlopement mode use `--save-dev` so this labirary will not be part of production code

## Splitting Environment Config Files
we can have multiple webpack config parcial objects and depand of
given criteria we merge such requested object with main default config object
libary `webpack-merge` helps to merge objects 

### requiring **parcial** object based on *ENV*
```javascript
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
```
1. `modeConfig` function return an `Object`
2. we require a Module using `${env}` and such Module export by it self as default a `function`
3. invoke the function and we send to it the ENV that contain only the mode

so after invoking `modeConfig` we get a parcial object must be merged with the default one using `webpack-merge` libary

### string helpers
webpack provide string helpers for naming files

* `"[chunkhash].js"` => for generate unique hash 

> ! you should using hashing only in the production

## Using CSS with Webpack
for that we need css loader that could convert css files to work  alongside of Javascript Module 

after creating the Css file and direct (side effect import)  importing it to desire Module 

then a loader must conver it to valide css that works with our Module

so in Webpack config we describe the loader that will handel the CSS files before it's get imported to current Module

```javascript
    {
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use: "css-loader"
                }
            ]
        }
    }
```

but as you can notice the style doesn't get applied, well that because the `css-loader` takes the style and conver it to javascript object

in order to apply the style directly to Module we need to use another loader called `style-loader` which gonna take the style object generated by `css-loader` and add it to index.html


```javascript
    {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
    }
```
> **Note**: webpack use the `Array` of loaders from right to the left

## Hot Module Replacement with CSS

## Presets
it's enable us to adding a quick webpack config with high prerioty just by passing the presets flag to EVN 
like quick js formatter, or tester 
but it must be **completelly optionnal**

usecases: 
* bundle size
* analyer
* compress files
* remplace all 
* delete comments
* list all todos

## Source-Map
code associate with devtool which provide a way to browser all javascript modules and debugging them, super helpful when trying to figur out where error has been accure, even in production

```javascript
// webpack config
{
    devtool: "source-map"
}
```

although `source-map` is slow according to [webpack](https://webpack.js.org/configuration/devtool/)

>the best `devtool` in **production** is `nosources-source-map` it hide the source but shows the tree, in other trem the path of when  errors accures will be showen 

## Lazy Loading
load a module using function, and when ever it get invoked it return the module

```javascript 
const loadModule = ()=>{
    return import("./path/2/module");
}
```
`loadModule` returns a promise contain the Module object

>**Module object** will contain all exports and the key of default one is `"default"`

