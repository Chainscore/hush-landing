---
sidebar_position: 1
title: Protocol overview
---

# Protocol overview

Hush is an execution layer for Cardano users who care about the outcome of a transaction without exposing the full intent behind it.

## The execution promise

You define the result first: the asset you are willing to spend, the asset you expect back, and the minimum acceptable amount. Hush searches for a route that satisfies those constraints and settles only when the complete outcome is available.

### Private by default

The market does not need to see your hand. Hush keeps the request private while competing routes are evaluated, reducing unnecessary signaling around your trade or payment.

### Exact amount or nothing

Slippage and incomplete routes should not turn a clear requirement into a surprise. Hush treats the expected amount as a hard condition: if it cannot be met, the transaction does not settle.

### Sponsored network fee

Hush can sponsor the network fee so the user experience stays focused on the amount being exchanged rather than the mechanics of submitting the transaction.

### Direct wallet settlement

There is no new custodial balance to manage. Once the transaction is signed and accepted, the agreed assets settle directly to the destination wallet.
