class CreateFingerprints < ActiveRecord::Migration
  def change
    create_table :fingerprints do |t|
      t.string :prints
      t.references :songs, index: true, foreign_key: true
    end
  end
end
