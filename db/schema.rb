# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20141113193828) do

  create_table "classregistrations", :force => true do |t|
    t.integer "user_id"
    t.integer "classroom_id"
    t.integer "classregistration_type"
  end

  create_table "classrooms", :force => true do |t|
    t.date   "startdate"
    t.string "name"
    t.string "class_key"
  end

  create_table "entries", :force => true do |t|
    t.integer "student_id"
    t.date    "date"
    t.boolean "v1"
    t.boolean "v2"
    t.boolean "v3"
    t.boolean "v4"
    t.boolean "v5"
    t.boolean "v6"
    t.boolean "v7"
    t.boolean "v8"
    t.boolean "v9"
    t.boolean "v10"
    t.boolean "v11"
    t.boolean "v12"
    t.boolean "v13"
  end

  create_table "students", :force => true do |t|
    t.string "name"
    t.string "email"
  end

  create_table "users", :force => true do |t|
    t.string  "first_name"
    t.string  "last_name"
    t.string  "email"
    t.string  "uid"
    t.integer "user_type"
  end

  create_table "virtueentries", :force => true do |t|
    t.integer "classregistration_id"
    t.integer "v_id"
    t.date    "date"
    t.integer "violation_count"
    t.string  "note"
  end

end
