---
sidebar_position: 1
title: Developer workflow
---

# Developer workflow

Integrations should expose a clear outcome and leave route discovery to Hush.

## Five steps

1. **Define the outcome.** Specify the input asset, requested asset, amount, destination, and any execution constraints.
2. **Protect the request.** Encode the requirements in the private format used for route evaluation.
3. **Compare routes.** Let Hush evaluate available execution paths against the exact requirements.
4. **Sign once.** Present the user with a single wallet action covering the complete operation.
5. **Settle atomically.** Deliver the requested asset only when the full set of conditions is satisfied.

## Integration principles

- Keep the received amount visible and unambiguous.
- Treat a failed condition as a clean no-op.
- Avoid displaying private route details to observers.
- Make wallet ownership and destination explicit.
- Keep a user-facing link to the Hush community for support and updates.

The protocol is designed to make the user’s intent precise while keeping the execution path quiet.
