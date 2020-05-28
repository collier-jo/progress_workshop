class Leap 
  def check_number(number)
    if number % 4 == 0 && !(number % 100 == 0)
      return "#{number}: Is a leap year" 
    elsif number % 100 == 0 && !(number % 400 == 0)
      return "#{number}: Not a leap year"  
    elsif number % 400 == 0 
      return "#{number}: Is a leap year"
    end 

  end 
end 