* create
  ```JS
  Company.create!(
  user_id: user1.id, # THIS LINE IS KEY, BECAUSE IT TIES THE POST TO THE USER IN THE DATABASE
  title: 'Title',
  body: 'Body body body'
)

  ```
* look up at model level
```JS
  def self.locate(state, yr,search)
    search_query = "%#{search.downcase}%"
    Company.where('state = ?', state)
    .or(Company.where('year_founded < ?', yr))
    .or(Company.where("lower(country) like ?", search))
  end

  def num_companies
    // association with employee
     self.employee.count(:company_id)
  end
```

* call those methods at controller. when frontend hits the route.
