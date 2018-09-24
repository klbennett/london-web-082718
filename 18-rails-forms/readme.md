# Rails forms & validations

# COPY ALL CODE w/o FLASH

`rails new cupcakeshop`

Full CRUD on one model.

`rails g model Cupcake name price:integer`

`rails db:migrate`

Make some cupcakes in the console!

How do we accept requests? Routes!

`INSERT CUPCAKE ROUTES HERE`

`INSERT CC CONTROLLER HERE`

`INSERT THE CUPCAKE index VIEW HERE` (without the errors)

# the process of creation - what kind of request do we need?

# `form for` - directly works with a model. All the fields of the form should match with a model. It's important to remember that you need to create a new object instance on the `new` method in the controller.

- get into byebug and look at params - note where things are and what's inside. Esp. the 'permitted' part. You can only allow permitted params to be accepted.
- strong params to rescue! `cupcake_params`. Pass exactly what's needed. You decide what's sent to AR!

# validation - why and how

How do we prevent people from creating empty / invalid entries?

Look up Rails Guides validations!

This works for edit and new - due to the fact that it's on the model.

What happens after unsuccessful creation? Redirect to `index`. That's poor user experience. Look at SQL logs and see rollbacks.

`cupcake.valid?` 

`cupcake.errors`

Requests are stateless. Not really... 

ENTER FLASH!

before_action!

how does new/edit form know what is its http verb?

partials!

deleting can't be done w/ a form_for - why?

enter `form_tag`

validations will be on code challenge! Not custom ones, though.
before_action is not going to be there. Nor the partials.
