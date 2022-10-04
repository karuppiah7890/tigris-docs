# Subscribers

A subscriber is responsible for consuming events from a topic. A topic can
have one or more subscribers.

## Subscribe operations

Subscribe operations retrieve new events from the topic.

![Subscribe](/img/subscribe.jpg)

Tigris TypeScript SDK provides the following two APIs to subscribe to a topic:

- [subscribe()](../typescript/events/publish_subscribe#subscribe-to-a-topic):
  subscribe to all events that are published in a topic
- [subscribeWithFilter()](../typescript/events/publish_subscribe#subscribe-to-only-messages-that-you-need):
  subscribe to a subset of events published in a topic by filtering the
  events based on a certain condition

### Ordering of events

A topic is partitioned into 64 partitions by default. Subscribers are
guaranteed to receive events in order within a partition. If you require
global ordering across all events in a topic then you can explicitly set the
number of partitions to 1 while creating the topic.
