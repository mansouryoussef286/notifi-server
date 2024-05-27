# Centralized Notification Service
This API provides a centralized service for handling users notification using message queuing **RabbitMQ** for multiple applications. It abstracts the logic of connecting to notification providers. Applications can integrate with this API using API keys and secrets instead of implementing their own notifying logic.

<br>
<br>

## Code Flow Sequence Diagrams
<details open>
  <!-- Dropdown Title -->
  <summary>
    <h2>Notification flow:</h2>
  </summary>
  <!-- Dropdown Part -->
  <img style="max-height:500px;" src="/ReadmeAssets/notifi-server.png" alt="notification flow" id="notification-flow">
</details>

<br>
<br>

