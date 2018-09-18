# MVC again

# CRUD ... again 

[CRUD vs REST](https://image.slidesharecdn.com/restvssoap-130104080511-phpapp01/95/rest-vs-soap-40-638.jpg?cb=1357286773)


# REST ... again

# RESTful Routing

- index
- show
- new
- edit
- create
- update
- delete

# erb templates in HTML

# params hash from forms

# our app - dog site

[RESTful routes](https://i.imgur.com/omvB7JJ.png)

https://loremflickr.com/


# howto:

- corneal
- bundle
- create the model
- `rake db:create_migration NAME=create_model_table`

```ruby

create_table :model_name_plural do |t|
  t.string :name
  t.string :other_string
  t.integer :some_number
end
```

- what to do after migrating?
- create a separate controller for the model, don't put stuff in the app controller

```ruby
class ModelNameController < ApplicationController

end
```

```
use ModelNameController
```

- create index and show pages
- `a` tags - what kind of requests?
- how to use `a` tags to go to a given resource?
- create path of new - the form (remember about the params clash from yesterday!)
- let's look up the `form` tag documentation (action and method)
- `post` to `/dogs` is different to `get` to `/dogs`
- `name` of `input` is the `key` in the `params` hash! *v. important*
- what to do after the post?
- optimizing the post by setting `name` to `dog[breed]` syntax
- patching via method post, with a hidden input !
- `<input type="hidden" name="_method" value="patch">
- # in config.ru `use Rack:MethodOverride`


# Sinatra forms

## What will we be doing:

- CRUD, REST, HTTP; The acronym festival
- Implementing RESTful routing for one resource
- Write html templates w/ `erb`
- Build params hashes from forms

## #RESTful routing for our resource: the DOG

| Name | Path | HTTP Verb | Purpose |
| --- | --- | --- | --- |
| Index | /dogs | GET | List all dogs |
| New  | /dogs/new | GET | Show new dog *form* |
| Create | /dogs | POST | Create a new dog, then redirect  |
| Show | /dogs/:id | GET | Show info about ONE specific dog |
| Edit | /dogs/:id/edit | GET | Show edit *form* for one dog |
| Update | /dogs/:id | PUT | Update a particular dog, redirect |
| Destroy | /dogs/:id | DELETE | Delete a particular dog, then redirect |

## Caveat on PATCH and DELETE
