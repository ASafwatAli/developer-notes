(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{jhQU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Ruby/Ruby-On-Rails.md"}});var s={_frontmatter:i},o=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(o,l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ruby-on-rails"},"Ruby On Rails"),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",l({parentName:"li"},{href:"https://guides.rubyonrails.org/getting_started.html"}),"Getting Start with Rails")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",l({parentName:"li"},{href:"https://thoughtbot.com/blog/back-to-basics-http-requests"}),"HTTP Requests in Rails Apps")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",l({parentName:"li"},{href:"https://guides.rubyonrails.org/v5.2/action_controller_overview.html"}),"Action Controlller Overview"))),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails new [app] # scaffold new app\nrails server # serve on 3000\nbundle install --without production # install dev deps\nrails generate scaffold User name:string email:string # generate basic User schema\nrails generate controller Welcome index # generate new Welcome page\nrails destroy model User # rollback created User\nrails db:migrate # migrate database\nrails db:rollback # undo previous db command\nrails db:migrate VERSION=0 # migrate all the way back to the beginning\n")),Object(a.b)("h3",{id:"rake"},"Rake"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"rake = Ruby Make"),Object(a.b)("li",{parentName:"ul"},"rake used extensively before Rails 5"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rails db:migrate")," === ",Object(a.b)("inlineCode",{parentName:"li"},"bundle exec rake db:migrate"))),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sudo gem install rails (-v 2.3.8)")),Object(a.b)("p",null,"Or use ",Object(a.b)("inlineCode",{parentName:"p"},"rvm")," or ",Object(a.b)("inlineCode",{parentName:"p"},"asdf"),". Follow those instructions from their respective sites."),Object(a.b)("h3",{id:"up-and-running"},"Up and Running"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails new [project-name]\ncd [project-name]\nbundle install # may need to `bundle update`\nrails server # start the server on port 3000\n")),Object(a.b)("h2",{id:"hello-world"},"Hello World"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails new hello-world\ncd hello-world\nrails server # start server on port 3000\n")),Object(a.b)("p",null,"To change our default page, we can update the ",Object(a.b)("inlineCode",{parentName:"p"},"application")," controller and ",Object(a.b)("inlineCode",{parentName:"p"},"config/routes.rb")," file."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"# app/controllers/application_controller\nclass ApplicationController < ActionController::Base\n  def hello\n    render html: \"Hello, world!\"\n  end\nend\n\n# config/routes.rb\nRails.application.routes.draw do\n  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\n  root 'application#hello'\nend\n")),Object(a.b)("p",null,'Now if we refresh the page, we should get a basic "Hello, world!" string!'),Object(a.b)("h2",{id:"generating-a-schema"},"Generating A Schema"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails generate scaffold User name:string email:string # generate basic User schema\n")),Object(a.b)("h2",{id:"migrating-new-schemas-to-a-database"},"Migrating New Schemas To A Database"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails db:migrate\n# for older versions\nbundle exec rake db:migrate\n")),Object(a.b)("h2",{id:"crud-operations-for-the-records"},"CRUD Operations For The Records"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"URL"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Action"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Purpose"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"/users"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"index"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"List all users")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"/users/1"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"show"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Page to show user with ID 1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"/users/new"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"new"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Page to make a new user")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"/users/1/edit"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"edit"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Page to edit user with ID 1")))),Object(a.b)("h3",{id:"setting-users-to-root"},"Setting /users to root"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"# config/routes.rb\nRails.application.routes.draw do\n  resources :users\n  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\n  root 'users#index'\nend\n")),Object(a.b)("h2",{id:"a-generated-controller"},"A Generated Controller"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"class UsersController < ApplicationController\n  # ...\n\n  # GET /users\n  # GET /users.json\n  def index\n    @users = User.all\n  end\n\n  # ...\nend\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@users = User.all")," fetches all users from the database and stores them in the variable ",Object(a.b)("inlineCode",{parentName:"p"},"@users"),"."),Object(a.b)("h2",{id:"models"},"Models"),Object(a.b)("p",null,"Using the generated data models, we can set validations and relationships."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"class Micropost < ApplicationRecord\n  validates :content, length: {maximum: 140}, presence: true\n  belongs_to :user\nend\n\nclass User < ApplicationRecord\n  has_many :microposts\n  validates :content, length: {maximum: 140}\nend\n")),Object(a.b)("h2",{id:"building-static-pages"},"Building Static Pages"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"> rails generate controller StaticPages home help\nRunning via Spring preloader in process 53372\n      create  app/controllers/static_pages_controller.rb\n       route  get 'static_pages/home'\nget 'static_pages/help'\n      invoke  erb\n      create    app/views/static_pages\n      create    app/views/static_pages/home.html.erb\n      create    app/views/static_pages/help.html.erb\n      invoke  test_unit\n      create    test/controllers/static_pages_controller_test.rb\n      invoke  helper\n      create    app/helpers/static_pages_helper.rb\n      invoke    test_unit\n      invoke  assets\n      invoke    coffee\n      create      app/assets/javascripts/static_pages.coffee\n      invoke    scss\n      create      app/assets/stylesheets/static_pages.scss\n")),Object(a.b)("p",null,"This will build a StaticPages controller and pages ",Object(a.b)("inlineCode",{parentName:"p"},"home")," and ",Object(a.b)("inlineCode",{parentName:"p"},"help"),"."),Object(a.b)("p",null,"Build that controller using ",Object(a.b)("inlineCode",{parentName:"p"},"StaticPages")," would also work if we used the snake case version ",Object(a.b)("inlineCode",{parentName:"p"},"static_pages"),"."),Object(a.b)("p",null,"We can undo things by running ",Object(a.b)("inlineCode",{parentName:"p"},"rails destroy controller StaticPages home help"),"."),Object(a.b)("p",null,"After the pages are generated, we can see it has been added to to our ",Object(a.b)("inlineCode",{parentName:"p"},"config/routes.db")," file:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"Rails.application.routes.draw do\n  get 'static_pages/home'\n  get 'static_pages/help'\n  # ... rest omitted for brevity\nend\n")),Object(a.b)("h3",{id:"understanding-how-static-pages-work"},"Understanding How Static Pages Work"),Object(a.b)("p",null,"We can find the logic for our controller coming from ",Object(a.b)("inlineCode",{parentName:"p"},"app/controllers/static_pages_controller.rb"),":"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"class StaticPagesController < ApplicationController\n  def home\n  end\n\n  def help\n  end\nend\n")),Object(a.b)("p",null,"While these methods in Ruby wouldn't do much, the story is different for Rails. First of all, notice that our Controller inherits from the ",Object(a.b)("inlineCode",{parentName:"p"},"ApplicationController"),". Rails looks in the Static Pages controller for the URL ",Object(a.b)("inlineCode",{parentName:"p"},"/static_pages/home"),", executes the code in the ",Object(a.b)("inlineCode",{parentName:"p"},"home")," method and then renders the view."),Object(a.b)("p",null,"Given the ",Object(a.b)("inlineCode",{parentName:"p"},"home")," action is empty, all the visit to the URL mentioned prior does is render the view."),Object(a.b)("h2",{id:"updating-the-test-helper"},"Updating The Test Helper"),Object(a.b)("p",null,"If you update ",Object(a.b)("inlineCode",{parentName:"p"},"test/test_helper.rb")," and update the lines post-last ",Object(a.b)("inlineCode",{parentName:"p"},"require")," to include the following, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"Minitest Reporter"),":"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),'# ... omitted\nrequire "minitest/reporters"\nMinitest::Reporters.use!\n# ... omitted\n')),Object(a.b)("h3",{id:"automating-the-running-of-tests"},"Automating The Running Of Tests"),Object(a.b)("p",null,"We can use ",Object(a.b)("inlineCode",{parentName:"p"},"Guard")," to do this for us in an equivalent to ",Object(a.b)("inlineCode",{parentName:"p"},"watch")," mode!"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"bundle exec guard init\n")),Object(a.b)("p",null,"For the sake of Git, it is recommended to add the ",Object(a.b)("inlineCode",{parentName:"p"},"guard/")," folder into ",Object(a.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(a.b)("h2",{id:"model-relationships"},"Model Relationships"),Object(a.b)("p",null,"In Ruby, we can model relationships using the following:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-shell"}),"rails generate model Relationship follower_id:integer followed_id:integer\n")),Object(a.b)("h2",{id:"adding-an-index-to-db-schemas"},"Adding An Index To DB Schemas"),Object(a.b)("p",null,"Assuming we created the relationship in the above section, we could update the file ",Object(a.b)("inlineCode",{parentName:"p"},"db/migrate/[timestamp]_create_relationships.rb")," for indexes:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),"class CreateRelationships < ActiveRecord::Migration[5.0]\n  def change\n    create_table :relationships do |t|\n      t.integer :follower_id\n      t.integer :followed_id\n      t.timestamps\n    end\n\n    # For the indexes\n    add_index :relationships, :follower_id\n    add_index :relationships, :followed_id\n    add_index :relationships, [:follower_id, :followed_id], unique: true\n  end\nend\n")),Object(a.b)("p",null,"Re-running ",Object(a.b)("inlineCode",{parentName:"p"},"rails db:migrate")," will update the relationships for the database."),Object(a.b)("h3",{id:"implementing-the-has-many-relationship"},"Implementing The Has-Many Relationship"),Object(a.b)("p",null,"For the example of ",Object(a.b)("inlineCode",{parentName:"p"},"User"),", we can update ",Object(a.b)("inlineCode",{parentName:"p"},"app/models/user.rb")," to have the following:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-ruby"}),'# Note: dependent: :destory will remove relationships when the entity is destroyed\nclass User < ApplicationRecord\n  has_many :microposts, dependent: :destroy\n  has_many :active_relationships, class_name: "Relationships", foreign_key: "follower_id", dependent: :destroy\nend\n')))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Ruby/Ruby-On-Rails.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-ruby-ruby-on-rails-md-bd7752913330c022c9be.js.map