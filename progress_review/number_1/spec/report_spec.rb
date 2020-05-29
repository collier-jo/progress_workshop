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
  end 
end 

## 