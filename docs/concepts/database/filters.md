# Filters

The search, read, update and delete operations allow specifying filters on
any of the fields.

Filters support the following comparison operators:

- **EQ**: equal to is used for exact matching
- **LT**: less than is used for matching documents using less than criteria
- **LTE**: less than or equal to is similar to **LT** but also matches for
  equality
- **GT**: greater than is used for matching documents using greater than
  criteria
- **GTE**: greater than or equal to is similar to **GT** but also matches
  for equality

For multiple conditions, there are two logical operators provided:

- **OR**: Combines multiple filter operators and returns documents when
  either condition is met
- **AND**: Combines multiple filter operators and returns documents when all
  the conditions are met
