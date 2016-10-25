require "rails_helper"

feature "user activates a repo", js: true do
  context "user has 4 private repos activated" do
    scenario "user is redirected to the prices page" do
      expect(current_path).to eql(prices_path)
    end
  end
end
