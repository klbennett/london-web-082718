```ruby
# what is the data type of x?
# what is the value of x?
x = 3
puts x.class
puts x

# what happens when we run this code?
# what is split and where does it come from?
# how does x know what to do with split?
# what's happening when we run this code?
x = "hello how are you"
x.split

x = 3

# what does message name mean here?
message_name = :+

# what does send do?
# what does the argument to send specify?
# what other arguments does send take?
x.send(message_name, 1) === x + 1

# most operators in Ruby are just messages sent to objects
names = [
  "Ian",
  "Sophie",
  "JJ",
  "Rishi",
  "Johann",
  "Esmery",
  "Terrance"
]
names[0]
names.[](0)
names.send(:[], 0)

# objects complain when they don't know how to respond to messages
# objects complain when they don't know how to execute methods
names.respond_to_undefined_method

# check if an object responds to a message
names.responds_to? message_name

# what is an object?

o = Object.new # <Object:0x007f870d02d550>
o.object_id # 70109007801000

# Where does object ID come from?
# https://stackoverflow.com/questions/2818602/in-ruby-why-does-inspect-print-out-some-kind-of-object-id-which-is-different
(o.object_id * 2).to_s(16) # 7f870d02d550
"%x" % (o.object_id << 1) # 7f870d02d550
```
