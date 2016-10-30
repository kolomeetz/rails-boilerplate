# Rails Boilerplate

TL;DR: Rails 5 + React + Redux + ES6 boilerplate.

## Description

This is Rails boilerplate project to speed up building fullstack applications wh

on React

`rails new rails-boilerplate -d postgresql --skip-turbolinks`

## Ingredients:

Backend:

- PostgreSQL (9.1+)
- Redis
 
Frontend (as gems):

- jQuery
- React (via [rails_react](https://github.com/reactjs/react-rails) gem)
- SASS for stylesheets
- browserify
- bootstrap 4.0.0-alpha5

Frontend (as node_modules):

- react (for dependency resolutions)
- redux
- browserify

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
- set env variables in `~/.dev`
- set database configuration
- run `bundle install`
- run `rake db:setup`
- run `npm install`
- run `foreman start`
- open http://localhost:5000

## TODO 

- add bootstrap 4
- add rspec
- add redis, sidekiq and sidekiq-admin
- add exception_notification
