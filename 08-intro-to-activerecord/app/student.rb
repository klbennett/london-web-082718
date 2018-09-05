class Student < ActiveRecord::Base
	def uppername
		self.name.upcase
	end
end