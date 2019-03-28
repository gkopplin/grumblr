class RenamePostType < ActiveRecord::Migration[5.2]
  def change
    change_table :posts do |t|
      t.rename :type, :post_type
    end 
  end
end
