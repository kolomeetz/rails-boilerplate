source 'https://rubygems.org'

# Backend
gem 'dotenv-rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'pg', '~> 0.18'
gem 'redis', '~> 3.0'
gem 'puma', '~> 3.0'
gem 'jbuilder', '~> 2.5'

# Frontend
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'react-rails'
gem 'browserify-rails'
gem 'bootstrap', '~> 4.0.0.alpha3'

source 'https://rails-assets.org' do
  gem 'rails-assets-tether', '>= 1.1.0'
end

# Use Redis adapter to run Action Cable in production
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  gem 'foreman'
  gem 'rubocop'
  gem 'guard'
  gem 'guard-bundler'
  gem 'guard-rspec', require: false
  gem 'guard-rubocop'
  gem 'terminal-notifier'
  gem 'terminal-notifier-guard'

  gem 'factory_girl'

  gem 'annotate'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
