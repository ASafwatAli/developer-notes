(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{eure:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/React/State-Management-In-Pure-React.md"}});var c={_frontmatter:s},i=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"state-management-in-pure-react"},"State Management in Pure React"),Object(a.b)("p",null,"This course looks deep into understanding state, the inner workings of ",Object(a.b)("inlineCode",{parentName:"p"},"this.setState"),", exploring APIs to navigate around prop-drilling, reducers for advanced state management, write custom hooks, store state in local storage, store state in URL query params and fetch from a server."),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://frontendmasters.com/courses/pure-react-state/"}),"FE Masters Course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://speakerdeck.com/stevekinney/react-state"}),"Slides")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/stevekinney/react-state-management"}),"GitHub resource for course")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/stevekinney/grudges-react-state"}),"Github code for Grude list")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/stevekinney/star-wars-characters-react-state"}),"Star Wars character state")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://nikgraf.github.io/react-hooks/"}),"Collection of React Hooks"))),Object(a.b)("h2",{id:"types-of-state"},"Types of State"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Model data: nouns in application"),Object(a.b)("li",{parentName:"ol"},"View/UI state: Are those nouns sorted in ascending or descending order?"),Object(a.b)("li",{parentName:"ol"},"Session state: Is the user logged in?"),Object(a.b)("li",{parentName:"ol"},"Communication: Are we in the process of fetching the nouns from the server?"),Object(a.b)("li",{parentName:"ol"},"Location: Where are we in the application? Which nouns are we looking at?")),Object(a.b)("h2",{id:"setstate--class"},"setState & Class"),Object(a.b)("p",null,"This warm up just looks at the old ",Object(a.b)("inlineCode",{parentName:"p"},"setState")," with class components that we know."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { Component } from 'react';\nimport { render } from 'react-dom';\n\nimport './styles.scss';\n\nclass Application extends Component {\n  state = { count: 0 };\n\n  increment = () => {\n    this.setState({\n      count: this.state.count + 1,\n    });\n  };\n\n  decrement = () => {\n    this.setState({\n      count: this.state.count - 1,\n    });\n  };\n\n  render() {\n    const { count } = this.state;\n\n    return (\n      <main className=\"Counter\">\n        <p className=\"count\">{count}</p>\n        <section className=\"controls\">\n          <button onClick={this.increment}>Increment</button>\n          <button onClick={this.decrement}>Decrement</button>\n        </section>\n      </main>\n    );\n  }\n}\n\nrender(<Application />, document.getElementById('root'));\n")),Object(a.b)("p",null,"While different when it comes to hooks, React will batch up ",Object(a.b)("inlineCode",{parentName:"p"},"setState")," calls to avoid unnecessary re-renders."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"setState")," also runs asynchronously - important to know!"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"setState")," also allows you to pass in a function that enables you to ensure there is no batching. That function can take arguments ",Object(a.b)("inlineCode",{parentName:"p"},"(state, props)"),". This helps us to abstract functions that can reused everywhere."),Object(a.b)("p",null,"Finally, there is a callback that you can pass as a second argument to ",Object(a.b)("inlineCode",{parentName:"p"},"setState")," that allows you to fire a function after the change. This is useful for when you are breaking encapsulation or need to pass data back to a parent after the change."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Fun tidbit that came up is that arrow function methods are not supported natively without a Babel plugin.")),Object(a.b)("h2",{id:"setstate-patterns-and-anti-patterns"},"setState Patterns and Anti-Patterns"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Setting initial state by combining two different props - just add props as you need them."),Object(a.b)("li",{parentName:"ol"},"Don't use state for things that won't be rendered - example was this constantly polled endpoint.")),Object(a.b)("h2",{id:"hooks-state"},"Hooks State"),Object(a.b)("p",null,"This gives a way to manipulate state in functional components. With this we don't have to worry about event binding. This is not disimilar to ",Object(a.b)("inlineCode",{parentName:"p"},"setState")," asynchronous call."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const [count, setCount] = React.useState(0);\n\nconst increment = () => setCount(count + 1);\nconst decrement = () => setCount(count - 1);\nconst reset = () => setCount(0);\n")),Object(a.b)("p",null,"We can also take a function for this ie ",Object(a.b)("inlineCode",{parentName:"p"},"setCount(c => c + 1)"),". This does not get a prop as a second argument. That means we can still pull out the function as long as we don't need access to props."),Object(a.b)("p",null,"Here, we also need to pass something tangible back ie no ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," returns from the callback."),Object(a.b)("p",null,"We don't have a callback, but we can now use ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," as a replacement."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const [count, setCount] = React.useState(0);\n\nconst increment = () => setCount(count + 1);\nconst decrement = () => setCount(count - 1);\nconst reset = () => setCount(0);\n\nuseEffect(() => {\n  document.title = `Counter: ${count}`;\n}, [count]);\n\n// this second effect is an example of an effect for local storage\nuseEffect(() => {\n  storeStateInLocalStorage(count);\n}, count);\n")),Object(a.b)("p",null,"Note: if you don't give ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," a second parameter, it will run on every render."),Object(a.b)("p",null,"If you give one, it gives dependencies where the effect will only run when there is a change to the dependency."),Object(a.b)("h3",{id:"making-an-hooks-abstraction"},"Making an hooks abstraction"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// this is an abstraction for React.useState\nconst useLocalStorage = (initialState, key) => {\n  const get = () => {\n    const storage = localStorage.getItem('counterState');\n    if (storage) return JSON.parse(storage)[key];\n    return initialState;\n  };\n\n  const [value, setValue] = useState(get());\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify({ value }));\n  }, value);\n\n  return [value, setValue];\n};\n")),Object(a.b)("p",null,"This makes things a bit more useable across the app:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const Counter = () => {\n  const [count, setCount] = useLocalStorage(0, 'count');\n  // Rest removed for brevity\n};\n")),Object(a.b)("h2",{id:"persisting-state--useref"},"Persisting State & useRef"),Object(a.b)("p",null,"In the case of the function components, we have a unique call of the function each time which will give a different copy of the state and props."),Object(a.b)("p",null,"Using a reference is a way for us to persist a previous value in our function components."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const Counter = () => {\n  const [count, setCount] = useLocalStorage(0, 'count');\n  const countRef = React.useRef();\n\n  let message = '';\n  if (countRef.current < count) message = 'Higher';\n  if (countRef.current > count) message = 'Lower';\n\n  // the only way to update the current reference\n  countRef.current = count;\n  // Rest removed for brevity\n};\n")),Object(a.b)("h2",{id:"useeffect--cleanup"},"useEffect & Cleanup"),Object(a.b)("p",null,"In this example, we see that there is always a new interval called when the useEffect runs:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"useEffect(() => {\n  setInterval(() => {\n    console.log(`Count: ${count}`);\n  }, 1000);\n}, [count]);\n")),Object(a.b)("p",null,"The above has no cleanups. No bueno. Those suttle things will come to bite us. To avoid this:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"useEffect(() => {\n  const id = setInterval(() => {\n    console.log(`Count: ${count}`);\n  }, 1000);\n  // this will give a callback where we can cleanup\n  // after itself for each effect\n  return () => clearInterval(id);\n}, [count]);\n")),Object(a.b)("h2",{id:"reducers"},"Reducers"),Object(a.b)("p",null,"React these days have a ",Object(a.b)("inlineCode",{parentName:"p"},"useReducer")," which takes a simplified version of what Redux does."),Object(a.b)("p",null,"React state needs immutable objects everytime. If you mutate an object or array, it is the same object in memory - React can't tell the difference. We know this already from the prominent use of passing new arrays and objects with the spread operator."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The example used is what happens when we update parent state for one child and all the children re-rendering needlessly.")),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," is a function that takes two arguments. It takes two arguments: 1. The current state of the world (state) and 2. The thing that happened (action)."),Object(a.b)("p",null,"It takes these two things and pipes out a resolved new state of the world."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const initialState = {};\n\nconst reducer = (state, action) => {\n  if (action.type === TYPE) {\n    // this assumes state is just an array for a list etc\n    return [action.payload, ...state];\n  }\n  return state;\n};\n\n// code to run\nconst Component = () => {\n  const [dataNamedWhatever, dispatch] = useReducer(reducer, initialState);\n  const actionToDo = mutation => {\n    dispatch({\n      type: TYPE,\n      payload: mutation,\n    });\n  };\n};\n")),Object(a.b)("p",null,"The benefit of this is that is becomes super easy to unit test. This means we don't need to worry about mounting components to do so."),Object(a.b)("p",null,"Steve mentions that his preference is to not use a switch statement."),Object(a.b)("h2",{id:"reactmemo--usecallback"},"React.memo & useCallback"),Object(a.b)("p",null,"At this point, what we want to do is tell React not to rerender if nothing has changed."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.memo")," simply takes a function component, and if it has the same props, simply don't rerender it."),Object(a.b)("p",null,"We also have ",Object(a.b)("inlineCode",{parentName:"p"},"useCallback")," and ",Object(a.b)("inlineCode",{parentName:"p"},"useMemo"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useMemo")," will call a function and if the dependencies haven't changed, it will not call the function again."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useCallback")," will give you a new memoized function that you can call. It changes only if one the dependencies has changed."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const initialState = {};\n\nconst reducer = (state, action) => {\n  if (action.type === TYPE) {\n    // this assumes state is just an array for a list etc\n    return [action.payload, ...state];\n  }\n  return state;\n};\n\n// code to run\nconst Component = () => {\n  const [dataNamedWhatever, dispatch] = useReducer(reducer, initialState);\n  const actionToDo = mutation => {\n    dispatch({\n      type: TYPE,\n      payload: mutation,\n    });\n  };\n};\n")),Object(a.b)("p",null,"If we wrap our ",Object(a.b)("inlineCode",{parentName:"p"},"NewGrudge")," with ",Object(a.b)("inlineCode",{parentName:"p"},"React.memo"),", then it will check"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'const Component = () => {\n  const [dataNamedWhatever, dispatch] = useReducer(reducer, initialState);\n  // this changes to make sure the function is memoized and only changes\n  // if value of "mutation" changes\n  const actionToDo = useCallback(\n    mutation => {\n      dispatch({\n        type: TYPE,\n        payload: mutation,\n      });\n    },\n    [dispatch],\n  );\n};\n\nconst List = React.memo(({ onSubmit }) => {\n  // rest of code\n});\n')),Object(a.b)("p",null,"If we get the same function every time, we don't really need to rerender. This works because now our ",Object(a.b)("inlineCode",{parentName:"p"},"useCallback")," only depends on ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," and not the ",Object(a.b)("inlineCode",{parentName:"p"},"mutation")," value."),Object(a.b)("h2",{id:"prop-drilling--context-api"},"Prop Drilling & Context API"),Object(a.b)("p",null,'The aim of Context API is to be "hey, I want the state to be available around the place so that I can hook into".'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"An interesting question that come up about Redux out of the box. Redux comes with middleware out of the box, ",Object(a.b)("inlineCode",{parentName:"p"},"useReducer")," does not. Redux has ",Object(a.b)("inlineCode",{parentName:"p"},"combinedReducers"),", others do not. The tradeoff is with you need them and whether you use what you write vs what is battle tested etc.")),Object(a.b)("h3",{id:"creating-a-context-provider"},"Creating a Context Provider"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"React.createContext()")," will give you a ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"Consumer"),". If you use hooks, you might be able to get away without using the consumer."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nconst SuperCoolContext = React.createContext();\n\nSuperCoolContext.Provider;\nSuperCoolContext.Consumer;\n\n// in use (this uses the Render Prop pattern)\nconst App = () => (\n  <SuperCoolContext.Provider value={0}>\n    <SuperCoolContext.Consumer>\n      {value => <p>{value}</p>}\n    </SuperCoolContext.Consumer>\n  </SuperCoolContext.Provider>\n);\n")),Object(a.b)("p",null,"The example given ends up pulling all the reducer actions into a ",Object(a.b)("inlineCode",{parentName:"p"},"GrudgeContext.js")," file with the reducer."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React, { useReducer, createContext, useCallback } from 'react';\nimport initialState from './initialState';\nimport id from 'uuid/v4';\n\nexport const GrudgeContext = createContext();\n\nconst GRUDGE_ADD = 'GRUDGE_ADD';\nconst GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';\n\nconst reducer = (state = [], action) => {\n  if (action.type === GRUDGE_ADD) {\n    return [\n      {\n        id: id(),\n        ...action.payload,\n      },\n      ...state,\n    ];\n  }\n\n  if (action.type === GRUDGE_FORGIVE) {\n    return state.map(grudge => {\n      if (grudge.id === action.payload.id) {\n        return { ...grudge, forgiven: !grudge.forgiven };\n      }\n      return grudge;\n    });\n  }\n\n  return state;\n};\n\nexport const GrudgeProvider = ({ children }) => {\n  const [grudges, dispatch] = useReducer(reducer, initialState);\n\n  const addGrudge = useCallback(\n    ({ person, reason }) => {\n      dispatch({\n        type: GRUDGE_ADD,\n        payload: {\n          person,\n          reason,\n        },\n      });\n    },\n    [dispatch],\n  );\n\n  const toggleForgiveness = useCallback(\n    id => {\n      dispatch({\n        type: GRUDGE_FORGIVE,\n        payload: {\n          id,\n        },\n      });\n    },\n    [dispatch],\n  );\n\n  return (\n    <GrudgeContext.Provider value={{ grudges, addGrudge, toggleForgiveness }}>\n      {children}\n    </GrudgeContext.Provider>\n  );\n};\n")),Object(a.b)("p",null,"And so the demo ",Object(a.b)("inlineCode",{parentName:"p"},"Application.js")," file becomes slim:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport Grudges from './Grudges';\nimport NewGrudge from './NewGrudge';\n\nconst Application = () => {\n  return (\n    <div className=\"Application\">\n      <NewGrudge />\n      <Grudges />\n    </div>\n  );\n};\n\nexport default Application;\n")),Object(a.b)("p",null,"Now we can update the ",Object(a.b)("inlineCode",{parentName:"p"},"Grudges.js")," list:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport Grudge from './Grudge';\nimport { GrudgeContext } from './GrudgeContext';\n\nconst Grudges = () => {\n  const { grudges } = React.useContext(GrudgeContext);\n\n  return (\n    <section className=\"Grudges\">\n      <h2>Grudges ({grudges.length})</h2>\n      {grudges.map(grudge => (\n        <Grudge key={grudge.id} grudge={grudge} />\n      ))}\n    </section>\n  );\n};\n\nexport default Grudges;\n")),Object(a.b)("p",null,"And finally update the individual grudges:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React from \'react\';\nimport { GrudgeContext } from \'./GrudgeContext\';\n\nconst Grudge = ({ grudge }) => {\n  const { toggleForgiveness } = React.useContext(GrudgeContext);\n\n  return (\n    <article className="Grudge">\n      <h3>{grudge.person}</h3>\n      <p>{grudge.reason}</p>\n      <div className="Grudge-controls">\n        <label className="Grudge-forgiven">\n          <input\n            type="checkbox"\n            checked={grudge.forgiven}\n            onChange={() => toggleForgiveness(grudge.id)}\n          />{\' \'}\n          Forgiven\n        </label>\n      </div>\n    </article>\n  );\n};\n\nexport default Grudge;\n')),Object(a.b)("p",null,"Notice that we are losing some of the optimisations that we made here + the ability to unit test smaller parts."),Object(a.b)("p",null,"When it comes to testing, you now need to pass the a provider. You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"container")," pattern or ",Object(a.b)("inlineCode",{parentName:"p"},"HOC"),' pattern to "hug" these changes to help.'),Object(a.b)("h2",{id:"data-fetching"},"Data Fetching"),Object(a.b)("p",null,"The question is whether or not we need to bring in any heavy-weight tools into our application like RxJS etc to help cancel and debounce API calls etc."),Object(a.b)("p",null,"Creating a custom hook for a fetch:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const useFetch = url => {\n  const [response, setResponse] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    console.log('Fetching');\n\n    setLoading(true);\n    setError(null);\n    setResponse(null);\n\n    fetch(url)\n      .then(response => response.json())\n      .then(response => {\n        setResponse(response);\n        setLoading(false);\n      })\n      .catch(error => {\n        setError(error);\n        setLoading(false);\n      });\n  }, [url]);\n\n  return [response, loading, error];\n};\n")),Object(a.b)("h3",{id:"refactoring-to-a-reducer"},"Refactoring to a reducer"),Object(a.b)("p",null,"Something that is important here is that we are handling cases for:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Fetching"),Object(a.b)("li",{parentName:"ol"},"Complete response"),Object(a.b)("li",{parentName:"ol"},"Errors")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const fetchReducer = (state, action) => {\n  if (action.type === 'FETCHING') {\n    return {\n      result: null,\n      loading: true,\n      error: null,\n    };\n  }\n\n  if (action.type === 'RESPONSE_COMPLETE') {\n    return {\n      result: action.payload.result,\n      loading: false,\n      error: null,\n    };\n  }\n\n  if (action.type === 'ERROR') {\n    return {\n      result: null,\n      loading: false,\n      error: action.payload.error,\n    };\n  }\n\n  return state;\n};\n")),Object(a.b)("p",null,"Now we can dispatch actions."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const useFetch = (url, dependencies = [], formatResponse = () => {}) => {\n  const [state, dispatch] = useReducer(fetchReducer, initialState);\n\n  useEffect(() => {\n    dispatch({ type: 'FETCHING' });\n    fetch(url)\n      .then(response => response.json())\n      .then(response => {\n        dispatch({\n          type: 'RESPONSE_COMPLETE',\n          payload: { result: formatResponse(response) },\n        });\n      })\n      .catch(error => {\n        dispatch({ type: 'ERROR', payload: { error } });\n      });\n  }, [url, formatResponse]);\n\n  const { result, loading, error } = state;\n\n  return [result, loading, error];\n};\n")),Object(a.b)("h2",{id:"thunks"},"Thunks"),Object(a.b)("p",null,"Something we get in Redux is middleware. The reducer itself does not have an idea of asynchonity. It is genuinely other calls that force the async. Redux uses this thing called a ",Object(a.b)("inlineCode",{parentName:"p"},"thunk"),". In normal reducers, we dispatch actions. A thunk itself is a function returned from another function."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"function definitelyNotAThunk() {\n  return function aThunk() {\n    console.log('Hello I am a think.');\n  };\n}\n")),Object(a.b)("h3",{id:"usethunkreducer"},"useThunkReducer"),Object(a.b)("p",null,"Using this allows us to separate the function from the UI and tells the reducer that does know stuff how to do it."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"useThunkReducer = (reducer, initialState) => {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  const enchancedDispatch = React.useCallback(action => {\n    // example uses Lodash isFunction\n    if (isFunction(action)) {\n      action(dispatch);\n    } else {\n      dispatch(action);\n    }\n  }, [dispatch]);\n\n  return [state, enchancedDispatch];\n};\n\n// in application\nconst fetchCharacters = dispatch => {\n  fetch(endpoint)\n    .then(res => res.json())\n    .then(res => dispatch({ type: 'RES_COMPLETE' }));\n};\n\nconst Application = () => {\n  const [state, dispatch] = useThunkReducer(reducer, initialState);\n\n  // If we want it on load\n  // useEffect(() => {\n  //   dispatch(fetchCharacters)\n  // }, []);\n\n  render() {\n    return (<button onClick={() => dispatch(fetchCharacters)}>Click</button>)\n  }\n};\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Something worth noting here is that Steve mentions that some of the previous performance optimisations that we lost prior can actually be tweaked with react-redux.")),Object(a.b)("h2",{id:"routing--thunks"},"Routing & Thunks"),Object(a.b)("p",null,"This section talks to the perils of ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," and ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch")," ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/stevekinney/star-wars-characters-react-state#the-perils-of-useeffect-and-dependencies"}),"found here"),"."),Object(a.b)("p",null,"For React Router, we have perils to be careful of with the dependencies:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const CharacterView = ({ match }) => {\n  const [character, setCharacter] = useState({});\n\n  useEffect(() => {\n    fetch(endpoint + '/characters/' + match.params.id)\n      .then(response => response.json())\n      .then(response => setCharacter(response.character))\n      .catch(console.error);\n  }, [match.params.id]);\n\n  // ...\n};\n")))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/React/State-Management-In-Pure-React.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-react-state-management-in-pure-react-md-22e8fb8e6c076a53e938.js.map