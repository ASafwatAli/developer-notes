(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{M519:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),o=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/GraphQL/Clientside-GraphQL-In-React.md"}});var l={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"clientside-graphql-in-react"},"Clientside GraphQL in React"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://static.frontendmasters.com/resources/2019-10-14-full-stack-graphql/client-graphql-react.pdf"}),"Course Slides")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/FrontendMasters/fullstack-graphql"}),"Course Repo")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.apollographql.com/docs/react/data/mutations/"}),"Apollo Client - Mutation docs")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.apollographql.com/docs/link/"}),"Apollo Link Docs")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/APIs-guru/graphql-voyager"}),"GraphQL Voyager")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/APIs-guru/graphql-lodash"}),"GraphQL Lodash")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/OneGraph/graphiql-explorer"}),"Graphiql Explorer")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.onegraph.com/"}),"OneGraph")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://fly.io/"}),"fly.io - app on the edge")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/dotansimha/graphql-code-generator"}),"GraphQL Code Generator"))),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Purpose of GraphQL was to solve how I view can consume data in the exact shape required from the server.")),Object(a.b)("p",null,"These days GraphQL is its own process to build schemas, its own language and more."),Object(a.b)("p",null,"GraphQL is a spec that describes a declarative query language that your clients can use to ask an API for the exact data they want. This is achieved by creating a strongly typed Schema for your API, ultimate flexibility in how your API can resolve data, and client queries validated against your Schema."),Object(a.b)("p",null,"There are several variations and implementations of that spec."),Object(a.b)("h2",{id:"graphql-basics"},"GraphQL Basics"),Object(a.b)("h3",{id:"queries"},"Queries"),Object(a.b)("p",null,"Responsible for retrieving data. We give it an operation name, with optional arguments."),Object(a.b)("p",null,"Operation names are unique names for the cliest side Query and Mutation operations. Used for client side chachingm indexing inside of tools like GraphQL playground, etc. Like naming your functions in JS vs keeping them anonymous."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-graphql"}),"query AllCharacters {\n  characters {\n    results {\n      name\n    }\n  }\n}\n")),Object(a.b)("p",null,"Variables with operations: we can also define arguments. We use the ",Object(a.b)("inlineCode",{parentName:"p"},"$")," to indicate we're using a placeholder, so to we could name an arg page ",Object(a.b)("inlineCode",{parentName:"p"},"$page"),". Query params can also take object."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-graphql"}),"query AllCharacters($page: string) {\n  # takes query variable $page\n  characters(page: $page) {\n    results {\n      name\n    }\n  }\n}\n")),Object(a.b)("h3",{id:"multiple-queries--mutations"},"Multiple Queries & Mutations"),Object(a.b)("p",null,"We can use aliases to change the return variable name. The following changes ",Object(a.b)("inlineCode",{parentName:"p"},"name")," to ",Object(a.b)("inlineCode",{parentName:"p"},"fullName"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-graphql"}),"query AllCharacters($page: string) {\n  # takes query variable $page\n  characters(page: $page) {\n    results {\n      fullName: name\n    }\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that you can do this for any of the query scopes ie ",Object(a.b)("inlineCode",{parentName:"p"},"characters")," could also change to ",Object(a.b)("inlineCode",{parentName:"p"},"filteredCharacters: characters"),".")),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"Mutation")," is used to alter data and can be declared like so:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-graphql"}),"mutation CreateACharacter {\n  createCharacter() {\n\n  }\n}\n")),Object(a.b)("h2",{id:"apollo-client"},"Apollo Client"),Object(a.b)("p",null,"Encapsulates HTTP logic used to interact with a GraphQL API. Doubles as a client side state management alternative as well. If you GraphQL API is also an Apollo Server, it provides some extra features. Offers a plug approach for extending its capabilities. Also framework independent."),Object(a.b)("p",null,"Apollo no longer depends on Redux as well!"),Object(a.b)("h3",{id:"storing-api-data"},"Storing API Data"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"By default, Apollo is going to store all the nodes flat by a unique ID. This also enables it to be easy to update the cache."),Object(a.b)("li",{parentName:"ul"},"Unique ID is defaulted to ",Object(a.b)("inlineCode",{parentName:"li"},".id")," or ",Object(a.b)("inlineCode",{parentName:"li"},"._id")," from nodes. You can change this."),Object(a.b)("li",{parentName:"ul"},"Every node should send an ",Object(a.b)("inlineCode",{parentName:"li"},".id")," or ",Object(a.b)("inlineCode",{parentName:"li"},"._id"),", or none at all. Or you have to customize that logic.")),Object(a.b)("h3",{id:"client--querying"},"Client + Querying"),Object(a.b)("p",null,"Setting up the client:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// client.js\nimport { ApolloClient } from 'apollo-client';\n// the is the default cache\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport { HttpLink } from 'apollo-link-http';\nimport gql from 'graphql-tag';\n\nconst cache = new InMemoryCache();\n// tell the click where the server is\nconst link = new HttpLink({ uri: 'http://localhost:4000/' });\n\n// initialising the client\nconst client = new ApolloClient({\n  cache,\n  link,\n});\n\nconst query = gql`\n  {\n    # takes query variable $page\n    characters(page: $page) {\n      results {\n        id\n        name\n      }\n    }\n  }\n`;\n\nclient.query({ query }).then(result => console.log(result));\n\nexport default client;\n")),Object(a.b)("h3",{id:"setting-up-the-provider"},"Setting up the Provider"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { BrowserRouter } from 'react-router-dom';\n// the important parts\nimport { ApolloProvider } from '@apollo/react-hooks';\nimport client from './client';\nimport App from './components/App';\nimport './index.css';\n\nconst Root = () => (\n  <BrowserRouter>\n    <ApolloProvider client={client}>\n      <App />\n    </ApolloProvider>\n  </BrowserRouter>\n);\n\nReactDOM.render(<Root />, document.getElementById('app'));\n\nif (module.hot) {\n  module.hot.accept();\n}\n")),Object(a.b)("h3",{id:"querying-and-mutation-data-from-react-hooks"},"Querying and Mutation Data From React Hooks"),Object(a.b)("p",null,"The important part for queries is using the ",Object(a.b)("inlineCode",{parentName:"p"},"useQuery")," hook ie ",Object(a.b)("inlineCode",{parentName:"p"},"const pets = useQuery(GET_PETS);"),"."),Object(a.b)("p",null,"For mutations, it is ",Object(a.b)("inlineCode",{parentName:"p"},"const [createPet, newPet] = useMutation(CREATE_PET, options)"),"."),Object(a.b)("p",null,"For more indepth information, checkout ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.apollographql.com/docs/react/data/mutations/"}),"Apollo's Mutation docs"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'import React, { useState } from \'react\';\nimport gql from \'graphql-tag\';\nimport PetBox from \'../components/PetBox\';\nimport NewPet from \'../components/NewPet\';\nimport { useQuery, useMutation } from \'@apollo/react-hooks\';\nimport Loader from \'../components/Loader\';\n\n// fragment used for reusable code\nconst PET_DETAILS = gql`\n  fragment PetDetails on Pet {\n    id\n    type\n    name\n    img\n    vacinated @client\n  }\n`;\n\nconst GET_PETS = gql`\n  query petsList($input: PetsInput) {\n    pets(input: $input) {\n      ...PetDetails\n    }\n  }\n  ${PET_DETAILS}\n`;\n\nconst CREATE_PET = gql`\n  mutation CreatePet($input: NewPetInput!) {\n    addPet(input: $input) {\n      ...PetDetails\n    }\n  }\n  ${PET_DETAILS}\n`;\n\nexport default function Pets() {\n  const [modal, setModal] = useState(false);\n  // consists of object data, loading, error\n  const pets = useQuery(GET_PETS);\n\n  const [createPet, newPet] = useMutation(CREATE_PET, {\n    update(\n      cache,\n      {\n        data: { addPet },\n      },\n    ) {\n      // this is the the integral part to the update\n      // of the pets var at the function scope level\n      const { pets } = cache.readQuery({ query: GET_PETS });\n\n      cache.writeQuery({\n        query: GET_PETS,\n        data: { pets: [addPet, ...pets] },\n      });\n    },\n  });\n\n  if (pets.loading) return <Loader />;\n  if (pets.error || newPet.error) return <p>ERROR</p>;\n\n  const onSubmit = input => {\n    setModal(false);\n    createPet({\n      // passing required variables for the createPet mutation\n      variables: { input },\n    });\n  };\n\n  const petsList = pets.data.pets.map(pet => (\n    <div className="col-xs-12 col-md-4 col" key={pet.id}>\n      <div className="box">\n        <PetBox pet={pet} />\n      </div>\n    </div>\n  ));\n\n  if (modal) {\n    return (\n      <div className="row center-xs">\n        <div className="col-xs-8">\n          <NewPet onSubmit={onSubmit} onCancel={() => setModal(false)} />\n        </div>\n      </div>\n    );\n  }\n\n  return (\n    <div className="page pets-page">\n      <section>\n        <div className="row betwee-xs middle-xs">\n          <div className="col-xs-10">\n            <h1>Pets</h1>\n          </div>\n\n          <div className="col-xs-2">\n            <button onClick={() => setModal(true)}>new pet</button>\n          </div>\n        </div>\n      </section>\n      <section>\n        <div className="row">{petsList}</div>\n      </section>\n    </div>\n  );\n}\n')),Object(a.b)("h2",{id:"caching--synchronicity"},"Caching & Synchronicity"),Object(a.b)("p",null,"We need to update the local cache for us to inform React to re-render with the updated data."),Object(a.b)("p",null,"We can keep the cache in sync by:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Refetch matching queries after a mutation."),Object(a.b)("li",{parentName:"ol"},"Use update method on mutation. This is the standard approach."),Object(a.b)("li",{parentName:"ol"},"Watch Queries.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const [createPet, newPet] = useMutation(CREATE_PET, {\n  update(\n    cache,\n    {\n      data: { addPet },\n    },\n  ) {\n    // this is the the integral part to the update\n    // of the pets var at the function scope level\n    const { pets } = cache.readQuery({ query: GET_PETS });\n\n    cache.writeQuery({\n      query: GET_PETS,\n      data: { pets: [addPet, ...pets] },\n    });\n  },\n});\n")),Object(a.b)("h2",{id:"optimistic-updates"},"Optimistic Updates"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Your UI does not wait until after a mutation operation to update itself. Instead it anticipates the response from the API and proceeds as if the API call was sync. The API response replaces the generated one. This gives the illusions of being really fast.")),Object(a.b)("h3",{id:"optimistic-loading"},"Optimistic Loading"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { ApolloClient } from 'apollo-client';\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport { ApolloLink } from 'apollo-link';\nimport { HttpLink } from 'apollo-link-http';\nimport { setContext } from 'apollo-link-context';\nimport gql from 'graphql-tag';\n\n// used for optimistic UI\nconst delay = setContext(\n  request =>\n    new Promise((success, fail) => {\n      setTimeout(() => {\n        success();\n      }, 800);\n    }),\n);\n\nconst cache = new InMemoryCache();\nconst http = new HttpLink({\n  uri: 'http://localhost:4000/',\n});\n\n// adding in the delay via link\n// @see https://www.apollographql.com/docs/link/\nconst link = ApolloLink.from([delay, http]);\n\nconst client = new ApolloClient({\n  cache,\n  link,\n});\n\nexport default client;\n")),Object(a.b)("h3",{id:"optimistic-repsonses"},"Optimistic Repsonses"),Object(a.b)("p",null,"This will optimistically add something to the cache."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// omitting other code for brevity\nconst onSubmit = input => {\n  setModal(false);\n  createPet({\n    // passing required variables for the createPet mutation\n    variables: { input },\n    // this is the object we can use to be optimistic\n    optimisticResponse: {\n      __typename: 'Mutation',\n      addPet: {\n        __typename: 'Pet',\n        id: Math.round(Math.random() * -1000000) + '',\n        type: input.type,\n        name: input.name,\n        img: 'https://via.placeholder.com/300',\n        vacinated: true,\n      },\n    },\n  });\n};\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: If there is an error, Scott says you will need to clean the cache yourself.")),Object(a.b)("h2",{id:"client-side-schemas"},"Client Side Schemas"),Object(a.b)("p",null,"We can extend the server schema through our options in the client by providing ",Object(a.b)("inlineCode",{parentName:"p"},"typeDefs")," and ",Object(a.b)("inlineCode",{parentName:"p"},"resolvers"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { ApolloClient } from 'apollo-client';\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport { ApolloLink } from 'apollo-link';\nimport { HttpLink } from 'apollo-link-http';\nimport { setContext } from 'apollo-link-context';\nimport gql from 'graphql-tag';\n\nconst typeDefs = gql`\n  extend type Pet {\n    vacinated: Boolean!\n  }\n`;\n\nconst resolvers = {\n  Pet: {\n    vacinated: () => true,\n  },\n};\n\n// used for optimistic UI\nconst delay = setContext(\n  request =>\n    new Promise((success, fail) => {\n      setTimeout(() => {\n        success();\n      }, 800);\n    }),\n);\n\nconst cache = new InMemoryCache();\nconst http = new HttpLink({\n  uri: 'http://localhost:4000/',\n});\n\n// adding in the delay via link\n// @see https://www.apollographql.com/docs/link/\nconst link = ApolloLink.from([delay, http]);\n\nconst client = new ApolloClient({\n  cache,\n  link,\n  typeDefs,\n  resolvers,\n});\n\nexport default client;\n")),Object(a.b)("p",null,"We then set a directive on a GraphQL tag to indicate that the value comes from the clientside:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// fragment used for reusable code\nconst PET_DETAILS = gql`\n  fragment PetDetails on Pet {\n    id\n    type\n    name\n    img\n    vacinated @client\n  }\n`;\n")),Object(a.b)("h2",{id:"fragments"},"Fragments"),Object(a.b)("p",null,'"Little pieces of something". The below is a great example of them in action:'),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const PET_DETAILS = gql`\n  fragment PetDetails on Pet {\n    id\n    type\n    name\n    img\n    vacinated @client\n  }\n`;\n\nconst GET_PETS = gql`\n  query petsList($input: PetsInput) {\n    pets(input: $input) {\n      ...PetDetails\n    }\n  }\n  ${PET_DETAILS}\n`;\n\nconst CREATE_PET = gql`\n  mutation CreatePet($input: NewPetInput!) {\n    addPet(input: $input) {\n      ...PetDetails\n    }\n  }\n  ${PET_DETAILS}\n`;\n")),Object(a.b)("h2",{id:"possible-directives"},"Possible directives"),Object(a.b)("p",null,"Out-of-the-box directions:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const PET_DETAILS = gql`\n  fragment PetDetails on Pet {\n    id @skip\n    type @include\n    name\n    img\n    vacinated @client\n  }\n`;\n")),Object(a.b)("h2",{id:"tools"},"Tools"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/APIs-guru/graphql-voyager"}),"GraphQL Voyager")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/APIs-guru/graphql-lodash"}),"GraphQL Lodash")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/OneGraph/graphiql-explorer"}),"Graphiql Explorer")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.onegraph.com/"}),"OneGraph")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://fly.io/"}),"fly.io - app on the edge")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/dotansimha/graphql-code-generator"}),"GraphQL Code Generator"))))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/GraphQL/Clientside-GraphQL-In-React.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-graph-ql-clientside-graph-ql-in-react-md-cecf8ec7ffc6090cc769.js.map