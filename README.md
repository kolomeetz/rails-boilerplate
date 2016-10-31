# Rails Boilerplate

TL;DR: Rails 5 + ES6 + React + Redux boilerplate.

## Description

This is Rails boilerplate project to speed up building fullstack applications 
with Rails 5 and modern Javascript stack.

## Ingredients:

Backend:

- PostgreSQL (9.1+)

Frontend (as gems):

- jQuery
- React (via [rails_react](https://github.com/reactjs/react-rails) gem)
- SASS for stylesheets
- browserify
- bootstrap 4.0.0-alpha5

No Turbolinks

Frontend (as node_modules):

- react (for dependency resolutions)
- redux
- browserify

Development tools:

- foreman
- guard
- capistrano
- rubocop

## How to start

- fork the repository and checkout your fork locally
- set new module name in `config/application.rb`
- set env variables in `~/.env`
- run `bundle install`
- run `rake db:create`
- run `npm install`
- launch `foreman start`
- open http://localhost:5000

## TODO 

- add rspec
- add redis, sidekiq and sidekiq-admin
- add exception_notification
