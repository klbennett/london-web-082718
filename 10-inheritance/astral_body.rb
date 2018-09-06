class AstralBody
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class Star < AstralBody
end

class Planet < AstralBody
  def initialize(name, habitability)
    super(name)
    @habitable = habitability
  end

  def habitable?
    positive_words = ['yes', 'habitable', 'true', 'y', '1']
    negative_words = ['no', 'unhabitable', 'false', 'n', '0', 'nil']
    habitability_string = @habitable.split()
    positive_words_found = []
    negative_words_found = []
    return_hash = {
      habitable: false,
      positive_words_found: 0,
      negative_words_found: 0
    }

    habitability_string.each do |word|
      if positive_words.include?(word)
        positive_words_found << word
      elsif negative_words.include?(word)
        negative_words_found << word
      end
    end

    return_hash[:positive_words_found] = positive_words_found.length
    return_hash[:negative_words_found] = negative_words_found.length

    if positive_words_found.length > negative_words_found.length
      return_hash[:habitable] = true
    end

    return_hash
  end
end

class Dwarf < Planet
end

class Pluto < Dwarf
end

class Moon < AstralBody
end
