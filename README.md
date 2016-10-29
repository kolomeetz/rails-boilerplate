# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


This is rails boilerplate project.


`rails new rails-boilerplate -d postgresql --skip-turbolinks`


Backend:

- PostgreSQL
- Redis
 
Frontend (as gems):

- jQuery
- React (via [rails_react](https://github.com/reactjs/react-rails) gem)
- SASS for stylesheets
- 

Frontend (as node_modules):

- React

Development tools:

- foreman
- guard
- rspec
- capistrano
- rubocop


 
## How to

- fork the repository and checkout your fork locally
- run `rake boilerplate:boil`
- change something in the code
- set env variables
- set database configuration
- run `bundle install`
- run `npm install`
- run `rake db:setup`
- run `foreman start`
- open http://localhost:5000

## Todo

- add system notifications for guard
- add es6, babel
- add rspec
- add redis, sidekiq and sidekiq-admin
- add exception_notification
