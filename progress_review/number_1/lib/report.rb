class Report
  def initialize(school_report)
    @school_report = school_report
  end 

  def count

    report_array = @school_report.split(",")

    counter = 0 

    colour_hash = {}

    report_array.each do |colour|
      if colour_hash["#{colour}"] == nil
        colour_hash["#{colour}"] = 1
      else 
        colour_hash["#{colour}"] += 1
      end 
    end 

    colour_hash.each do |key, value|
      return "#{key}: #{value}"
    end 
  end
end 
