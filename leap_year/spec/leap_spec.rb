require "./lib/leap"

describe Leap do
  describe '#check_number' do 
    it "checks if number is a leap year" do 
      number = 400
      expect(subject.check_number(number)).to eq("#{number}: Is a leap year")
    end 
    it "checks that a number divisable by 100 but not 400 is NOT leap" do 
      number = 1700
      expect(subject.check_number(number)).to eq("#{number}: Not a leap year")
    end

    it "checks that a number divisable by 4 but not 100 is a leap" do 
      number = 2004
      expect(subject.check_number(number)).to eq("#{number}: Is a leap year")
    end 
  end 
end 