# extra stuff on ruby blocks
 - procs
 - closures

# what is TDD

 - tests first
 - fail the test
 - naive pass
 - optimised pass


```bash
rspec --init
```

Gemfile
```
gem 'rspec'
```

```
--color
--format documentation
--require spec_helper
```

```ruby
require_relative '../path/to/file.rb'

describe 'this function'
  it 'does work'
  end
end
```

# types of test

- base case (happy path)
- sad path
- extreme edge cases

# warnings

The code that works is not code that is good. The latter can be extended, understood by other developers, and built upon as the software you're working on grows in complexity. In the meantime the methods have to stay TESTABLE.

Code that's easy to test is easy to reason about. It leads to code which has good separation of concerns and as high as possible degree of idempotency.

A lack of a well-written test suite for the project you're working on is a sign of a lack of responsibility. Unless the project is an experiment, mvp that your team is supposed to hack together in a couple days, it HAS TO be fully tested. A large codebase with no tests is a red flag.
