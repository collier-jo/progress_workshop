class Report
  def initialize(school_report)
    @school_report = school_report
  end 

  def count
    if @school_report == "Green"
      return "Green: 1"
    elsif @school_report == "Amber"
      return "Amber: 1"
    elsif @school_report == "Red"
      return "Red: 1"
    else 
      return "Uncounted: 1"
    end 
  end
end 