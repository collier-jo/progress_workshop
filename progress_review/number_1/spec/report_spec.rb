require './lib/report'

describe Report do 
  describe '#count' do
    it "Counts 1 Green" do 
      report = Report.new("Green")
      expect(report.count).to eq("Green: 1")
    end 
    it "Count 1 Amber" do 
      report = Report.new("Amber")
      expect(report.count).to eq("Amber: 1")
    end 

    it "Count 1 Red" do 
      report = Report.new("Red")
      expect(report.count).to eq("Red: 1")
    end

    # it "If not Green, Amber, Red returns uncounted" do 
    #   report = Report.new("Yellow")
    #   expect(report.count).to eq("Uncounted: 1")
    # end

    # it "If lower case 'correct' input returns uncounted" do 
    #   report = Report.new("green")
    #   expect(report.count).to eq("Uncounted: 1")
    # end

    # it "If AmberRedGreen returns uncounted" do 
    #   report = Report.new("AmberRedGreen")
    #   expect(report.count).to eq("Uncounted: 1")
    # end 

    it "Multiple items in string" do 
      report = Report.new("Green, Green, Green")
      expect(report.count).to eq("Green: 3")
    end 
    it "Multiple items in string" do 
      report = Report.new(" Red, Red, Green")
      expect(report.count).to eq("Red: 2\nGreen: 1")
    end 
  end 
end 

## Report new repeated 