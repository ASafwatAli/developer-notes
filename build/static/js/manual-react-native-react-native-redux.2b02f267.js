(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{"./manual/React-Native/React-Native-Redux.md":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return r});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i={},c="wrapper";function r(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(c,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-native-with-redux"},"React Native with Redux"),Object(a.b)("p",null,"Now that ReduxThunk is set up, we can use it inside an action creator."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"// Action Creators\nexport const selectAction = ({ email, password }) => {\n    return (dispatch) -> {\n        firebase.auth().signInWithEmailAndPassword(email, password)\n            .then(user => console.log(user))\n    };\n};\n")),Object(a.b)("p",null,"So, what is ReduxThunk doing for us?"),Object(a.b)("p",null,"Now that we have ReduxThunk, it will change how we call the action creator."),Object(a.b)("p",null,"The Action Creator ",Object(a.b)("inlineCode",{parentName:"p"},"WILL NOW RETURN A FUNCTION"),". If ReduxThunk sees a function returned, it will send off an action with a dispatcher and immediately call that function."),Object(a.b)("p",null,"This will then start our login request. The app will wait and the .then will automatically run and we will then dispatch our action."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"// Action Creators\nexport const selectAction = ({ email, password }) => {\n    return (dispatch) -> {\n        firebase.auth().signInWithEmailAndPassword(email, password)\n            .then(user => {\n                dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });\n            });\n    };\n};\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"dealing-with-navigation"},"Dealing with Navigation"),Object(a.b)("p",null,"As opposed to React with ",Object(a.b)("inlineCode",{parentName:"p"},"React-Router"),", React Native doesn't necessarily have one."),Object(a.b)("p",null,"In this case, we'll be using the solution called ",Object(a.b)("inlineCode",{parentName:"p"},"React-Native-Router-Flux")," to help with navigation."),Object(a.b)("p",null,"How does it work?"),Object(a.b)("p",null,"Imagine an app that requires authentication. We could then have another scene where the is a Master-Detail relationship."),Object(a.b)("p",null,"We essentially define a ",Object(a.b)("inlineCode",{parentName:"p"},"Scene")," for each distinct screens. For example."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<Scene key="login" component={LoginForm} />\n<Scene key="employeeList" component={EmployeeList} />\n<Scene key="employeeDetail" component={EmployeeDetail} />\n\n// All the props you can pass to the scene\n\n<Scene\n    key="login"                 // call Actions.login() to show this screen\n    component={LoginForm}       // component to show\n    title="Login"               // make nav bar and give it a title - this is built in\n    initial                     // define the first screen to show\n/>\n')),Object(a.b)("h2",{id:"navigation-in-the-router"},"Navigation in the Router"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"// Create a router.js\n\nimport React from 'react';\nimport { Scene, Router } from 'react-native-router-flux';\n\n// scene-target\nimport ExampleComponent from './components/examplecomponent/ExampleComponent';\nimport Table from './components/table/Table';\n\nconst RouterComponent = () => {\n    return (\n        <Router>\n            <Scene key=\"example\" component={ExampleComponent} title=\"App\" />\n            <Scene key=\"table\" component={Table} title=\"Table\" initial />\n        </Router>\n    );\n};\n\nexport default RouterComponent;\n\n// in app.js\n\n...\nimport Router from './router';\n\nconst App = () => {\n\n    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));\n\n    return (\n        <Provider store={store}>\n            <Router />\n        </Provider>\n    );\n}\n\nexport default App;\n")),Object(a.b)("p",null,"So how do we move between these scenes?"),Object(a.b)("h2",{id:"navigating-between-routes"},"Navigating between routes"),Object(a.b)("p",null,"Navigation will happen from an action."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"// import actions\nimport { Actions } from 'react-native-router-flux';\n\n// Action Creators\nexport const loginUserSuccess = (dispatch, user) => {\n    dispatch({\n        type: LOGIN_USER_SUCCESS,\n        payload: user\n    });\n\n    Actions.employeeList(); // this method comes from the key property\n};\n")),Object(a.b)("h2",{id:"grouping-scenes-with-buckets"},"Grouping Scenes with 'Buckets'"),Object(a.b)("p",null,"Making decisions on how the header should render."),Object(a.b)("p",null,"We can do ",Object(a.b)("inlineCode",{parentName:"p"},"scene nesting")," to group these screens. There is one 'gotcha' though. Now for the actions, we need to actually use Actions.main()."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'// router.js\n\nconst RouterComponent = () => {\n    return (\n        <Router>\n            <Scene key="auth">\n                <Scene key="login" component={Login} title="Login" />\n            </Scene>\n            <Scene key="flow">\n                <Scene key="example" component={ExampleComponent} title="App" />\n                <Scene\n                    // for action, you normally call Actions.key()\n                    onRight={() => console.log(\'right!!!\')}\n                    rightTitle="Add"\n                    key="table"\n                    component={Table}\n                    title="Table"\n                    initial\n                />\n            </Scene>\n        </Router>\n    );\n};\n')),Object(a.b)("p",null,"We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"initial")," prop within these ",Object(a.b)("inlineCode",{parentName:"p"},"buckets")," to let which component within a bucket to have an initial prop"),Object(a.b)("h2",{id:"actions-to-navigate-between-buckets"},"Actions to navigate between buckets"),Object(a.b)("p",null,"These actions can be added using"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"import { Actions } from 'react-native-router-flux';\n\n// Action Creators - exammple thunk action creator\nconst loginUserSuccess = (dispatch, user) => {\n    dispatch({\n        type: LOGIN_USER_SUCCESS,\n        payload: user\n    });\n\n    Actions.employeeList();\n}\n")),Object(a.b)("h2",{id:"form-updates-at-a-reducer-level--dynamic-property-updates"},"Form updates at a reducer level / Dynamic Property updates"),Object(a.b)("p",null,"Example reducer function with ES6 dynamic change."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"export default (state = INITIAL_STATE, action) => {\n    switch (action.type) {\n        case EMPLOYEE_UPDATE:\n            return {...state, [action.payload.prop]: action.payload.value};\n        default:\n            return state;\n    }\n}\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"manual/React-Native/React-Native-Redux.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=manual-react-native-react-native-redux.101a1afd2417ec7a4a77.js.map