# Transactions

Transactions allow multiple clients to concurrently read and write data in
the database with ACID guarantees. By virtue of using
[FoundationDB](https://apple.github.io/foundationdb/transaction-processing.html)
under the hood Tigris employs ACID transactions implicitly for all
operations.

Following are some of the properties of transactions in Tigris:

- All operations are always atomic, durable and leave the database in a
  consistent state
- Transactions are executed using optimistic concurrency control which ensures
  that documents don't need to be locked when updating
- Transactions are globally ordered and provide strict serializability guarantee

:::tip

Transactions in Tigris work across collections and documents without any
restrictions or performance penalty.

:::

## How to use transactions

Transactions in Tigris can be executed in an interactive manner. You can
begin a transaction and perform multiple operations inside this
transaction's context. Commit provides all or nothing semantics by ensuring
that there are no partial updates in the database if a transaction fails.

```ts
await db.transact(async (tx) => {
  // read user 1
  const user1: User | undefined = await users.findOne(
    {
      userId: 1,
    },
    tx
  );

  // read user 2
  const user2: User | undefined = await users.findOne(
    {
      userId: 2,
    },
    tx
  );

  if (user1 === undefined || users2 === undefined) {
    throw new Error("User(s) not found"); // This will auto-rollback transaction
  }

  // deduct balance from user1
  await users.update(
    {
      userId: user1.userId,
    },
    {
      balance: user1.balance - 100,
    },
    tx
  );

  // add balance to user2
  await users.update(
    {
      userId: user2.userId,
    },
    {
      balance: user2.balance + 100,
    },
    tx
  );
});
```

See the language-specific sections for more examples of Transactions:

- [Transactions in TypeScript](../typescript/documents/transactions)
- [Transactions in Go](../golang/documents/transactions)
- [Transactions in Java](../java/transactions)
